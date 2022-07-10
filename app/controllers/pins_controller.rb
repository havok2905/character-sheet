# frozen_string_literal: true

class PinsController < ApplicationController
  def create
    p = Pin.create create_pin_params
    pin = pin_response_model p
    render json: { pin: }
  end

  def destroy
    p = Pin.find params[:id]
    p&.destroy
    render json: {}
  end

  def update
    p = Pin.find params[:id]
    p.update update_pin_params
    pin = pin_response_model p
    render json: { pin: }
  end

  private

  def pin_response_model(pin)
    mapper = DataMappers::PinDataMapper.new
    mapper.run pin
  end

  def create_pin_params
    create_pin_request.deep_transform_keys!(&:underscore)
  end

  def create_pin_request
    params.require(:pin).permit(:id, :mapId, :name, :x, :y)
  end

  def update_pin_params
    update_pin_request.deep_transform_keys!(&:underscore)
  end

  def update_pin_request
    params.require(:pin).permit(:id, :mapId, :name, :x, :y)
  end
end
