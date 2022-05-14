class Faction < ApplicationRecord
  has_one_attached :image
  has_and_belongs_to_many :characters
  has_and_belongs_to_many :creatures
end
