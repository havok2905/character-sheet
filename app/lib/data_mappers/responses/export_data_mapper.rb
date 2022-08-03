# frozen_string_literal: true

module DataMappers
  module Responses
    class ExportDataMapper
      def run(options)
        {
          articles: articles_response(options[:articles]),
          characters: characters_response(options[:characters]),
          creatures: creatures_response(options[:creatures]),
          factions: factions_response(options[:factions]),
          locations: locations_response(options[:locations_hash]),
          magicItems: magic_items_response(options[:magic_items]),
          spells: spells_response(options[:spells])
        }
      end

      private

      def articles_response(articles)
        articles.map do |article|
          article_entity = DataMappers::Responses::Entities::ArticleEntity.new
          response = article_entity.run article
          response[:tags] = nested_tags_response article
          response
        end
      end

      def characters_response(characters)
        characters.map do |character|
          character_entity = DataMappers::Responses::Entities::CharacterEntity.new
          response = character_entity.run character
          response[:creatures] = nested_creatures_response character
          response[:factions] = nested_factions_response character
          response[:magic_items] = nested_magic_items_response character
          response[:spells] = nested_spells_response character
          response
        end
      end

      def creatures_response(creatures)
        creatures.map do |creature|
          creature_entity = DataMappers::Responses::Entities::CreatureEntity.new
          response = creature_entity.run creature
          response[:factions] = nested_factions_response creature
          response[:magic_items] = nested_magic_items_response creature
          response[:spells] = nested_spells_response creature
          response
        end
      end

      def factions_response(factions)
        factions.map do |faction|
          faction_entity = DataMappers::Responses::Entities::FactionEntity.new
          response = faction_entity.run faction
          response[:characters] = nested_characters_response faction
          response[:creatures] = nested_creatures_response faction
          response
        end
      end

      def locations_response(locations_hash)
        locations_hash.map do |location_hash|
          location = location_hash[:location]
          map = location_hash[:map]
          location_entity = DataMappers::Responses::Entities::LocationEntity.new
          response = location_entity.run location
          response[:map] = nested_map_response map
          response[:map][:pins] = nested_pins_response map
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

      def nested_factions_response(entity)
        factions = entity.factions || []
        factions.map do |faction|
          faction_entity = DataMappers::Responses::Entities::FactionEntity.new
          faction_entity.run faction
        end
      end

      def nested_magic_items_response(entity)
        magic_items = entity.magic_items || []
        magic_items.map do |magic_item|
          magic_item_entity = DataMappers::Responses::Entities::MagicItemEntity.new
          magic_item_entity.run magic_item
        end
      end

      def nested_map_response(map)
        map_entity = DataMappers::Responses::Entities::MapEntity.new
        map_entity.run map
      end

      def nested_pins_response(map)
        pins = map&.pins || []

        pins.map do |pin|
          pin_entity = DataMappers::Responses::Entities::PinEntity.new
          response = pin_entity.run pin
          response[:creatures] = nested_creatures_response pin
          response[:factions] = nested_factions_response pin
          response[:magicItems] = nested_magic_items_response pin
          response
        end
      end

      def nested_spells_response(entity)
        spells = entity.spells || []
        spells.map do |spell|
          spell_entity = DataMappers::Responses::Entities::SpellEntity.new
          spell_entity.run spell
        end
      end

      def nested_tags_response(entity)
        tags = entity&.tags || []

        tags.map(&:title)
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
