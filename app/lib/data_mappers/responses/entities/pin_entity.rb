# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class PinEntity < DataMappers::Responses::Entities::BaseEntity
        def run(pin)
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
