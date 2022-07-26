# frozen_string_literal: true

module DataMappers
  module Responses
    class SpellDataMapper
      def run(spell)
        spell_entity = DataMappers::Responses::Entities::SpellEntity.new
        response = spell_entity.run spell
        response
      end
    end
  end
end
