# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.new
user.email = 'admin@example.com'
user.username = "admin"
user.password = 'password'
user.password_confirmation = 'password'
user.role = Permissions::Roles::ADMIN_ROLE
user.save!

userb = User.new
userb.email = 'guest@example.com'
userb.username = "guest"
userb.password = 'password'
userb.password_confirmation = 'password'
userb.role = Permissions::Roles::GUEST_ROLE
userb.save!

pins  = Pin.create([
  {
    x: 500,
    y: 500
  },
  {
    x: 200,
    y: 300
  },
  {
    x: 300,
    y: 200
  }
])

map = Map.create({
  pins: pins
})

location = Location.create({
  description: 'Lorem ipsum dolor',
  name: 'Celu'
})

map.location_id = location.id
map.save!

magic_item = MagicItem.create(
  {
    attunement: true,
    category: CoreRules::ItemCategory::WEAPON,
    description: "When you hit with an Attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have Resistance to fire damage.
  
    In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.

    When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.
    ",
    name: "Frost Brand",
    rarity: CoreRules::ItemRarity::VERY_RARE,
    sub_category: 'any sword'
  }
)

spells = Spell.create([
  {
    casting_time: "1 Action",
    components: "",
    concentration: false,
    character_id: nil,
    creature_id: nil,
    description: "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.",
    description_higher_levels: "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    duration: "Instantaneous",
    level: 0,
    material_components: false,
    name: "Frostbite",
    range: "60ft.",
    ritual: false,
    school: CoreRules::SpellSchools::EVOCATION,
    somatic_components: true,
    target: "One target",
    verbal_components: true
  },
  {
    casting_time: "1 Action",
    components: "",
    concentration: false,
    description: "A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.",
    description_higher_levels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
    duration: "1 Round",
    level: 1,
    material_components: false,
    name: "Guiding Bolt",
    range: "120ft.",
    ritual: false,
    school: CoreRules::SpellSchools::EVOCATION,
    somatic_components: true,
    target: "A creature of your choice within range",
    verbal_components: true
  },
  {
    casting_time: "1 Action",
    components: "A small, straight piece of iron",
    concentration: true,
    description: "Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
    description_higher_levels: "When you cast this spell using a spell slot of 3rd level or higher, you can target on additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.",
    duration: "Up to 1 minute",
    level: 2,
    material_components: true,
    name: "Hold Person",
    range: "60ft.",
    ritual: false,
    school: CoreRules::SpellSchools::ENCHANTMENT,
    somatic_components: true,
    target: "A creature of your choice within range",
    verbal_components: true
  },
  {
    casting_time: "1 Action",
    components: "",
    concentration: false,
    description: "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. The hand can't attack, activate magic items, or carry more than 10 pounds.",
    description_higher_levels: "",
    duration: "1 Minute",
    level: 0,
    material_components: false,
    name: "Mage Hand",
    range: "30ft.",
    ritual: false,
    school: CoreRules::SpellSchools::CONJURATION,
    somatic_components: true,
    target: "",
    verbal_components: true
  }
])

