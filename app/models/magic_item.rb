# frozen_string_literal: true

class MagicItem < ApplicationRecord
  has_and_belongs_to_many :characters
  has_and_belongs_to_many :creatures

  def public_image_path
    return nil unless image_path.present?
    "#{ENV['IMAGE_PATH_BASE']}#{image_path}"
  end
end
