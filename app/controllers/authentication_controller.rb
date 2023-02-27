# frozen_string_literal: true

class AuthenticationController < ApplicationController
  def auth
    json_web_token = Auth::JsonWebToken.new
    token = params['token']

    if token.empty? || json_web_token.expired?(token)
      render json: { error: 'unauthorized' }, status: :unauthorized
      return
    end

    decoded = json_web_token.decode token
    
    user = User.find decoded[:user_id]

    if user.nil?
      render json: { error: 'unauthorized' }, status: :unauthorized
      return
    end

    render json: { token: }, status: :ok
  end

  def login
    user = User.find_by(username: params[:username])

    if user&.authenticate(params[:password])
      json_web_token = Auth::JsonWebToken.new
      token = json_web_token.encode(user_id: user.id)
      render json: { token: }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
end
