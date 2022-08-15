# frozen_string_literal: true

# froznen_string_literal: true

class User < ApplicationRecord
  require 'securerandom'

  has_secure_password

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :password, presence: true
  validates :username, presence: true, uniqueness: true
end
