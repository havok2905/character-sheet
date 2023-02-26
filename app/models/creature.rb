# frozen_string_literal: true

class Creature < ApplicationRecord
  has_many :creature_actions, dependent: :destroy
  has_many :creature_features, dependent: :destroy
  has_many :creature_lair_actions, dependent: :destroy
  has_many :creature_legendary_actions, dependent: :destroy
  has_many :creature_regional_effects, dependent: :destroy
  has_and_belongs_to_many :characters
  has_and_belongs_to_many :magic_items
  has_and_belongs_to_many :spells
  accepts_nested_attributes_for :creature_actions,
                                :creature_features,
                                :creature_lair_actions,
                                :creature_legendary_actions,
                                :creature_regional_effects,
                                :characters,
                                :spells,
                                allow_destroy: true

  def public_image_path
    return nil unless image_path.present?
    "#{ENV['IMAGE_PATH_BASE']}#{image_path}"
  end
end
