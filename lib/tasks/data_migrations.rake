# frozen_string_literal: true

namespace :data_migrations do
  desc 'conver cr to fractions'
  task convert_cr: :environment do
    creatures = Creature.all
    creatures.each do |c|
      tmp_cr = c.cr
      c.cr = '1/8' if c.cr == '0.125'
      c.cr = '1/4' if c.cr == '0.25'
      c.cr = '1/2' if c.cr == '0.5'
      c.save! unless c.cr == tmp_cr
    end
  end
end
