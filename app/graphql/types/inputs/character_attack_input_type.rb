# frozen_string_literal: true

module Types
  module Inputs
    class CharacterAttackInputType < Types::BaseInputObject
      argument :attack_bonus, Integer, required: true
      argument :crit_range, Integer, required: true
      argument :damage_dice_roll, String, required: true
      argument :damage_two_dice_roll, String, required: true
      argument :damage_two_type, String, required: true
      argument :damage_type, String, required: true
      argument :description, String, required: true
      argument :is_saving_throw, Boolean, required: true
      argument :name, String, required: true
      argument :range, String, required: true
      argument :saving_throw_description, String, required: true
      argument :saving_throw_threshold, Integer, required: true
      argument :saving_throw_type, String, required: true
    end
  end
end