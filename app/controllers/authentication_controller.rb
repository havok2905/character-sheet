# frozen_string_literal: true

class AuthenticationController < ApplicationController
  def login
    user = User.find_by(username: params[:username])

    if user&.authenticate(params[:password])
      json_web_token = Auth::JsonWebToken.new
      token = json_web_token.encode(user_id: user.id)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
end
