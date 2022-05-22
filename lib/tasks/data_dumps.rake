# frozen_string_literal: true

namespace :data_dumps do
  desc 'Dumps all data as JSON for emergency use'
  task json: :environment do
    dump_all = DataDumps::DumpAll.new root_dir: '/var/character-sheet/backups/json/'
    dump_all.run
  end
end
