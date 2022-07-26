# frozen_string_literal: true

module DataMappers
  module Responses
    class PinDataMapper
      def run(pin)
        pin_entity = DataMappers::Responses::Entities::PinEntity.new
        response = pin_entity.run pin
        response
      end
    end
  end
end
