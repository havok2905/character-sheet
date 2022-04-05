# frozen_string_literal: true

module Types
  class CharacterSpellType < Types::BaseObject
    field :id, ID, null: false
    field :character_id, Integer, null: false

    field :casting_time, String
    field :components, String
    field :concentration, Boolean
    field :description, String
    field :description_higher_levels, String
    field :duration, String
    field :level, Integer
    field :material_components, Boolean
    field :name, String
    field :range, String
    field :school, String
    field :somatic_components, Boolean
    field :target, String
    field :verbal_components, Boolean

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :character, Types::CharacterType, null: false
  end
end