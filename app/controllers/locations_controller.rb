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
    @map = location_map
  end

  def new
    @location = new_location
    @map = new_map
  end

  def create
    @location = Location.create location_params[:location]
    @map = Map.create(image: map_params[:map][:image], location_id: @location.id)
    redirect_to locations_path
  end

  def edit
    @location = location_by_id
    @map = location_map
  end

  def update
    @location = location_by_id
    @map = location_map

    if map_params[:map]
      unless @map.update(map_params[:map])
        render :edit, status: :unprocessable_entity
      end
    end

    if location_params[:location]
      unless @location.update(location_params[:location])
        render :edit, status: :unprocessable_entity
      end
    end

    redirect_to location_path @location
  end

  def destroy
    @location = location_by_id
    @map = location_map
    destroy_error_flash unless @map.destroy && @location.destroy
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
    params.require(:location_form).permit(
      location: [
        :content,
        :description,
        :name,
        :sigil
      ]
    )
  end

  def map_params
    params.require(:location_form).permit(
      map: [
        :image
      ]
    )
  end

  def locations
    Location.order(:name)
  end

  def location_map
    Map.where(location_id: params[:id]).first
  end

  def new_location
    Location.new
  end

  def new_map
    Map.new
  end

  def new_location_with_params
    Location.new location_params[:location]
  end

  def new_map_with_params
    Map.new map_params[:map]
  end
end
