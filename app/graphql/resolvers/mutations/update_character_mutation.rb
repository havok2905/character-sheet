module Resolvers
  module Mutations
    class UpdateCharacterMutation < BaseMutation
      argument :character_id, ID, required: true
      argument :character_input, Types::Inputs::CharacterInputType, required: true
      
      type Types::CharacterType

      def resolve input
        character_id = input[:character_id]
        input_hash = input[:character_input].to_h
        format_children input_hash
        character = Character.find character_id
        character.update input_hash
        character
      rescue ActiveRecord::RecordNotFound => _e
        GraphQL::ExecutionError.new('Character does not exist.')
      rescue ActiveRecord::RecordInvalid => e
        GraphQL::ExecutionError.new("Invalid attributes for #{e.record.class}: #{e.record.errors.full_messages.join(', ')}")
      end

      private

      def format_children input_hash
        map_collection_to_model input_hash[:character_attacks], CharacterAttack
        map_collection_to_model input_hash[:character_feature_resources], CharacterFeatureResource
        map_collection_to_model input_hash[:character_features], CharacterFeature
        map_collection_to_model input_hash[:character_items], CharacterItem
        map_collection_to_model input_hash[:character_spells], CharacterSpell
      end
    end
  end
end