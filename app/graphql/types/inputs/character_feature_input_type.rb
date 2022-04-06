# frozen_string_literal: true

module Types
  module Inputs
    class CharacterFeatureInputType < Types::BaseInputObject
      argument :description, String, required: true
      argument :feature_type, String, required: true
      argument :name, String, required: true
      argument :source, String, required: true
    end
  end
end