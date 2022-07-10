# frozen_string_literal: true

module DataMappers
  module Responses
    class LocationDataMapper < DataMappers::Responses::BaseDataMapper
      def run(location, map)
        image_url = get_image_url map, :image
        sigil_url = get_image_url location, :sigil

        {
          content: location.content,
          description: location.description,
          id: location.id,
          map: {
            id: map&.id,
            imageUrl: image_url,
            pins: pins_response(map)
          },
          name: location.name,
          sigilUrl: sigil_url
        }
      end

      private

      def pins_response(map)
        pins = map.pins || []

        pins.map do |pin|
          {
            id: pin.id,
            mapId: pin.map_id,
            name: pin.name,
            x: pin.x,
            y: pin.y
          }
        end
      end
    end
  end
end