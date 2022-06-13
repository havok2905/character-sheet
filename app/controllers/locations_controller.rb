# frozen_string_literal: true

class LocationsController < ApplicationController
  def index
    l = Location.order(:name)
    locations = locations_view_model l
    respond_to do |format|
      format.html
      format.json { render json: { locations: locations } }
     end
  end

  def show
    l = Location.find params[:id]
    m = Map.where(location_id: l.id).first
    location = location_view_model l, m
    respond_to do |format|
      format.html
      format.json { render json: { location: location } }
    end
  end

  def new
  end

  def create
    l = Location.create create_location_params
    location = location_view_model l, nil
    render json: { location: location }
  end

  def edit
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

    location = location_view_model l, m
    render json: { location: location }
  end

  def upload_sigil
    l = Location.find params[:id]
    m = Map.where(location_id: params[:id]).first    
    l.sigil = params['location-sigil-file-upload']
    l.save!
    location = location_view_model l, m
    render json: { location: location }
  end

  def update
    l = Location.find params[:id]
    m = Map.where(location_id: params[:id]).first
    l.update update_location_params
    location = location_view_model l, m
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

  def location_view_model location, map
    sigil_url = location.sigil&.attached? ? url_for(location.sigil) : ''
    image_url = map&.image&.attached? ? url_for(map.image) : ''

    {
      content: location.content,
      description: location.description,
      id: location.id,
      map: {
        imageUrl: image_url,
        pins: map&.pins || []
      },
      name: location.name,
      sigilUrl: sigil_url
    }
  end

  def locations_view_model locations
    locations.map do |location|
      map = Map.where(location_id: location.id).first
      location_view_model location, map
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
