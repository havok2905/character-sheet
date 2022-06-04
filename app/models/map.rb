class Map < ApplicationRecord
  belongs_to :location
  has_one_attached :image
  has_many :pins
  accepts_nested_attributes_for :pins, :allow_destroy => true
end
