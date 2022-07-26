# frozen_string_literal: true

class Pin < ApplicationRecord
  belongs_to :map
  has_and_belongs_to_many :creatures
  has_and_belongs_to_many :factions
  has_and_belongs_to_many :magic_items
end
