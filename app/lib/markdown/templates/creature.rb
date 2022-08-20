module Markdown
  module Templates
    class Creature < Markdown::Templates::Base
      def initialize(creature)
        @creature = creature
      end

      def get_template_name
        'creature.md.erb'
      end
    end
  end
end
