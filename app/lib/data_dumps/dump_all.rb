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
      includes = %i[character_attacks character_items character_feature_resources character_features creatures factions
                    magic_items spells]

      Character.all.map do |character|
        json = character.as_json include: includes
        json[:image_path] = get_image_path character, :image
        json[:image_file_name] = get_image_file_name character, :image
        json
      end
    end

    def creatures
      includes = %i[creature_actions creature_features creature_lair_actions creature_legendary_actions
                    creature_regional_effects characters factions magic_items spells]

      Creature.all.map do |creature|
        json = creature.as_json include: includes
        json[:image_path] = get_image_path creature, :image
        json[:image_file_name] = get_image_file_name creature, :image
        json
      end
    end

    def factions
      Faction.all.map do |faction|
        json = faction.as_json include: %i[characters creatures]
        json[:image_path] = get_image_path faction, :image
        json[:image_file_name] = get_image_file_name faction, :image
        json
      end
    end

    def locations
      Location.all.map do |location|
        json = location.as_json
        json[:content] = location.content
        json[:map_path] = get_image_path location, :map
        json[:map_file_name] = get_image_file_name location, :map
        json[:sigil_path] = get_image_path location, :sigil
        json[:sigil_file_name] = get_image_file_name location, :sigil
        json
      end
    end

    def magic_items
      MagicItem.all.map do |magic_item|
        json = magic_item.as_json include: %i[characters creatures]
        json[:image_path] = get_image_path magic_item, :image
        json[:image_file_name] = get_image_file_name magic_item, :image
        json
      end
    end

    def spells
      Spell.all.map(&:as_json)
    end

    def get_image_path item, to_send
      return '' unless item.send(to_send).attached?
      ActiveStorage::Blob.service.path_for item.send(to_send).key
    end

    def get_image_file_name item, to_send
      return '' unless item.send(to_send).attached?
      item.send(to_send).blob.filename
    end
  end
end
