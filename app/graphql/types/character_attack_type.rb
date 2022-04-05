# frozen_string_literal: true

module Types
  class CharacterAttackType < Types::BaseObject
    field :id, ID, null: false
    field :character_id, Integer, null: false

    field :attack_bonus, Integer, "Total added to the attack roll."
    field :crit_range, Integer, "When this attack is considered a critical hit."
    field :damage_dice_roll, String, "Dice roll formula for calculating damage (1dx)."
    field :damage_two_dice_roll, String, "Dice roll formula for calculating secondary damage (1dx)."
    field :damage_two_type, String, "The kind of damage dealt by the attack (fire, cold, etc.)."
    field :damage_type, String, "The kind of damage dealt by the attack (fire, cold, etc.)."
    field :description, String, "Text description of other effects done by the attack."
    field :is_saving_throw, Boolean, "Specifies if the attack requires a saving throw."
    field :name, String, "The name of the attack."
    field :range, String, "How far the attack can target."
    field :saving_throw_description, String, "Text description of what happens when a saving throw is made."
    field :saving_throw_threshold, Integer, "The DC for succeeding the saving throw of this attack."
    field :saving_throw_type, String, "The ability associated with the saving throw (Wisdom, Dexterity, etc.)."

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :character, Types::CharacterType, null: false
  end
end