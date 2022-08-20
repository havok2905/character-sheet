module Markdown
  module Templates
    class Wiki < Markdown::Templates::Base
      def initialize(wiki)
        @wiki = wiki
      end

      def get_template_name
        'wiki.md.erb'
      end
    end
  end
end
