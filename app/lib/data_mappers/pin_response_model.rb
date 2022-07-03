module DataMappers
  class PinResponseModel < DataMappers::BaseResponseModel
    def model_to_camel_case_response pin
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
