export enum ActionTypes {
  ACTION = 'Action',
  BONUS_ACTION = 'Bonus Action',
  REACTION = 'Reaction'
}

export enum ActionCombatTypes {
  MELEE_SPELL_ATTACK = 'Melee Spell Attack',
  MELEE_WEAPON_ATTACK = 'Melee Weapon Attack',
  RANGED_OR_MELEE_WEAPON_ATTACK = 'Ranged or Melee Weapon Attack',
  RANGED_SPELL_ATTACK = 'Ranged Spell Attack',
  RANGED_WEAPON_ATTACK = 'Ranged Weapon Attack'
}

export enum AlignmentTypes {
  CHAOTIC_GOOD = 'Chaotic Good',
  NEUTRAL_GOOD = 'Neutral Good',
  LAWFUL_GOOD = 'Lawful Good',
  CHAOTIC_NEUTRAL = 'Chaotic Neutral',
  NEUTRAL = 'Neutral',
  LAWFUL_NEUTRAL = 'Lawful Neutral',
  CHAOTIC_EVIL = 'Chaotic Evil',
  NEUTRAL_EVIL = 'Neutral Evil',
  LAWFUL_EVIL = 'Lawful Evil',
  UNALIGNED = 'Unaligned'
}

export enum CreatureCategoryTypes {
  NPC = 'NPC',
  MONSTER = 'Monster',
  UNKNOWN = ''
}

export enum ItemCategoryTypes {
  ARMOR = 'Armor',
  POTION = 'Potion',
  RING = 'Ring',
  ROD = 'Rod',
  SCROLL = 'Scroll',
  STAFF = 'Staff',
  WAND = 'Wand',
  WEAPON = 'Weapon',
  WONDEROUS_ITEM = 'Wonderous Item'
}

export enum ItemRarityTypes {
  COMMON = 'Common',
  UNCOMMON = 'Uncommon',
  RARE = 'Rare',
  VERY_RARE = 'Very Rare',
  LEGENDARY = 'Legendary',
  ARTIFACT = 'Artifact'
}

export enum SpellSchoolsTypes {
  ABJURATION = 'Abjuration',
  CONJURATION = 'Conjuration',
  DIVINATION = 'Divination',
  ENCHANTMENT = 'Enchantment',
  EVOCATION = 'Evocation',
  ILLUSION = 'Illustion',
  NECROMANCY = 'Necromancy',
  TRANSMUTATION = 'Transmutation'
}