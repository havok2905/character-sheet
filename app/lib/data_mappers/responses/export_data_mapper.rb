# frozen_string_literal: true

module DataMappers
  module Responses
    class ExportDataMapper
      def run(options)
        {
          characters: characters_response(options[:characters]),
          creatures: creatures_response(options[:creatures]),
          magicItems: magic_items_response(options[:magic_items]),
          spells: spells_response(options[:spells])
        }
      end

      private

      def characters_response(characters)
        characters.map do |character|
          character_entity = DataMappers::Responses::Entities::CharacterEntity.new
          response = character_entity.run character
          response[:creatures] = nested_creatures_response character
          response[:magic_items] = nested_magic_items_response character
          response[:spells] = nested_spells_response character
          response
        end
      end

      def creatures_response(creatures)
        creatures.map do |creature|
          creature_entity = DataMappers::Responses::Entities::CreatureEntity.new
          response = creature_entity.run creature
          response[:magic_items] = nested_magic_items_response creature
          response[:spells] = nested_spells_response creature
          response
        end
      end

      def magic_items_response(magic_items)
        magic_items.map do |magic_item|
          magic_item_entity = DataMappers::Responses::Entities::MagicItemEntity.new
          magic_item_entity.run magic_item
        end
      end

      def nested_characters_response(entity)
        characters = entity.characters || []
        characters.map do |character|
          character_entity = DataMappers::Responses::Entities::CharacterEntity.new
          response = character_entity.run character
          response
        end
      end

      def nested_creatures_response(entity)
        creatures = entity.creatures || []
        creatures.map do |creature|
          creature_entity = DataMappers::Responses::Entities::CreatureEntity.new
          response = creature_entity.run creature
          response
        end
      end

      def nested_magic_items_response(entity)
        magic_items = entity.magic_items || []
        magic_items.map do |magic_item|
          magic_item_entity = DataMappers::Responses::Entities::MagicItemEntity.new
          magic_item_entity.run magic_item
        end
      end

      def nested_spells_response(entity)
        spells = entity.spells || []
        spells.map do |spell|
          spell_entity = DataMappers::Responses::Entities::SpellEntity.new
          spell_entity.run spell
        end
      end

      def spells_response(spells)
        spells.map do |spell|
          spell_entity = DataMappers::Responses::Entities::SpellEntity.new
          spell_entity.run spell
        end
      end
    end
  end
end
