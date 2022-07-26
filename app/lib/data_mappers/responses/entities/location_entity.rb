# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class LocationEntity < DataMappers::Responses::Entities::BaseEntity
        def run(location)
          sigil_url = get_image_url location, :sigil

          {
            content: location.content,
            description: location.description,
            id: location.id,
            name: location.name,
            sigilUrl: sigil_url
          }
        end
      end
    end
  end
end
