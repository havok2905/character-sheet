module DataMappers
  class LocationResponseModel < DataMappers::BaseResponseModel
    def model_to_camel_case_response location, map
      image_url = get_image_url map, :image
      sigil_url = get_image_url location, :sigil

      pins_response = map&.pins&.map do |pin|
        mapper = DataMappers::PinResponseModel.new
        mapper.model_to_camel_case_response pin
      end

      {
        content: location.content,
        description: location.description,
        id: location.id,
        map: {
          id: map&.id,
          imageUrl: image_url,
          pins: pins_response.any? ? pins_response : []
        },
        name: location.name,
        sigilUrl: sigil_url
      }
    end
  end
end
