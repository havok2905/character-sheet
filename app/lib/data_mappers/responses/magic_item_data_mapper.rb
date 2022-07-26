# frozen_string_literal: true

module DataMappers
  module Responses
    class MagicItemDataMapper
      def run(magic_item)
        magic_item_entity = DataMappers::Responses::Entities::MagicItemEntity.new
        response = magic_item_entity.run magic_item
        response
      end
    end
  end
end
