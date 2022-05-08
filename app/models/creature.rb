# frozen_string_literal: true

class Creature < ApplicationRecord
  has_many :creature_actions, dependent: :destroy
  has_many :creature_features, dependent: :destroy
  has_many :creature_lair_actions, dependent: :destroy
  has_many :creature_legendary_actions, dependent: :destroy
  has_many :creature_regional_effects, dependent: :destroy
  has_many :creature_spells, dependent: :destroy
  has_and_belongs_to_many :characters
  has_one_attached :image
  accepts_nested_attributes_for :creature_actions,
                                :creature_features,
                                :creature_lair_actions,
                                :creature_legendary_actions,
                                :creature_regional_effects,
                                :creature_spells,
                                :characters,
                                allow_destroy: true
  
  def total_level
    return 0 if cr.nil? || cr < 0.25
    return 1 if cr == 0.25
    return 2 if cr == 0.5
    return 3 if cr == 1
    return 20 if cr > 10
    cr * 2
  end

  def total_xp
    cr_to_xp = {
      "0.0"   => 10,
      "0.125" => 25,
      "0.25"  => 50,
      "0.5"   => 100,
      "1.0"   => 200,
      "2.0"   => 450,
      "3.0"   => 700,
      "4.0"   => 1100,
      "5.0"   => 1800,
      "6.0"   => 2300,
      "7.0"   => 2900,
      "8.0"   => 3900,
      "9.0"   => 5000,
      "10.0"  => 5900,
      "11.0"  => 7200,
      "12.0"  => 8400,
      "13.0"  => 10000,
      "14.0"  => 11500,
      "15.0"  => 13000,
      "16.0"  => 15000,
      "17.0"  => 18000,
      "18.0"  => 20000,
      "19.0"  => 22000,
      "20.0"  => 25000,
      "21.0"  => 33000,
      "22.0"  => 41000,
      "23.0"  => 50000,
      "24.0"  => 62000,
      "25.0"  => 75000,
      "26.0"  => 90000,
      "27.0"  => 105000,
      "28.0"  => 120000,
      "29.0"  => 135000,
      "30.0"  => 155000
    }

    cr_to_xp[cr.to_s] || 0
  end 
end
