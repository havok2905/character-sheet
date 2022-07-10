# Runbook

## Dependencies

- **Ruby:** 3.1.0
- **Rails:** 7.0.2.3
- **Bundler:** 2.3.6
- **MySQL:** 8.0.29
- **NPM:** 8.8.0
- **Node:** 18.0.0

## Setup

1. Clone main
2. `bundle install`
3. `npm i`
4. `rake db:create`
5. `rake db:migrate`
6. `rake db:seed`
7. `npx webpack --watch`
8. `rails s`

## Run in production
- `NODE_ENV=production npx webpack`
- `RAILS_ENV=production rails s`

### Run in local production
- `NODE_ENV=production npx webpack`
- `RAILS_LOG_TO_STDOUT=true RAILS_ENV=production rails s`

## Pre-commit Hook

We need to add a pre-commit hook to perform the following

`./scripts/pre-commit.sh`

## Rich Content

Image Attachments for `Action Text` involves installing `libvips`

- sudo apt-get install -y libvips

## Image Uploads

- `/srv/character-sheet/development/img/`
- `/srv/character-sheet/production/img/`

These directories with app permissions to write are required for image uploads to run in develop.

## Routine Operations

### Automated Tests

`bundle exec rspec`

### Linting

#### Ruby

- `bundle exec rubocop`
- `bundle exec rubocop --auto-correct`

#### Frontend

- `npm run lint`

##### Typescript

- `npm run eslint`

##### Sass

- `npm run stylelint`

### Secrets

#### Dotenv File

```
SECRET_KEY_BASE=
```

### Image Dumps and Backups

There may be a time to move off of ActiveStorage in favor of a CDN. When that time comes, there will be a need to pull down images for that transfer.

[TBD]

### MySQL Backups

Your specified user will need extra permissions set up to perform a mysqldump operation.

- SELECT 
- SHOW VIEW
- TRIGGER
- LOCK TABLES

**Require Directories**

- `/var/character-sheet/development/backups/mysql/`
- `/var/character-sheet/production/backups/mysql/`

`mysqldump -u <USER> -p --all-databases --single-transaction --quick --lock-tables=false | gzip > /var/character-sheet/development/backups/mysql/full-backup-$(date +"%Y_%m_%d_%I_%M_%p").sql.gz`
