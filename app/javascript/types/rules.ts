enum AlignmentTypes {
  CHAOTIC_GOOD = 'Chaotic Good',
  NEUTRAL_GOOD = 'Neutral Good',
  LAWFUL_GOOD = 'Lawful Good',
  CHAOTIC_NEUTRAL = 'Chaotic Neutral',
  NEUTRAL = 'Neutral',
  LAWFUL_NEUTRAL = 'Lawful Neutral',
  CHAOTIC_EVIL = 'Chaotic Evil',
  NEUTRAL_EVIL = 'Neutral Evil',
  LAWFUL_EVIL = 'Lawful Evil',
}

const CR_LIST = [
  '0',
  '1/8',
  '1/4',
  '1/2',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30'
]

enum CreatureCategoryTypes {
  NPC = 'NPC',
  MONSTER = 'Monster',
  UNKNOWN = ''
}

enum ItemCategoryTypes {
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

enum ItemRarityTypes {
  COMMON = 'Common',
  UNCOMMON = 'Uncommon',
  RARE = 'Rare',
  VERY_RARE = 'Very Rare',
  LEGENDARY = 'Legendary',
  ARTIFACT = 'Artifact'
}

enum SpellSchoolsTypes {
  ABJURATION = 'Abjuration',
  CONJURATION = 'Conjuration',
  DIVINATION = 'Divination',
  ENCHANTMENT = 'Enchantment',
  EVOCATION = 'Evocation',
  ILLUSION = 'Illustion',
  NECROMANCY = 'Necromancy',
  TRANSMUTATION = 'Transmutation'
}

export {
  AlignmentTypes,
  CR_LIST,
  CreatureCategoryTypes,
  ItemCategoryTypes,
  ItemRarityTypes,
  SpellSchoolsTypes
};
