# frozen_string_literal: true

class Spell < ApplicationRecord
  has_and_belongs_to_many :character
  has_and_belongs_to_many :creature
end
