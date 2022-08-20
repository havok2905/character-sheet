# frozen_string_literal: true

class ApiController < ActionController::API
  before_action :authenticate_request

  private

  def authenticate_request
    json_web_token = Auth::JsonWebToken.new
    token = request.headers['Authorization']
    token = token.split.last if token

    if token.empty?
      render json: { error: 'unauthorized' }, status: :unauthorized
      return
    end

    if json_web_token.expired? token
      render json: { error: 'unauthorized' }, status: :unauthorized
      return
    end

    decoded = json_web_token.decode token

    @current_user = User.find decoded[:user_id]
  end
end
