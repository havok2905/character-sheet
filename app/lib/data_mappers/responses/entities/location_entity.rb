# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class LocationEntity < DataMappers::Responses::Entities::BaseEntity
        def run(location)
          hero_image_url = get_image_url location, :hero_image
          sigil_url = get_image_url location, :sigil

          {
            content: location.content,
            description: location.description,
            heroImageUrl: hero_image_url,
            id: location.id,
            name: location.name,
            sigilUrl: sigil_url
          }
        end
      end
    end
  end
end
