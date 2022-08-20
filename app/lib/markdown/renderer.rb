require 'fileutils'

module Markdown
  class Renderer
    def initialize
      @build_dir = Rails.root.join './build/markdown/'
    end

    def run
      init_dir @build_dir
      render_characters
      render_creatures
      render_factions
      render_locations
      render_magic_items
      render_spells
      render_wiki
    end

    private

    def render_characters
      characters = Character.all

      build_path = "#{@build_dir}/characters/"
      init_dir build_path

      characters.each do |character|
        template = Markdown::Templates::Character.new character
        file_name = "#{character.name}.md"
        write_file "#{build_path}#{file_name}", template.compile
      end
    end

    def render_creatures
      creatures = Creature.all

      build_path = "#{@build_dir}/creatures/"
      init_dir build_path

      creatures.each do |creature|
        template = Markdown::Templates::Creature.new creature
        file_name = "#{creature.name}.md"
        write_file "#{build_path}#{file_name}", template.compile
      end
    end

    def render_factions
      factions = Faction.all

      build_path = "#{@build_dir}/factions/"
      init_dir build_path

      factions.each do |faction|
        template = Markdown::Templates::Faction.new faction
        file_name = "#{faction.name}.md"
        write_file "#{build_path}#{file_name}", template.compile
      end
    end

    def render_locations
      locations = Location.all

      build_path = "#{@build_dir}/locations/"
      init_dir build_path

      locations.each do |location|
        template = Markdown::Templates::Location.new location
        file_name = "#{location.name}.md"
        write_file "#{build_path}#{file_name}", template.compile
      end
    end

    def render_magic_items
      magic_items = MagicItem.all

      build_path = "#{@build_dir}/magic_items/"
      init_dir build_path

      magic_items.each do |magic_item|
        template = Markdown::Templates::MagicItem.new magic_item
        file_name = "#{magic_item.name}.md"
        write_file "#{build_path}#{file_name}", template.compile
      end
    end

    def render_spells
      spells = Spell.all

      build_path = "#{@build_dir}/spells/"
      init_dir build_path

      spells.each do |spell|
        template = Markdown::Templates::Spell.new spell
        file_name = "#{spell.name}.md"
        write_file "#{build_path}#{file_name}", template.compile
      end
    end

    def render_wiki
      wikis = Article.all

      build_path = "#{@build_dir}/wiki/"
      init_dir build_path

      wikis.each do |wiki|
        template = Markdown::Templates::Wiki.new wiki
        file_name = "#{wiki.title}.md"
        write_file "#{build_path}#{file_name}", template.compile
      end
    end

    def write_file path, content
      File.open(path, 'w') do |f|
        f.write content
      end
    end

    def init_dir path
      FileUtils.rm_r(path) if Dir.exist?(path)
      FileUtils.mkdir path
    end
  end
end
