# frozen_string_literal: true

class Article < ApplicationRecord
  has_one_attached :hero_image
  has_and_belongs_to_many :tags
end
