# frozen_string_literal: true

class CampaignArcSession < ApplicationRecord
  belongs_to :campaign_arc
  has_many :encounters
  accepts_nested_attributes_for :encounters, allow_destroy: true
end
