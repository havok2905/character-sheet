module Markdown
  module Templates
    class Character < Markdown::Templates::Base
      def initialize(character)
        @character = character
      end

      def get_template_name
        'character.md.erb'
      end
    end
  end
end