character = Character.create(
  {
    ac: 13,
    acrobatics_mod: 2,
    acrobatics_prof: "none",
    age: 26,
    alignment: "Chaotic Good",
    animal_handling_mod: 4,
    animal_handling_prof: "none",
    arcana_mod: 1,
    arcana_prof: "none",
    armor_proficiencies: "Light Armor, Medium Armor, Shields (druids will not wear armor or use Shields made of metal)",
    athletics_mod: -1,
    athletics_prof: "none",
    background: "Guild Artisan",
    bonds: "I serve my library and am out on a research mission to finish my apprenticeship. I must return with new knowledge significant of acceptance.",
    character_class: "Druid",
    character_class_hit_dice: 8,
    character_class_level: 3,
    character_sub_class: "Circle of Stars",
    charisma_prof: "none",
    charisma_mod: 2,
    charisma_save: 2,
    charisma_score: 15,
    condition_immunities: "",
    condition_resistances: "",
    condition_vulnerabilities: "",
    constitution_prof: "none",
    constitution_mod: 1,
    constitution_save: 1,
    constitution_score: 12,
    copper_pieces: 0,
    damage_immunities: "",
    damage_resistances: "Necrotic, Radiant",
    damage_vulnerabilities: "",
    deception_mod: 2,
    deception_prof: "none",
    dexterity_prof: "none",
    dexterity_mod: 2,
    dexterity_save: 2,
    dexterity_score: 15,
    electrum_pieces: 0,
    eyes: "Blue",
    flaws: "I can be shy and get nervous in front of a pretty face.",
    gold_pieces: 15,
    hair: "White",
    height: "5'1\"",
    history_mod: 3,
    history_prof: "prof",
    hp: 21,
    ideals: "The universe is not mysterious, just misunderstood. It's influence and beauty are in plain sight for all to see. It matters not that we have free will, just that we experience life as if we do.",
    initiative: 2,
    insight_mod: 6,
    insight_prof: "prof",
    intelligence_prof: "prof",
    intelligence_mod: 1,
    intelligence_save: 3,
    intelligence_score: 12,
    intimidation_mod: 2,
    intimidation_prof: "none",
    investigation_mod: 1,
    investigation_prof: "none",
    languages: "Common, Celestial, Druidic, Sylvan",
    medicine_mod: 4,
    medicine_prof: "none",
    multiclass_class: "",
    multiclass_class_hit_dice: 0,
    multiclass_class_level: 0,
    multiclass_sub_class: "",
    name: "Ella Olkereth",
    nature_mod: 3,
    nature_prof: "prof",
    passive_perception: 14,
    perception_mod: 6,
    perception_prof: "prof",
    performance_mod: 2,
    performance_prof: "none",
    personality_traits: "Humble and hospitable out of combat, cocky and arrogant under distress. I try to not spoil the future for myself.",
    persuasion_mod: 2,
    persuasion_prof: "none",
    platinum_pieces: 0,
    proficiency_bonus: 2,
    race: "Aasimar",
    religion_mod: 1,
    religion_prof: "none",
    senses: "Darkvision 60ft.",
    silver_pieces: 0,
    skin: "Pale",
    sleight_of_hand_mod: 2,
    sleight_of_hand_prof: "none",
    speed: 30,
    spell_slots_eighth: 0,
    spell_slots_fifth: 0,
    spell_slots_first: 3,
    spell_slots_fourth: 0,
    spell_slots_ninth: 0,
    spell_slots_second: 2,
    spell_slots_seventh: 0,
    spell_slots_sixth: 0,
    spell_slots_third: 0,
    spellcasting_ability: "Wisdom",
    spellcasting_modifier: 6,
    spellcasting_save_dc: 14,
    stealth_mod: 2,
    stealth_prof: "none",
    strength_prof: "none",
    strength_mod: -1,
    strength_save: -1,
    strength_score: 9,
    sub_race: "Protector",
    survival_mod: 4,
    survival_prof: "none",
    tool_proficiencies: "Cook's Utensils, Herbalism Kit",
    weapon_proficiencies: "clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
    weight: "110lbs",
    wisdom_prof: "prof",
    wisdom_mod: 4,
    wisdom_save: 6,
    wisdom_score: 18,

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
        range: "20/40/60 ft.",
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
        name: "Druidic",
        source: "Druid"
      }),  
      CharacterFeature.create({
        description: "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.",
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
        name: "Wildshape",
        source: "Druid"
      }),
      CharacterFeature.create({
        description: "At 2nd level, you choose to identify with a circle of druids. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level.",
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
        name: "Starry Form",
        source: "Circle of Stars"
      }),
      CharacterFeature.create({
        description: "Guilds are generally found in cities large enough to support several artisans practicing the same trade. However, your guild might instead be a loose network of artisans who each work in a different village within a larger realm. Work with your DM to determine the nature of your guild. You can select your guild business from the Guild Business table or roll randomly.",
        name: "Guild Business",
        source: "Guild Artisan"
      }),  
      CharacterFeature.create({
        description: "As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces.",
        name: "Guild Membership",
        source: "Guild Artisan"
      }),  
      CharacterFeature.create({
        description: "Your Charisma score increases by 2.",
        name: "Ability Score Increase",
        source: "Aasimar"
      }),  
      CharacterFeature.create({
        description: "Blessed with a radiant soul, your vision can easily cut through darkness. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
        name: "Darkvision",
        source: "Aasimar"
      }),
      CharacterFeature.create({
        description: "You have resistance to necrotic damage and radiant damage.",
        name: "Celestial Resistance",
        source: "Aasimar"
      }),
      CharacterFeature.create({
        description: "As an action, you can touch a creature and cause it to regain a number of hit points equal to your level. Once you use this trait, you can't use it again until you finish a long rest.",
        name: "Healing Hands",
        source: "Aasimar"
      }),
      CharacterFeature.create({
        description: "You know the Light cantrip. Charisma is your spellcasting ability for it.",
        name: "Light Bearer",
        source: "Aasimar"
      }),
      CharacterFeature.create({
        description: "You can speak, read, and write Common and Celestial.",
        name: "Languages",
        source: "Aasimar"
      }),
      CharacterFeature.create({
        description: "Your Wisdom score increases by 1.",
        name: "Ability Score Increase",
        source: "Protector Aasimar"
      }),  
      CharacterFeature.create({
        description: "Starting at 3rd level, you can use your action to unleash the divine energy within yourself, causing your eyes to glimmer and two luminous, incorporeal wings to sprout from your back. Your transformation lasts for 1 minute or until you end it as a bonus action. During it, you have a flying speed of 30 feet, and once on each of your turns, you can deal extra radiant damage to one target when you deal damage to it with an attack or a spell. The extra radiant damage equals your level. Once you use this trait, you can't use it again until you finish a long rest.",
        name: "Radiant Soul",
        source: "Protector Aasimar"
      })
    ],

    character_items: [
      CharacterItem.create({
        name: "Cook's Utensils",
        total: 1
      }),
      CharacterItem.create({
        name: "Letter of Introduction from the Guild",
        total: 1
      }),
      CharacterItem.create({
        name: "Traveler's Clothes",
        total: 1
      }),
      CharacterItem.create({
        name: "Dagger",
        total: 1
      }),
      CharacterItem.create({
        name: "Leather Armor ( AC 11 )",
        total: 1
      }),
      CharacterItem.create({
        name: "Druidic Focus",
        total: 1
      }),
      CharacterItem.create({
        name: "Explorer's Pack",
        total: 1
      })
    ],

    magic_items: [
    ],

    spells: [
    ]
  }
)

