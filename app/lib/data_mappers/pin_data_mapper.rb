# frozen_string_literal: true

module DataMappers
  class PinDataMapper < DataMappers::BaseDataMapper
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
