# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authenticate_user!, only: %i[
    create
    destroy
    edit
    index
    update_email
    update_password
    update_role
    update_username
  ]

  def index
    policy = get_policy
    redirect_to_root && return unless policy.view_all
    @users = users
  end

  def create
    policy = get_policy
    redirect_to_root && return unless policy.create
    user = User.new user_params
    flash.alert = 'There was an error creating this user.' unless user.save!
    redirect_to users_path
  end

  def edit
    policy = get_policy
    redirect_to_root && return unless policy.edit
    @user = user_by_id
  end

  def destroy
    policy = get_policy
    redirect_to_root && return unless policy.destroy
    @user = user_by_id
    @user.destroy
    redirect_to users_path
  end

  def update_email
    policy = get_policy
    redirect_to_index && return unless policy.edit
    result = update_entity! :email
    update_error_flash unless result
    redirect_to_index
  end

  def update_role
    policy = get_policy
    redirect_to_index && return unless policy.edit
    result = update_entity! :role
    update_error_flash unless result
    redirect_to_index
  end

  def update_username
    policy = get_policy
    redirect_to_index && return unless policy.edit
    result = update_entity! :username
    update_error_flash unless result
    redirect_to_index
  end

  def update_password
    policy = get_policy
    redirect_to_index && return unless policy.edit
    @user = user_by_id
    result = update_password! @user
    update_error_flash unless result
    redirect_to users_path
  end

  private

  def get_policy
    Policies::UserPolicy.new current_user
  end

  def update_entity!(entity_key)
    return false if params[:user][entity_key].empty?

    @user = user_by_id
    @user.send("#{entity_key}=", params[:user][entity_key])
    @user.save!
  end

  def update_password!(user)
    password = params[:user][:password]
    password_confirmation = params[:user][:password_confirmation]

    return false if password.empty? || password_confirmation.empty? || password != password_confirmation

    user.password = password
    user.password_confirmation = password_confirmation
    @user.save!
  end

  def update_error_flash
    flash.alert = 'There was a problem updating this user.'
  end

  def redirect_to_index
    redirect_to users_path
  end

  def redirect_to_root
    redirect_to root_path
  end

  def user_by_id
    User.find params[:id]
  end

  def user_params
    params.require(:user).permit :username, :email, :password, :password_confirmation, :role
  end

  def users
    User.all
  end
end
