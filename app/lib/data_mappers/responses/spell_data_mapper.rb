# frozen_string_literal: true

module DataMappers
  module Responses
    class SpellDataMapper
      def run(spell)
        spell_entity = DataMappers::Responses::Entities::SpellEntity.new
        spell_entity.run spell
      end
    end
  end
end
