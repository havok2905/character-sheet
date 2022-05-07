# frozen_string_literal: true

class Encounter < ApplicationRecord
  has_many :encounter_phases
  accepts_nested_attributes_for :encounter_phases, allow_destroy: true
end
