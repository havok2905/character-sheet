module DataMappers
  class CharacterResponseModel < DataMappers::BaseResponseModel
    def model_to_camel_case_response character
      image_url = get_image_url character, :image

      {
        id: character.id,
        imageUrl: image_url,
        name: character.name
      }
    end
  end
end