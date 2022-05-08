# README

This is a personal tool that is still under development.

## Setup

- **Ruby:** 3.1.0
- **Rails:** 7.0.2.3
- **Bundler:** 2.3.6

1. Clone main
2. `bundle install`
3. `rake db:create`
4. `rake db:migrate`
5. `rake db:seed`
6. `rails s`

**To lint:** `bundle exec rubocop`

**To test:** `bundle exec rspec`

## TODO

- Dedupe spells
- Build spells CRUD UI
- Creature search and filter
- Encounter builder UI
- Encounter builder data structures
- Support recursive Pets/NPCs in encounter deadliness calculator
- Improved Character/Creature form UI
- Character form validation
- Creature form validation
- Encounter form validation
- Campaign form validation
- User admin page -- user generation and management
- Explore better ways of handling JS behaviors for forms
- S3 bucket or equivilent for image uploads
- Github Actions for testing and linting
- Integration tests

## Possible Long Term TODOs

- Campaign difficulty curve tracker
- Campaign auditing and reporting tooling
- Campaign session notes CMS
- Character relation graphs
- Faction groupings
- Campaign event timelines
- Campaign calendars
- Weather and natural disaster tracking