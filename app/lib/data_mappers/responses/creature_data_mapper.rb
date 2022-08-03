# frozen_string_literal: true

module DataMappers
  module Responses
    class CreatureDataMapper
      def run(creature)
        creature_entity = DataMappers::Responses::Entities::CreatureEntity.new
        response = creature_entity.run creature
        response[:factions] = factions_response creature
        response[:magic_items] = magic_items_response creature
        response[:spells] = spells_response creature
        response
      end

      private

      def factions_response(creature)
        factions = creature.factions || []

        factions.map do |faction|
          faction_entity = DataMappers::Responses::Entities::FactionEntity.new
          faction_entity.run faction
        end
      end

      def magic_items_response(creature)
        magic_items = creature.magic_items || []

        magic_items.map do |magic_item|
          magic_item_entity = DataMappers::Responses::Entities::MagicItemEntity.new
          magic_item_entity.run magic_item
        end
      end

      def spells_response(creature)
        spells = creature.spells || []

        spells.map do |spell|
          spell_entity = DataMappers::Responses::Entities::SpellEntity.new
          spell_entity.run spell
        end
      end
    end
  end
end
