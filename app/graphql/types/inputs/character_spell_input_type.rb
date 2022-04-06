# frozen_string_literal: true

module Types
  module Inputs
    class CharacterSpellInputType < Types::BaseInputObject
      argument :casting_time, String, required: true
      argument :components, String, required: true
      argument :concentration, Boolean, required: true
      argument :description, String, required: true
      argument :description_higher_levels, String, required: true
      argument :duration, String, required: true
      argument :level, Integer, required: true
      argument :material_components, Boolean, required: true
      argument :name, String, required: true
      argument :range, String, required: true
      argument :school, String, required: true
      argument :somatic_components, Boolean, required: true
      argument :target, String, required: true
      argument :verbal_components, Boolean, required: true
    end
  end
end