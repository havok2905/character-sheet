# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class ArticleEntity < DataMappers::Responses::Entities::BaseEntity
        def run(article)
          hero_image_url = get_image_url article, :hero_image

          {
            content: article.content,
            heroImageUrl: hero_image_url,
            id: article.id,
            title: article.title
          }
        end
      end
    end
  end
end
