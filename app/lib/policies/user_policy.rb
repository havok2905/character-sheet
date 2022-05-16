# frozen_string_literal: true

module Policies
  class UserPolicy < ApplicationPolicy
    def create
      admin?
    end

    def destroy
      admin?
    end

    def edit
      admin?
    end

    def view_all
      admin?
    end

    private

    def admin?
      @user.present? && @user.role == Permissions::Roles::ADMIN_ROLE
    end
  end
end
