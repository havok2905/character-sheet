# frozen_string_literal: true

module DataMappers
  module Responses
    class PinDataMapper
      def run(pin)
        pin_entity = DataMappers::Responses::Entities::PinEntity.new
        pin_entity.run pin
      end
    end
  end
end
