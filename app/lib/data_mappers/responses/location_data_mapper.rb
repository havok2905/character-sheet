# frozen_string_literal: true

module DataMappers
  module Responses
    class LocationDataMapper
      def run(location, map)
        location_entity = DataMappers::Responses::Entities::LocationEntity.new
        response = location_entity.run location
        response[:map] = map_response map
        response[:map][:pins] = pins_response map
        response
      end

      private

      def map_response(map)
        map_entity = DataMappers::Responses::Entities::MapEntity.new
        map_entity.run map
      end

      def pins_response(map)
        pins = (map && map.pins) || []

        pins.map do |pin|
          pin_entity = DataMappers::Responses::Entities::PinEntity.new
          response = pin_entity.run pin
          response[:creatures] = pin_creatures_response pin
          response[:factions] = pin_factions_response pin
          response[:magicItems] = pin_magic_items_response pin
          response
        end
      end

      def pin_creatures_response(pin)
        creatures = (pin && pin.creatures) || []

        creatures.map do |creature|
          creature_entity = DataMappers::Responses::Entities::CreatureEntity.new
          creature_entity.run creature
        end
      end

      def pin_factions_response(pin)
        factions = (pin && pin.factions) || []

        factions.map do |faction|
          faction_entity = DataMappers::Responses::Entities::FactionEntity.new
          faction_entity.run faction
        end
      end

      def pin_magic_items_response(pin)
        magic_items = (pin && pin.magic_items) || []

        magic_items.map do |magic_item|
          magic_item_entity = DataMappers::Responses::Entities::MagicItemEntity.new
          magic_item_entity.run magic_item
        end
      end
    end
  end
end