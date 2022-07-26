# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class MapEntity < DataMappers::Responses::Entities::BaseEntity
        def run(map)
          image_url = get_image_url map, :image

          {
            id: map&.id,
            imageUrl: image_url
          }
        end
      end
    end
  end
end
