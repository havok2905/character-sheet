# frozen_string_literal: true

class Location < ApplicationRecord
  has_rich_text :content
  has_one_attached :sigil
end
