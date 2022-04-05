module Resolvers
  module Queries
    class FetchCharacterItem < BaseQuery
      type Types::CharacterItemType, null: false
      argument :id, ID, required: true
      
      def resolve(id:)
        CharacterItem.find id
      rescue ActiveRecord::RecordNotFound => _e
        GraphQL::ExecutionError.new('Character item does not exist.')
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end