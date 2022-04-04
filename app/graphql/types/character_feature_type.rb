# frozen_string_literal: true

module Types
  class CharacterFeatureType < Types::BaseObject
    field :id, ID, null: false
    field :character_id, Integer, null: false
    field :description, String
    field :feature_type, String
    field :name, String
    field :source, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :character, Types::CharacterType, null: false
  end
end