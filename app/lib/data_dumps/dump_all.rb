# frozen_string_literal: true

module DataDumps
  class DumpAll
    def initialize(options)
      @root_dir = options[:root_dir]
    end

    def run
      File.write "#{@root_dir}backup-#{datetime}.json", entities_json
    end

    private

    def datetime
      DateTime.now.to_s
    end

    def entities_json
      entities.to_json
    end

    def entities
      {
        characters:,
        creatures:,
        factions:,
        magic_items:,
        spells:
      }
    end

    def characters
      Character.all.map do |character|
        character.as_json include: %i[character_attacks character_items character_feature_resources
                                      character_features creatures factions magic_items spells]
      end
    end

    def creatures
      includes = %i[creature_actions creature_features creature_lair_actions
                    creature_legendary_actions creature_regional_effects characters factions magic_items spells]
      Creature.all.map do |cretaure|
        cretaure.as_json include: includes
      end
    end

    def factions
      Faction.all.map do |faction|
        faction.as_json include: %i[characters creatures]
      end
    end

    def magic_items
      MagicItem.all.map do |magic_item|
        magic_item.as_json include: %i[characters creatures]
      end
    end

    def spells
      Spell.all.map(&:as_json)
    end
  end
end
