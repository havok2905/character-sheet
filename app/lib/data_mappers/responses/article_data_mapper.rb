# frozen_string_literal: true

module DataMappers
  module Responses
    class ArticleDataMapper
      def run(article)
        article_entity = DataMappers::Responses::Entities::ArticleEntity.new
        response = article_entity.run article
        response[:tags] = tags_response article
        response
      end

      private

      def tags_response(article)
        tags = article&.tags || []

        tags.map(&:title)
      end
    end
  end
end
