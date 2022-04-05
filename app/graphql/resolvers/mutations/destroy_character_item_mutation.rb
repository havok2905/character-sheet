module Resolvers
  module Mutations
    class DestroyCharacterItemMutation < BaseMutation
      argument :id, ID, required: true

      type Types::CharacterItemType

      def resolve input
        character_item = CharacterItem.find(input[:id])
        character_item.destroy
        character_item
      rescue ActiveRecord::RecordNotFound => _e
        GraphQL::ExecutionError.new('Character item does not exist.')
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end