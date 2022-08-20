# frozen_string_literal: true

namespace :markdown do
  desc 'render markdown'
  task render: :environment do
    markdown_renderer = Markdown::Renderer.new
    markdown_renderer.run
  end
end
