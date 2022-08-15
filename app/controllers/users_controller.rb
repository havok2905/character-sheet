# frozen_string_literal: true

# u = User.new({ first_name: 'Chris', last_name: 'McLean', password: 'password', password_confirmation: 'password', username: 'havok' })
# u.save!

class UsersController < ApiController
  def index
    u = User.all
    users = users_response_model u
    render json: { users: }
  end

  private

  def user_response_model(user)
    mapper = DataMappers::Responses::UserDataMapper.new
    mapper.run user
  end

  def users_response_model(users)
    users.map do |user|
      user_response_model user
    end
  end
end
