# frozen_string_literal: true

module DataMappers
  module Responses
    class UserDataMapper
      def run(user)
        user_entity = DataMappers::Responses::Entities::UserEntity.new
        user_entity.run user
      end
    end
  end
end
