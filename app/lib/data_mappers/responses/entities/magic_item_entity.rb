# frozen_string_literal: true

module DataMappers
  module Responses
    module Entities
      class MagicItemEntity < DataMappers::Responses::Entities::BaseEntity
        def run(magic_item)
          image_url = magic_item.public_image_path

          {
            attunement: magic_item.attunement,
            category: magic_item.category,
            description: magic_item.description,
            id: magic_item.id,
            imageUrl: image_url,
            rarity: magic_item.rarity,
            subCategory: magic_item.sub_category,
            name: magic_item.name
          }
        end
      end
    end
  end
end
