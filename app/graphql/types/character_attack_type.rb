# frozen_string_literal: true

module Types
  class CharacterAttackType < Types::BaseObject
    field :id, ID, null: false
    field :character_id, Integer, null: false

    field :attack_bonus, Integer
    field :crit_range, Integer
    field :damage_dice_roll, String
    field :damage_two_dice_roll, String
    field :damage_two_type, String
    field :damage_type, String
    field :description, String
    field :is_saving_throw, Boolean
    field :name, String
    field :range, String
    field :saving_throw_description, String
    field :saving_throw_threshold, Integer
    field :saving_throw_type, String

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :character, Types::CharacterType, null: false
  end
end