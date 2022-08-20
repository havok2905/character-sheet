module Markdown
  module Templates
    class Spell < Markdown::Templates::Base
      def initialize(spell)
        @spell = spell
      end

      def get_template_name
        'spell.md.erb'
      end
    end
  end
end
