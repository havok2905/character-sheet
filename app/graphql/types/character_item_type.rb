# frozen_string_literal: true

module Types
  class CharacterItemType < Types::BaseObject
    field :id, ID, null: false
    field :character_id, Integer, null: false

    field :description, String, "Information describing the item, its abilities, appearance, and what it can do."
    field :name, String, "The item's name."
    field :total, Integer, "How many of this item is in the character's inventory."

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :character, Types::CharacterType, "The character that owns this item.", null: false
  end
end