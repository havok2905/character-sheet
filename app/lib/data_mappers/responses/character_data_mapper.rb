# frozen_string_literal: true

module DataMappers
  module Responses
    class CharacterDataMapper
      def run(character)
        character_entity = DataMappers::Responses::Entities::CharacterEntity.new
        response = character_entity.run character
        response[:creatures] = creatures_response character
        response[:magic_items] = magic_items_response character
        response[:spells] = spells_response character
        response
      end

      private

      def creatures_response(character)
        creatures = character.creatures || []

        creatures.map do |creature|
          creature_entity = DataMappers::Responses::Entities::CreatureEntity.new
          creature_entity.run creature
        end
      end

      def magic_items_response(character)
        magic_items = character.magic_items || []

        magic_items.map do |magic_item|
          magic_item_entity = DataMappers::Responses::Entities::MagicItemEntity.new
          magic_item_entity.run magic_item
        end
      end

      def spells_response(character)
        spells = character.spells || []

        spells.map do |spell|
          spell_entity = DataMappers::Responses::Entities::SpellEntity.new
          spell_entity.run spell
        end
      end
    end
  end
end
