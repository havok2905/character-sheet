module Resolvers
  module Mutations
    class CreateCharacterItemMutation < BaseMutation
      argument :character_id, ID, required: true
      argument :description, String, required: false
      argument :name, String, required: false
      argument :total, Integer, required: false

      type Types::CharacterItemType

      def resolve input
        character = Character.find(input[:character_id])
        character_item = CharacterItem.new input
        character_item.save
        character_item
      rescue ActiveRecord::RecordNotFound => _e
        GraphQL::ExecutionError.new('Character does not exist.')
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}:"\
          " #{e.record.errors.full_messages.join(', ')}")
      end
    end
  end
end