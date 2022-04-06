module Resolvers
  module Mutations
    class DestroyCharacterMutation < BaseMutation
      argument :id, ID, required: true

      type Types::CharacterType

      def resolve input
        character = Character.find(input[:id])
        character.destroy
        character
      rescue ActiveRecord::RecordNotFound => _e
        GraphQL::ExecutionError.new('Character does not exist.')
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end