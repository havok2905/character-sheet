require 'erb'

module Markdown
  module Templates
    class Base
      def compile
        file = File.read get_template_path
        erb = ERB.new file,  trim_mode: '-'
        erb.result binding
      end

      private

      def get_template_name
        ''
      end

      def get_template_path
        "#{get_templates_dir_path}#{get_template_name}"
      end

      def get_templates_dir_path
        Rails.root.join './app/lib/markdown/templates/views/'
      end
    end
  end
end
