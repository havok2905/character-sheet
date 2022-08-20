module Markdown
  module Templates
    class Faction < Markdown::Templates::Base
      def initialize(faction)
        @faction = faction
      end

      def get_template_name
        'faction.md.erb'
      end
    end
  end
end
