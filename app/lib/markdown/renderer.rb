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
      render_magic_items
      render_spells
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
