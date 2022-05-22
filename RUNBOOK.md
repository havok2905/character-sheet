# Runbook

## Dependencies

- **Ruby:** 3.1.0
- **Rails:** 7.0.2.3
- **Bundler:** 2.3.6
- **MySQL:** 8.0.29
- **Yarn:** 1.22.18
- **NPM:** 8.8.0
- **Node:** 18.0.0

## Setup

1. Clone main
2. `bundle install`
3. `rake db:create`
4. `rake db:migrate`
5. `rake db:seed`
6. `npm i --global yarn`
6. `./bin/dev`

## Rich Content

Image Attachments for `Action Text` involves installing `libvips`

- sudo apt-get install -y libvips

## Image Uploads

- `/srv/character-sheet/img/` directory with app permissions to write is required for image uploads to run in develop.

## Routine Operations

### Automated Tests

`bundle exec rspec`

### Linting

- `bundle exec rubocop`
- `bundle exec rubocop --auto-correct`

- `yarn lint`

### Image Dumps and Backups

There may be a time to move off of ActiveStorage in favor of a CDN. When that time comes, there will be a need to pull down images for that transfer.

[TBD]

### MySQL Backups

Your specified user will need extra permissions set up to perform a mysqldump operation.

- SELECT 
- SHOW VIEW
- TRIGGER
- LOCK TABLES

`mysqldump -u <USER> -p --all-databases --single-transaction --quick --lock-tables=false | gzip > /var/character-sheet/backups/mysql/full-backup-$(date +"%Y_%m_%d_%I_%M_%p").sql.gz`

### JSON Backups

**Do not do this for real projects with a serious amount of data!**

This is an expensive operation and should be seldomly run. This will touch every record in the database, sans users, and convert those entities to JSON.

This will also include duplicted nested data.

- `/var/character-sheet/backups/json/` directory with app permissions to write is required for this job to run.
- Rake Task: `rake data_dumps:json`, will leverage the folder structure outlined above.
- Manual Class Usage: `DataDumps::DumpAll.new root_dir: root_dir` will allow for a custom backup path to be provided