# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class BaseEntity
        include ActionView::Helpers
        include ActionDispatch::Routing
        include Rails.application.routes.url_helpers

        def get_image_url(item, image_key)
          item&.send(image_key)&.attached? ? url_for(item.send(image_key)) : ''
        end
      end
    end
  end
end
