module Resolvers
  module Queries
    class FetchCharacterItemsByCharacterId < BaseQuery
      type [Types::CharacterItemType], null: false
      argument :character_id, ID, required: true
      
      def resolve(character_id:)
        CharacterItem.where(character_id: character_id)
      rescue ActiveRecord::RecordNotFound => _e
        GraphQL::ExecutionError.new('Character items do not exist.')
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end