monster = Creature.create(
  {
    ac: 22,
    armor: "Natural",
    alignment: "Chaotic Evil",
    bonds: "",
    charisma_mod: 6,
    charisma_save: 13,
    charisma_score: 23,
    condition_immunities: "",
    condition_resistances: "",
    condition_vulnerabilities: "",
    constitution_mod: 9,
    constitution_save: 16,
    constitution_score: 29,
    cr: 24,
    creature_category: "Monster",
    creature_type: "Dragon",
    damage_immunities: "fire",
    damage_resistances: "",
    damage_vulnerabilities: "",
    description: "",
    dexterity_mod: 0,
    dexterity_save: 7,
    dexterity_score: 10,
    flaws: "",
    hp: 546,
    ideals: "",
    intelligence_mod: 4,
    intelligence_save: 4,
    intelligence_score: 18,
    languages: "Common, Draconic",
    lair_actions_text: "On Initiative count 20 (losing Initiative ties), the Dragon takes a lair action to cause one of the following effects; the Dragon can’t use the same Effect two rounds in a row:",
    legendary_actions_text: "Ancient Red Dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Ancient Red Dragon regains spent legendary actions at the start of their turn.",
    name: "Ancient Red Dragon",
    personality_traits: "",
    regional_effects_text: "The region containing a legendary red dragon's lair is warped by the dragon's magic, which creates one or more of the following effects. If the Dragon dies, these Effects fade over the course of 1d10 days.",
    senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
    size: "Gargantuan",
    skills: "Perception +16, Stealth +7",
    speed: "40 ft., climb 40 ft., fly 80 ft.",
    spell_slots_eighth: 0,
    spell_slots_fifth: 0,
    spell_slots_first: 0,
    spell_slots_fourth: 0,
    spell_slots_ninth: 0,
    spell_slots_second: 0,
    spell_slots_seventh: 0,
    spell_slots_sixth: 0,
    spell_slots_third: 0,
    spellcasting_ability: "",
    spellcasting_level: 0,
    spellcasting_modifier: 0,
    spellcasting_save_dc: 0,
    strength_mod: 10,
    strength_save: 10,
    strength_score: 30,
    wisdom_mod: 2,
    wisdom_save: 9,
    wisdom_score: 15,

    creature_actions: [
      CreatureAction.create({
        description: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
        action_type: "Passive",
        action_combat_type: "",
        attack_bonus: 0,
        damage_dice_roll: "",
        damage_two_dice_roll: "",
        damage_two_type: "",
        damage_type: "",
        name: "Multiattack",
        range: "",
        saving_throw_dc: 0,
        saving_throw_type: ""
      }),
      CreatureAction.create({
        description: "",
        action_type: "Action",
        action_combat_type: "Melee Weapon Attack",
        attack_bonus: 17,
        damage_dice_roll: "2d10+10",
        damage_two_dice_roll: "4d6",
        damage_two_type: "Fire",
        damage_type: "Piercing",
        name: "Bite",
        range: "15ft.",
        saving_throw_dc: 0,
        saving_throw_type: ""
      }),
      CreatureAction.create({
        description: "",
        action_type: "Action",
        action_combat_type: "Melee Weapon Attack",
        attack_bonus: 17,
        damage_dice_roll: "2d6+10",
        damage_two_dice_roll: "",
        damage_two_type: "",
        damage_type: "Piercing",
        name: "Claw",
        range: "10ft.",
        saving_throw_dc: 0,
        saving_throw_type: ""
      }),
      CreatureAction.create({
        description: "",
        action_type: "Action",
        action_combat_type: "Melee Weapon Attack",
        attack_bonus: 17,
        damage_dice_roll: "2d8+10",
        damage_two_dice_roll: "",
        damage_two_type: "",
        damage_type: "Bludgeoning",
        name: "Tail",
        range: "20ft.",
        saving_throw_dc: 0,
        saving_throw_type: ""
      }),
      CreatureAction.create({
        description: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
        action_type: "Action",
        action_combat_type: "",
        attack_bonus: "",
        damage_dice_roll: "",
        damage_two_dice_roll: "",
        damage_two_type: "",
        damage_type: "",
        name: "Frightful Presence",
        range: "",
        saving_throw_dc: 0,
        saving_throw_type: ""
      }),
      CreatureAction.create({
        description: "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
        action_type: "Action",
        action_combat_type: "",
        attack_bonus: "",
        damage_dice_roll: "26d6",
        damage_two_dice_roll: "",
        damage_two_type: "",
        damage_type: "Fire",
        name: "Fire Breath (Recharge 5-6)",
        range: "90 foot cone",
        saving_throw_dc: 24,
        saving_throw_type: "Dexterity"
      })
    ],

    creature_features: [
      CreatureFeature.create({
        description: "If the dragon fails a saving throw, it can choose to succeed instead.",
        name: "Legendary Resistance (3/Day)"
      })
    ],

    creature_lair_actions: [
      CreatureLairAction.create({
        description: "Magma erupts from a point on the ground the Dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one."
      }),
      CreatureLairAction.create({
        description: "A tremor shakes the lair in a 60-foot radius around the Dragon. Each creature other than the Dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone."
      }),
      CreatureLairAction.create({
        description: "Volcanic gases form a cloud in a 20-foot-radius Sphere centered on a point the Dragon can see within 120 feet of it. The Sphere spreads around corners, and its area is lightly obscured. It lasts until Initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be Poisoned until the end of its turn. While Poisoned in this way, a creature is Incapacitated."
      })
    ],

    creature_legendary_actions: [
      CreatureLegendaryAction.create({
        description: "The dragon makes a Wisdom (Perception) check.",
        name: "Detect"
      }),
      CreatureLegendaryAction.create({
        description: "The dragon makes a tail attack.",
        name: "Tail Attack"
      }),
      CreatureLegendaryAction.create({
        description: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
        name: "Wing Attack (Costs 2 Actions)"
      })
    ],

    creature_regional_effects: [
      CreatureRegionalEffect.create({
        description: "Small earthquakes are Common within 6 miles of the dragon's lair."
      }),
      CreatureRegionalEffect.create({
        description: "Water sources within 1 mile of the lair are supernaturally warm and tainted by sulfur."
      }),
      CreatureRegionalEffect.create({
        description: "Rocky fissures within 1 mile of the dragon's lair form Portals to the Elemental Plane of Fire, allowing Creatures of elemental fire into the world to dwell nearby."
      })
    ],

    spells: [
    ]
  }
)

