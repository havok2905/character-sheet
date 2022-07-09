# frozen_string_literal: true

class Character < ApplicationRecord
  has_many :character_attacks, dependent: :destroy
  has_many :character_items, dependent: :destroy
  has_many :character_feature_resources, dependent: :destroy
  has_many :character_features, dependent: :destroy
  has_and_belongs_to_many :creatures
  has_and_belongs_to_many :factions
  has_and_belongs_to_many :magic_items
  has_and_belongs_to_many :spells
  has_one_attached :image
  accepts_nested_attributes_for :character_attacks,
                                :character_items,
                                :character_feature_resources,
                                :character_features,
                                :creatures,
                                :spells,
                                allow_destroy: true
end
