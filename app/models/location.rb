# frozen_string_literal: true

class Location < ApplicationRecord
  has_one_attached :sigil
end
