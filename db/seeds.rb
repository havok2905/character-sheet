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
    personality_traits: "Humble and hospitable out of combat, cocky and arrogant under distress. I try to not spoil the future for myself.",
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
    survival_prof: "none",

    character_attacks: [
      CharacterAttack.create({
        attack_bonus: 4,
        crit_range: 20,
        damage_dice_roll: "1d4+2",
        damage_two_dice_roll: "",
        damage_two_type: "",
        damage_type: "Piercing",
        description: "",
        is_saving_throw: false,
        name: "Dagger",
        saving_throw_description: "",
        saving_throw_threshold: 0,
        saving_throw_type: ""
      })
    ],

    character_feature_resources: [
      CharacterFeatureResource.create({
        name: "Healing Hands",
        total: 1
      }),
      CharacterFeatureResource.create({
        name: "Guiding Bolt",
        total: 2
      }),
      CharacterFeatureResource.create({
        name: "Wildshape",
        total: 2
      })
    ],

    character_features: [
      CharacterFeature.create({
        description: "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic.",
        feature_type: "Passive",
        name: "Druidic",
        source: "Druid"
      }),  
      CharacterFeature.create({
        description: "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.",
        feature_type: "Passive",
        name: "Spellcasting",
        source: "Druid"
      }),
      CharacterFeature.create({
        description: "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.

        Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.
        You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.While you are transformed, the following rules apply:

Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.
When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form, For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.
You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as Call Lightning, that you've already cast.
You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.
You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form.",
        feature_type: "Action",
        name: "Wildshape",
        source: "Druid"
      }),
      CharacterFeature.create({
        description: "At 2nd level, you choose to identify with a circle of druids. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.",
        feature_type: "Passive",
        name: "Druid Circle",
        source: "Druid"
      }),
      CharacterFeature.create({
        description: "At 2nd level, you've created a star chart as part of your heavenly studies. It is a Tiny object and can serve as a spellcasting focus for your druid spells. You determine its form by rolling on the Star Map table or by choosing one.

        While holding this map, you have these benefits:
        
        You know the Guidance cantrip.
        You have the Guiding Bolt spell prepared. It counts as a druid spell for you, and it doesn't count against the number of spells you can have prepared.
        You can cast Guiding Bolt without expending a spell slot. You can do so a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.
        If you lose the map, you can perform a 1-hour ceremony to magically create a replacement. This ceremony can be performed during a short or long rest, and it destroys the previous map.",
        feature_type: "Passive",
        name: "Star Map",
        source: "Circle of Stars"
      }),
      CharacterFeature.create({
        description: "At 2nd level, you gain the ability to harness constellations’ power to alter your form. As a bonus action, you can expend a use of your Wild Shape feature to take on a starry form, rather than transforming into a beast.

        While in your starry form, you retain your game statistics, but your body becomes luminous; your joints glimmer like stars, and glowing lines connect them as on a star chart. This form sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The form lasts for 10 minutes. It ends early if you dismiss it (no action required), are incapacitated, die, or use this feature again.
        
        Whenever you assume your starry form, choose which of the following constellations glimmers on your body; your choice gives you certain benefits while in the form:
        
        Archer. A constellation of an archer appears on you. When you activate this form, and as a bonus action on your subsequent turns while it lasts, you can make a ranged spell attack, hurling a luminous arrow that targets one creature within 60 feet of you. On a hit, the attack deals radiant damage equal to 1d8 + your Wisdom modifier.
        
        Chalice. A constellation of a life-giving goblet appears on you. Whenever you cast a spell using a spell slot that restores hit points to a creature, you or another creature within 30 feet of you can regain hit points equal to 1d8 + your Wisdom modifier.
        
        Dragon. A constellation of a wise dragon appears on you. When you make an Intelligence or a Wisdom check or a Constitution saving throw to maintain concentration on a spell, you can treat a roll of 9 or lower on the d20 as a 10.",
        feature_type: "Bonus Action",
        name: "Starry Form",
        source: "Circle of Stars"
      }),
      CharacterFeature.create({
        description: "Guilds are generally found in cities large enough to support several artisans practicing the same trade. However, your guild might instead be a loose network of artisans who each work in a different village within a larger realm. Work with your DM to determine the nature of your guild. You can select your guild business from the Guild Business table or roll randomly.",
        feature_type: "Passive",
        name: "Guild Business",
        source: "Guild Artisan"
      }),  
      CharacterFeature.create({
        description: "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces.",
        feature_type: "Passive",
        name: "Guild Membership",
        source: "Guild Artisan"
      }),  
      CharacterFeature.create({
        description: "Your Charisma score increases by 2.",
        feature_type: "Passive",
        name: "Ability Score Increase",
        source: "Aasimar"
      }),  
      CharacterFeature.create({
        description: "Blessed with a radiant soul, your vision can easily cut through darkness. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        feature_type: "Passive",
        name: "Darkvision",
        source: "Aasimar"
      }),
      CharacterFeature.create({
        description: "You have resistance to necrotic damage and radiant damage.",
        feature_type: "Passive",
        name: "Celestial Resistance",
        source: "Aasimar"
      }),
      CharacterFeature.create({
        description: "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.",
        feature_type: "Action",
        name: "Healing Hands",
        source: "Aasimar"
      }),
      CharacterFeature.create({
        description: "You know the Light cantrip. Charisma is your spellcasting ability for it.",
        feature_type: "Passive",
        name: "Light Bearer",
        source: "Aasimar"
      }),
      CharacterFeature.create({
        description: "You can speak, read, and write Common and Celestial.",
        feature_type: "Passive",
        name: "Languages",
        source: "Aasimar"
      }),
      CharacterFeature.create({
        description: "Your Wisdom score increases by 1.",
        feature_type: "Passive",
        name: "Ability Score Increase",
        source: "Protector Aasimar"
      }),  
      CharacterFeature.create({
        description: "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        feature_type: "Action",
        name: "Radiant Soul",
        source: "Protector Aasimar"
      })
    ]
  }
])