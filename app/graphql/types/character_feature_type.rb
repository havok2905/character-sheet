# frozen_string_literal: true

module Types
  class CharacterFeatureType < Types::BaseObject
    field :id, ID, null: false
    field :character_id, Integer, null: false
    
    field :description, String, "Text description of what this feature does."
    field :feature_type, String, "What kind of feature ( Action, Bonus Action, Reaction, etc. )."
    field :name, String, "The name of the feature."
    field :source, String, "Where does this feature come from ( Class, sub class, race, etc. )."

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :character, Types::CharacterType, null: false
  end
end