# frozen_string_literal: true

class CampaignArc < ApplicationRecord
  belongs_to :campaign
  has_many :campaign_arc_sessions
  accepts_nested_attributes_for :campaign_arc_sessions, allow_destroy: true
end
