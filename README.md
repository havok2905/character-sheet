# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## Example Queries

{
  character(id:1) {
    alignment,
    charismaScore,
    constitutionScore,
    dexterityScore,
    goldPieces,
    intelligenceScore
    name,
    race,
    spellSlotsFirst,
    subRace,
    strengthScore,
    wisdomScore,
    characterAttacks {
      id,
      attackBonus,
      damageType,
      damageDiceRoll,
      name
    },
    characterFeatureResources {
      id,
      name,
      total
    },
    characterFeatures {
      id,
      name
    },
    characterItems {
      id,
      name,
      total
    },
    characterSpells {
      id,
      level,
      name
    }
  }
}

{
  characterItem(id:1) {
    name
  }
}

{
  characterItemsByCharacterId(characterId:1) {
    name
  }
}

## Example Mutations

mutation {
  createCharacterItem(input: {
    characterId: 1,
    description: "Just a text description of a test item",
    name: "Test Item",
    total: 100
  }) {
    id,
    description,
    name,
    total
  }
}

mutation {
  destroyCharacterItem(input: {
    id: 1
  }) {
    id,
    description,
    name,
    total
  }
}

mutation {
  updateCharacterItem(input: {
    id: 1,
    description: "Just a text description of a test item",
    name: "Test Item",
    total: 99
  }) {
    id,
    description,
    name,
    total
  }
}
