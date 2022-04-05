class Character < ApplicationRecord
  has_many :character_attacks
  has_many :character_feature_resources
  has_many :character_features
end
