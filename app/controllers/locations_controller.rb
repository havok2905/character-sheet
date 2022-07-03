# frozen_string_literal: true

class LocationsController < ApplicationController
  def index
    l = Location.order(:name)
    locations = locations_response_model l
    respond_to do |format|
      format.html
      format.json { render json: { locations: locations } }
     end
  end

  def show
    l = Location.find params[:id]
    m = Map.where(location_id: l.id).first
    location = location_response_model l, m
    respond_to do |format|
      format.html
      format.json { render json: { location: location } }
    end
  end

  def new
  end

  def edit
  end

  def map_settings
  end

  def create
    l = Location.create create_location_params
    location = location_response_model l, nil
    render json: { location: location }
  end

  def upload_map
    l = Location.find params[:id]
    m = Map.where(location_id: params[:id]).first

    if m.present?
      m.image = params['location-map-file-upload']
      m.save!
    else
      m = Map.create({
        image: params['location-map-file-upload'],
        location_id: params[:id]
      })
    end

    location = location_response_model l, m
    render json: { location: location }
  end

  def upload_sigil
    l = Location.find params[:id]
    m = Map.where(location_id: params[:id]).first    
    l.sigil = params['location-sigil-file-upload']
    l.save!
    location = location_response_model l, m
    render json: { location: location }
  end

  def update
    l = Location.find params[:id]
    m = Map.where(location_id: params[:id]).first
    l.update update_location_params
    location = location_response_model l, m
    render json: { location: location }
  end

  def destroy
    l = Location.find params[:id]
    m = Map.where(location_id: params[:id]).first
    m.destroy if m
    l.destroy
    render json: {}
  end

  private

  def location_response_model location, map
    mapper = DataMappers::LocationResponseModel.new
    mapper.model_to_camel_case_response location, map
  end

  def locations_response_model locations
    locations.map do |location|
      map = Map.where(location_id: location.id).first
      location_response_model location, map
    end
  end

  def create_location_params
    params.require(:location).permit(
      :content,
      :description,
      :name
    )
  end

  def update_location_params
    params.require(:location).permit(
      :content,
      :description,
      :name
    )
  end
end
