module DataMappers
  class FactionResponseModel < DataMappers::BaseResponseModel
    def model_to_camel_case_response faction, creatures, characters
      image_url = get_image_url faction, :image

      characters_response = characters.map do |character|
        mapper = DataMappers::CharacterResponseModel.new
        mapper.model_to_camel_case_response character
      end
  
      creatures_response = creatures.map do |creature|
        mapper = DataMappers::CreatureResponseModel.new
        mapper.model_to_camel_case_response creature
      end

      {
        alignment: faction.alignment,
        allies: faction.allies,
        characters: characters_response,
        creatures: creatures_response,
        description: faction.description,
        goals: faction.goals,
        id: faction.id,
        ideals: faction.ideals,
        imageUrl: image_url,
        name: faction.name,
        rivals: faction.rivals
      }
    end
  end
end