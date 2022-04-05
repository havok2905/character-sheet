module Resolvers
  module Mutations
    class UpdateCharacterItemMutation < BaseMutation
      argument :id, ID, required: true
      argument :description, String, required: false
      argument :name, String, required: false
      argument :total, Integer, required: false

      type Types::CharacterItemType

      def resolve input
        character_item = CharacterItem.find(input[:id])
        character_item.update input
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