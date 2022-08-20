module Markdown
  module Templates
    class MagicItem < Markdown::Templates::Base
      def initialize(magic_item)
        @magic_item = magic_item
      end

      def get_template_name
        'magic_item.md.erb'
      end
    end
  end
end
