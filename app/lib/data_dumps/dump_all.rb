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
        locations:,
        magic_items:,
        spells:
      }
    end

    def characters
      includes = %i[character_attacks character_items character_feature_resources character_features creatures factions magic_items spells]
      
      Character.all.map do |character|
        json = character.as_json include: includes

        if character.image.attached?
          json[:image_path] = ActiveStorage::Blob.service.path_for character.image.key
          json[:image_file_name] = character.image.blob.filename
        end
        
        json
      end
    end

    def creatures
      includes = %i[creature_actions creature_features creature_lair_actions creature_legendary_actions creature_regional_effects characters factions magic_items spells]
      Creature.all.map do |creature|
        json = creature.as_json include: includes
        
        if creature.image.attached?
          json[:image_path] = ActiveStorage::Blob.service.path_for creature.image.key
          json[:image_file_name] = creature.image.blob.filename
        end
        
        json
      end
    end

    def factions
      Faction.all.map do |faction|
        json = faction.as_json include: %i[characters creatures]

        if faction.image.attached?
          json[:image_path] = ActiveStorage::Blob.service.path_for faction.image.key
          json[:image_file_name] = faction.image.blob.filename
        end

        json
      end
    end

    def locations
      Location.all.map do |location|
        json = location.as_json
        json[:content] = location.content
        
        if location.map.attached?
          json[:map_path] = ActiveStorage::Blob.service.path_for location.map.key
          json[:map_file_name] = location.map.blob.filename
        end

        if location.sigil.attached?
          json[:sigil_path] = ActiveStorage::Blob.service.path_for location.sigil.key
          json[:sigil_file_name] = location.sigil.blob.filename
        end

        json
      end
    end

    def magic_items
      MagicItem.all.map do |magic_item|
        json = magic_item.as_json include: %i[characters creatures]
        json[:image_path] = ActiveStorage::Blob.service.path_for magic_item.image.key
        json[:image_file_name] = magic_item.image.blob.filename
        json
      end
    end

    def spells
      Spell.all.map(&:as_json)
    end
  end
end
