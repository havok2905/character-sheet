class Character < ApplicationRecord
  has_many :character_attacks, dependent: :destroy
  has_many :character_items, dependent: :destroy
  has_many :character_feature_resources, dependent: :destroy
  has_many :character_features, dependent: :destroy
  has_many :character_spells, dependent: :destroy
  accepts_nested_attributes_for :character_attacks, :character_items, :character_feature_resources, :character_features, :character_spells
end
