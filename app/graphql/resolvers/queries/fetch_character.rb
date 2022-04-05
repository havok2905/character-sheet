module Resolvers
  module Queries
    class FetchCharacter < BaseQuery
      type Types::CharacterType, null: false
      argument :id, ID, required: true
      
      def resolve(id:)
        Character.find(id)
      rescue ActiveRecord::RecordNotFound => _e
        GraphQL::ExecutionError.new('Character does not exist.')
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end