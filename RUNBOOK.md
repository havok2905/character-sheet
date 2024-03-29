# Runbook

## Dependencies

- **Ruby:** 3.1.0
- **Rails:** 7.0.2.3
- **Bundler:** 2.3.6
- **MySQL:** 8.0.29
- **NPM:** 8.8.0
- **Node:** 18.0.0
- **S3 compatible bucket**

## Setup

1. Clone main
2. `bundle install`
3. `rake db:create`
4. `rake db:migrate`
5. Populate .env file
6. Create a first user through `rails c`
6. `rails s`
7. `cd ./frontend`
8. `npm i`
9. `npx webpack --watch`

## Creating a first user

```ruby
u = User.new({ first_name: 'Chris', last_name: 'McLean', password: 'password', password_confirmation: 'password', username: 'havok' })
u.save!
```
## Run in production
- `NODE_ENV=production npx webpack`
- `RAILS_ENV=production rails s`

### Run in local production
- `NODE_ENV=production npx webpack`
- `RAILS_LOG_TO_STDOUT=true RAILS_ENV=production rails s`

## Image Uploads

Image uploading depends on a directory existing on disk to write to. This will be configured in .env below.
## Routine Operations

### Linting

#### Ruby

- `bundle exec rubocop`
- `bundle exec rubocop --auto-correct`

#### Frontend

- `cd frontend`
- `npm run lint`

##### Typescript

- `cd frontend`
- `npm run eslint`

##### Sass

- `cd frontend`
- `npm run stylelint`

### Secrets

#### Dotenv File

```
IMAGE_PATH_BASE=
MYSQLAPP_DATABASE_PASSWORD=
S3_ACCESS_KEY_ID=
S3_BUCKET=
S3_ENDPOINT=
S3_HTTP_CONTINUE_TIMEOUT=
S3_HOST_BASE=
S3_SECRET_ACCESS_KEY=
S3_REGION=
SECRET_KEY_BASE=
```

### MySQL Backups

Your specified user will need extra permissions set up to perform a mysqldump operation.

- SELECT 
- SHOW VIEW
- TRIGGER
- LOCK TABLES
