# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.0'

gem 'aws-sdk', '~> 3'
gem 'bcrypt', '~> 3.1.8'
gem 'bootsnap', require: false
gem 'dotenv-rails', '~> 2.1', '>= 2.1.1'
gem 'image_processing', '~> 1.2'
gem 'jbuilder'
gem 'jwt'
gem 'mysql2', '~> 0.5.3'
gem 'pry', '~> 0.13.1'
gem 'pry-rails', '~> 0.3.9'
gem 'puma', '~> 5.0'
gem 'rack-cors'
gem 'rails', '~> 7.0.1'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

group :development do
  gem 'rubocop', '~> 1.29'
  gem 'web-console'
end

group :development, :test do
  gem 'debug', platforms: %i[mri mingw x64_mingw]
end
