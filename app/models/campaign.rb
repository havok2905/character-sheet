# frozen_string_literal: true

class Campaign < ApplicationRecord
  has_many :campaign_arcs
  accepts_nested_attributes_for :campaign_arcs, allow_destroy: true
end
