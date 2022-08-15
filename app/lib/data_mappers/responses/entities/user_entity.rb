# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class UserEntity < DataMappers::Responses::Entities::BaseEntity
        def run(user)
          {
            firstName: user.first_name,
            id: user.id,
            lastName: user.last_name,
            username: user.username
          }
        end
      end
    end
  end
end
