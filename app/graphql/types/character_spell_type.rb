# frozen_string_literal: true

module Types
  class CharacterSpellType < Types::BaseObject
    field :id, ID, null: false
    field :character_id, Integer, null: false

    field :casting_time, String, "How long it takes to cast this spell."
    field :components, String, "What specific components are needed to cast this spell."
    field :concentration, Boolean, "Specifies if this spell requires concentation."
    field :description, String, "What the spell does."
    field :description_higher_levels, String, "What the spell does when cast at a higher level than this spell's base level."
    field :duration, String, "How long this spell's effects last for."
    field :level, Integer, "The base spellslot level required to cast this spell."
    field :material_components, Boolean, "Specifies if this spell requires physical components to cast this spell."
    field :name, String, "The name of the spell."
    field :range, String, "How far and what shape the spell effect can execute on."
    field :school, String, "Specifies the school of magic this spell belongs to."
    field :somatic_components, Boolean, "Specifies if this spell requires movement to cast this spell."
    field :target, String, "Which or how many targets this spell can effect at one time."
    field :verbal_components, Boolean, "Specifies if this spell requires speech to cast this spell."

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :character, Types::CharacterType, null: false
  end
end