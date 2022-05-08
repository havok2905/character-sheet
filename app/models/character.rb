# frozen_string_literal: true

class Character < ApplicationRecord
  has_many :character_attacks, dependent: :destroy
  has_many :character_items, dependent: :destroy
  has_many :character_feature_resources, dependent: :destroy
  has_many :character_features, dependent: :destroy
  has_many :character_spells, dependent: :destroy
  has_and_belongs_to_many :creatures
  has_one_attached :image
  accepts_nested_attributes_for :character_attacks,
                                :character_items,
                                :character_feature_resources,
                                :character_features,
                                :character_spells,
                                :creatures,
                                allow_destroy: true

  def total_level
    (character_class_level || 0) + (multiclass_class_level || 0)
  end
end
