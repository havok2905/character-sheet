# frozen_string_literal: true

namespace :data_dumps do
  desc 'Dumps all data as JSON for emergency use'
  task json: :environment do
    root_dir = Rails.env.production? ? 
      '/var/character-sheet/production/backups/json/' :
      '/var/character-sheet/development/backups/json/'
    dump_all = DataDumps::DumpAll.new root_dir: root_dir 
    dump_all.run
  end
end
