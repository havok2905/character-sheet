# frozen_string_literal: true

class PinsController < ApplicationController
  def create
    pin_params = create_params
    pin = Pin.create pin_params
    render json: { pin: pin }
  end

  def destroy
    pin = Pin.find params[:id]
    pin.destroy if pin
    render json: {}
  end

  def update
    pin_params = update_params
    pin = Pin.find(pin_params[:id]).update pin_params
    render json: { pin: pin }
  end

  private

  def create_params
    params.require(:pin).permit(:id, :map_id, :name, :x, :y)
  end

  def update_params
    params.require(:pin).permit(:id, :map_id, :name, :x, :y)
  end
end