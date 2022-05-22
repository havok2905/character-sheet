# frozen_string_literal: true

class LocationsController < ApplicationController
  before_action :authenticate_user!, only: %i[
    create
    destroy
    edit
    new
    update
  ]

  def index
    @locations = locations
  end

  def show
    @location = location_by_id
  end

  def new
    @location = new_location
  end

  def create
    @location = new_location_with_params

    if @location.save
      redirect_to locations_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @location = location_by_id
  end

  def update
    @location = location_by_id

    if @location.update location_params
      redirect_to location_path @location
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @location = location_by_id
    destroy_error_flash unless @location.destroy
    redirect_to locations_path
  end

  helper_method :modify_location
  def modify_location
    user_signed_in?
  end

  private

  def destroy_error_flash
    flash.alert = 'There was a problem deleting this location.'
  end

  def update_error_flash
    flash.alert = 'There was a problem updating this location.'
  end

  def location_by_id
    Location.find params[:id]
  end

  def location_params
    params.require(:location).permit(
      :content,
      :description,
      :map,
      :name,
      :sigil
    )
  end

  def locations
    Location.order(:name)
  end

  def new_location
    Location.new
  end

  def new_location_with_params
    Location.new location_params
  end
end
