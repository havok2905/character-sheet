module Markdown
  module Templates
    class Location < Markdown::Templates::Base
      def initialize(location)
        @location = location
      end

      def get_template_name
        'location.md.erb'
      end
    end
  end
end
