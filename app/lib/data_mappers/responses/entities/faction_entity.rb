# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class FactionEntity < DataMappers::Responses::Entities::BaseEntity
        def run(faction)
          image_url = get_image_url faction, :image

          {
            alignment: faction.alignment,
            allies: faction.allies,
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
  end
end
