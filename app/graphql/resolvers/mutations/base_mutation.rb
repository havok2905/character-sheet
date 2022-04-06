module Resolvers
  module Mutations
    class BaseMutation < GraphQL::Schema::RelayClassicMutation
      argument_class Types::BaseArgument
      field_class Types::BaseField
      input_object_class Types::BaseInputObject
      object_class Types::BaseObject

      private

      def map_collection_to_model collection, model
        return unless collection.is_a?(Array)
        collection.map! { |item| model.new item }
        return
      end
    end
  end
end
