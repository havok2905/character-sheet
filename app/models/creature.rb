# frozen_string_literal: true

class Creature < ApplicationRecord
  has_many :creature_actions, dependent: :destroy
  has_many :creature_features, dependent: :destroy
  has_many :creature_lair_actions, dependent: :destroy
  has_many :creature_legendary_actions, dependent: :destroy
  has_many :creature_regional_effects, dependent: :destroy
  has_and_belongs_to_many :characters
  has_and_belongs_to_many :spells
  has_one_attached :image
  accepts_nested_attributes_for :creature_actions,
                                :creature_features,
                                :creature_lair_actions,
                                :creature_legendary_actions,
                                :creature_regional_effects,
                                :characters,
                                :spells,
                                allow_destroy: true

  def total_level
    return 0 if cr.nil? || cr < 0.25.to_d
    return 1 if cr == 0.25.to_d
    return 2 if cr == 0.5.to_d
    return 3 if cr == 1
    return 20 if cr > 10

    cr * 2
  end

  def total_xp
    CoreRules::CrToXpTable::CR_TO_XP_TABLE[cr.to_s] || 0
  end
end
