# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

character = Character.create([
  {
    ac: 13,
    age: 26,
    armor_proficiencies: "Light Armor, Medium Armor, Shields (druids will not wear armor or use Shields made of metal)",
    background: "Guild Artisan",
    bonds: "I serve my library and am out on a research mission to finish my apprenticeship. I must return with new knowledge significant of acceptance.",
    condition_immunities: "",
    condition_resistances: "",
    condition_vulnerabilities: "",
    damage_immunities: "",
    damage_resistances: "Necrotic, Radiant",
    damage_vulnerabilities: "",
    eyes: "Blue",
    flaws: "I can be shy and get nervous in front of a pretty face.",
    hair: "White",
    height: "5'1\"",
    hp: 21,
    ideals: "The universe is not mysterious, just misunderstood. It's influence and beauty are in plain sight for all to see. It matters not that we have free will, just that we experience life as if we do.",
    initiative: 2,
    languages: "Common, Celestial, Druidic, Sylvan",
    name: "Ella Olkereth",
    passive_perception: 14,
    personality_traits: "Humble and hospitable out of combat, cocky and arrogant under distress. I try to not spoil the future for myself."
    proficiency_bonus: 2,
    race: "Aasimar",
    senses: "Darkvision 60ft.",
    skin: "Pale",
    speed: 30,
    sub_race: "Protector",
    tool_proficiencies: "Cook's Utensils, Herbalism Kit",
    weapon_proficiencies: "clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",

    character_class: "Druid",
    character_class_hit_dice: 8,
    character_class_level: 3,
    character_sub_class: "Circle of Stars",

    multiclass_class: "",
    multiclass_class_hit_dice: 0,
    multiclass_class_level: 0,
    multiclass_sub_class: "",

    charisma_prof: "none",
    charisma_mod: 2,
    charisma_save: 2,
    charisma_score: 15,

    constitution_prof: "none",
    constitution_mod: 1,
    constitution_save: 1,
    constitution_score: 12,

    dexterity_prof: "none",
    dexterity_mod: 2,
    dexterity_save: 2,
    dexterity_score: 15,

    intelligence_prof: "prof",
    intelligence_mod: 1,
    intelligence_save: 3,
    intelligence_score: 12,

    strength_prof: "none",
    strength_mod: -1,
    strength_save: -1,
    strength_score: 9,

    wisdom_prof: "prof",
    wisdom_mod: 4,
    wisdom_save: 6,
    wisdom_score: 15,
      
    animal_handling_mod: 4,
    arcana_mod: 1,
    athletics_mod: -1,
    deception_mod: 2,
    history_mod: 3,
    insight_mod: 6,
    intimidation_mod: 2,
    investigation_mod: 1,
    medicine_mod: 4,
    nature_mod: 3,
    perception_mod: 6,
    performance_mod: 2,
    persuasion_mod: 2,
    religion_mod: 1,
    sleight_of_hand_mod: 2,
    stealth_mod: 2,
    survival_mod: 4,

    acrobatics_prof: "none",
    animal_handling_prof: "none",
    arcana_prof: "none",
    athletics_prof: "none",
    deception_prof: "none",
    history_prof: "prof",
    insight_prof: "prof",
    intimidation_prof: "none",
    investigation_prof: "none",
    medicine_prof: "none",
    nature_prof: "prof",
    perception_prof: "prof",
    performance_prof: "none",
    persuasion_prof: "none",
    religion_prof: "none",
    sleight_of_hand_prof: "none",
    stealth_prof: "none",
    survival_prof: "none"
  }
])