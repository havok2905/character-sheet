# frozen_string_literal: true

class MagicItem < ApplicationRecord
  has_and_belongs_to_many :characters
  has_and_belongs_to_many :creatures
  has_one_attached :image
end
