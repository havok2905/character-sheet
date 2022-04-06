# frozen_string_literal: true

module Types
  module Inputs
    class CharacterItemInputType < Types::BaseInputObject
      argument :description, String, required: true
      argument :name, String, required: true
      argument :total, Integer, required: true
    end
  end
end