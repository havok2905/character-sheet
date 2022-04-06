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

mutation {
  createCharacter(input: {
    characterInput: {
      ac: 10,
      acrobaticsMod: 0,
      acrobaticsProf: "none",
      age: 20,
      alignment: "Chaotic Good",
      animalHandlingMod: 0,
      animalHandlingProf: "none",
      arcanaMod: 0,
      arcanaProf: "none",
      armorProficiencies: "",
      athleticsMod:0,
      athleticsProf:"none",
      background:"Soldier",
      bonds:"",
      characterAttacks: [
				{
					attackBonus:0,
          critRange:20,
          damageDiceRoll:"1d10",
          damageTwoDiceRoll:"",
          damageTwoType:"",
          damageType:"Slashing",
          description:"",
          isSavingThrow:false,
          name:"dagger",
          range:"5ft.",
          savingThrowDescription:"",
          savingThrowThreshold:0,
          savingThrowType:""
        }
      ],
      characterClass:"Fighter",
      characterClassHitDice:10,
      characterClassLevel:1,
      characterSubClass:"Bladesinger",
      charismaMod:0,
      charismaProf:"none",
      charismaSave:0,
      charismaScore:10,
      conditionImmunities:"",
      conditionResistances:"",
      conditionVulnerabilities:"",
      constitutionMod:0,
      constitutionProf:"none",
      constitutionSave:0,
      constitutionScore:10,
      copperPieces:0,
      damageImmunities:"",
      damageResistances:"",
      damageVulnerabilities:"",
      deceptionMod:0,
      deceptionProf:"none",
      dexterityMod:0,
      dexterityProf:"none",
      dexteritySave:0,
      dexterityScore:10,
      electrumPieces:0,
      eyes:"blue",
      flaws:"",
      goldPieces:0,
      hair:"brown",
      height:"",
      historyMod:0,
      historyProf:"none",
      hp:10,
      ideals:"",
      initiative:0,
      insightMod:0,
      insightProf:"none",
      intelligenceMod:0,
      intelligenceProf:"none",
      intelligenceSave:0,
      intelligenceScore:10,
      intimidationMod:0,
      intimidationProf:"none",
      investigationMod:0,
      investigationProf:"none",
      languages:"",
      medicineMod:0,
      medicineProf:"none",
      multiclassClass:"",
      multiclassClassHitDice:0,
      multiclassClassLevel:0,
      multiclassSubClass:"",
      name:"Joe",
      natureMod:0,
      natureProf:"none",
      passivePerception:10,
      perceptionMod:0,
      perceptionProf:"none",
      personalityTraits:"",
      persuasionMod:0,
      persuasionProf:"none",
      platinumPieces:0,
      proficiencyBonus:2,
      race:"human",
      religionMod:0,
      religionProf:"none",
      senses:"",
      silverPieces:0,
      skin:"pale",
      sleightOfHandMod:0,
      sleightOfHandProf:"none",
      speed:30,
      spellSlotsEighth:0,
      spellSlotsFifth:0,
      spellSlotsFirst:0,
      spellSlotsFourth:0,
      spellSlotsNinth:0,
      spellSlotsSecond:0,
      spellSlotsSeventh:0,
      spellSlotsSixth:0,
      spellSlotsThird:0,
      spellcastingAbility:"",
      spellcastingModifier:0,
      spellcastingSaveDc:0,
      stealthMod:0,
      stealthProf:"none",
      strengthMod:0,
      strengthProf:"none",
      strengthSave:0,
      strengthScore:10,
      subRace:"",
      survivalMod:0,
      survivalProf:"none",
      toolProficiencies:"",
      weaponProficiencies:"",
      weight:"",
      wisdomMod:0,
      wisdomProf:"none",
      wisdomSave:0,
      wisdomScore:10
    }
  }) {
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