npc = Creature.create(
  {
    ac: 12,
    armor: "15 with Mage Armor",
    alignment: "Chaotic Evil",
    bonds: "Has many evil children",
    charisma_mod: 0,
    charisma_save: 0,
    charisma_score: 11,
    condition_immunities: "",
    condition_resistances: "",
    condition_vulnerabilities: "",
    constitution_mod: 0,
    constitution_save: 0,
    constitution_score: 11,
    cr: 6,
    creature_category: "NPC",
    creature_type: "Humanoid (Human)",
    damage_immunities: "",
    damage_resistances: "",
    damage_vulnerabilities: "",
    description: "Very very very evil",
    dexterity_mod: 2,
    dexterity_save: 2,
    dexterity_score: 14,
    flaws: "Has a huge ego",
    hp: 40,
    ideals: "Only studying. Never play.",
    intelligence_mod: 3,
    intelligence_save: 6,
    intelligence_score: 17,
    languages: "Common, Draconic, Elvish, Infernal",
    lair_actions_text: "",
    legendary_actions_text: "",
    name: "The Mighty Mage",
    personality_traits: "Coughs every other word",
    regional_effects_text: "",
    senses: "passive Perception 11",
    size: "Medium",
    skills: "Arcana +6, History +6",
    speed: "30 ft.",
    spell_slots_eighth: 0,
    spell_slots_fifth: 1,
    spell_slots_first: 4,
    spell_slots_fourth: 3,
    spell_slots_ninth: 0,
    spell_slots_second: 3,
    spell_slots_seventh: 0,
    spell_slots_sixth: 0,
    spell_slots_third: 3,
    spellcasting_ability: "Intelligence",
    spellcasting_level: 9,
    spellcasting_modifier: 6,
    spellcasting_save_dc: 14,
    strength_mod: -1,
    strength_save: -1,
    strength_score: 9,
    wisdom_mod: 1,
    wisdom_save: 4,
    wisdom_score: 12,

    creature_actions: [
      CreatureAction.create({
        description: "",
        action_type: "Action",
        action_combat_type: "Melee Weapon Attack",
        attack_bonus: 5,
        damage_dice_roll: "1d4+2",
        damage_two_dice_roll: "",
        damage_two_type: "",
        damage_type: "Piercing",
        name: "Dagger",
        range: "5ft.",
        saving_throw_dc: 0,
        saving_throw_type: ""
      }),
      CreatureAction.create({
        description: "",
        action_type: "Action",
        action_combat_type: "Ranged Weapon Attack",
        attack_bonus: 5,
        damage_dice_roll: "1d4+2",
        damage_two_dice_roll: "",
        damage_two_type: "",
        damage_type: "Piercing",
        name: "Dagger - Ranged",
        range: "20/60ft.",
        saving_throw_dc: 0,
        saving_throw_type: ""
      })
    ],

    creature_features: [
    ],

    creature_lair_actions: [
    ],

    creature_legendary_actions: [
    ],

    creature_regional_effects: [
    ],

    spells: [
    ]
  }
)

faction = Faction.create({
  alignment: "Chaotic Evil",
  allies: "Preists of Enkiem",
  description: "Evil bad evil bad people in dark cloaks",
  goals: "Revive Enkiem",
  ideals: "The world should be reborn anew, led by us",
  name: "The Ravens",
  rivals: "The Tunnel Snakes"
})

character.creatures.push monster
character.magic_items.push magic_item
character.save!

npc.magic_items.push magic_item
npc.save!