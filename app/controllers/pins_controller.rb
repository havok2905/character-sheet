# frozen_string_literal: true

class PinsController < ApplicationController
  def create
    pin = Pin.create create_location_params
    render json: { pin: pin }
  end
  
  def destroy
    p = Pin.find params[:id]
    p.destroy if p
    render json: {}
  end

  def update
    pin = Pin.find params[:id]
    pin.update update_pin_params
    render json: { pin: pin }
  end

  private

  def create_pin_params
    params.require(:pin).permit(
      :id,
      :map_id,
      :name,
      :x,
      :y
    )
  end

  def update_pin_params
    params.require(:pin).permit(
      :id,
      :map_id,
      :name,
      :x,
      :y
    )
  end
end