# frozen_string_literal: true

module Types
  module Inputs
    class CharacterFeatureResourceInputType < Types::BaseInputObject
      argument :name, String, required: true
      argument :total, Integer, required: true
    end
  end
end