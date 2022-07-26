# frozen_string_literal: true

module DataMappers
  module Responses
    class FactionDataMapper
      def run(faction)
        faction_entity = DataMappers::Responses::Entities::FactionEntity.new
        response = faction_entity.run faction
        response[:characters] = characters_response faction
        response[:creatures] = creatures_response faction
        response
      end

      private

      def characters_response(faction)
        characters = faction.characters || []

        characters.map do |character|
          character_entity = DataMappers::Responses::Entities::CharacterEntity.new
          character_entity.run character
        end
      end

      def creatures_response(faction)
        creatures = faction.creatures || []

        creatures.map do |creature|
          creature_entity = DataMappers::Responses::Entities::CreatureEntity.new
          creature_entity.run creature
        end
      end
    end
  end
end