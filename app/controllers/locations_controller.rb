# frozen_string_literal: true

class LocationsController < ApplicationController
  def index
    l = Location.order(:name)
    locations = locations_response_model l
    render json: { locations: }
  end

  def show
    l = Location.find params[:id]
    m = Map.where(location_id: l.id).first
    location = location_response_model l, m
    render json: { location: }
  end

  def create
    l = Location.create create_location_params
    location = location_response_model l, nil
    render json: { location: }
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
    render json: { location: }
  end

  def upload_hero_image
    l = Location.find params[:id]
    m = Map.where(location_id: params[:id]).first
    l.hero_image = params['location-hero-image-file-upload']
    l.save!
    location = location_response_model l, m
    render json: { location: }
  end

  def upload_sigil
    l = Location.find params[:id]
    m = Map.where(location_id: params[:id]).first
    l.sigil = params['location-sigil-file-upload']
    l.save!
    location = location_response_model l, m
    render json: { location: }
  end

  def update
    l = Location.find params[:id]
    m = Map.where(location_id: params[:id]).first
    l.update update_location_params
    location = location_response_model l, m
    render json: { location: }
  end

  def destroy
    l = Location.find params[:id]
    m = Map.where(location_id: params[:id]).first
    m&.destroy
    l.destroy
    render json: {}
  end

  private

  def location_response_model(location, map)
    mapper = DataMappers::Responses::LocationDataMapper.new
    mapper.run location, map
  end

  def locations_response_model(locations)
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
