export const CHA = 'CHA';
export const CON = 'CON';
export const DEX = 'DEX';
export const INT = 'INT';
export const STR = 'STR';
export const WIS = 'WIS';

export const ACROBATICS = 'Acrobatics';
export const ANIMAL_HANDLING = 'Animal Handling';
export const ARCANA = 'Arcana';
export const ATHLETICS = 'Athletics';
export const DECEPTION = 'Deception';
export const HISTORY = 'History';
export const INSIGHT = 'Insight';
export const INTIMIDATION = 'Intimidation';
export const INVESTIGATION = 'Investigation';
export const MEDICINE = 'Medicine';
export const NATURE = 'Nature';
export const PERCEPTION = 'Perception';
export const PERFORMANCE = 'Performance';
export const PERSUASION = 'Persuasion';
export const RELIGION = 'Religion';
export const SLEIGHT_OF_HAND = 'Sleight of Hand';
export const STEALTH = 'Stealth';
export const SURVIVAL = 'Survival';

export const EXP = 'exp';
export const NONE = 'none';
export const PROF = 'prof';

export const CR_LIST = [
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
];

export const PROFICIENCY_BONUS_BY_LEVEL = {
  '0': 2,
  '1/8': 2,
  '1/4': 2,
  '1/2': 2,
  '1': 2,
  '2': 2,
  '3': 2,
  '4': 2,
  '5': 3,
  '6': 3,
  '7': 3,
  '8': 3,
  '9': 4,
  '10': 4,
  '11': 4,
  '12': 4,
  '13': 5,
  '14': 5,
  '15': 5,
  '16': 5,
  '17': 6,
  '18': 6,
  '19': 6,
  '20': 6,
  '21': 7,
  '22': 7,
  '23': 7,
  '24': 7,
  '25': 8,
  '26': 8,
  '27': 8,
  '28': 8,
  '29': 9,
  '30': 9
};

export const ARTIFICER = 'Artificer';
export const BARBARIAN = 'Barbarian';
export const BLOOD_HUNTER = 'Blood Hunter';
export const BARD = 'Bard';
export const CLERIC = 'Cleric';
export const DRUID = 'Druid';
export const FIGHTER = 'Fighter';
export const MONK = 'Monk';
export const PALADIN = 'Paladin';
export const RANGER = 'Ranger';
export const ROGUE = 'Rogue';
export const SORCEROR = 'Sorceror';
export const WARLOCK = 'Warlock';
export const WIZARD = 'Wizard';

export const ARCANE_TRICKSTER = 'Arcane Trickster';
export const ELDRITCH_KNIGHT = 'Eldritch Knight';

export const FULL_CASTERS = [
  BARD,
  CLERIC,
  DRUID,
  SORCEROR,
  WIZARD
];

export const HALF_CASTERS = [
  PALADIN,
  RANGER
];

export const THIRD_CASTERS = [
  ARCANE_TRICKSTER,
  ELDRITCH_KNIGHT
];

export const CLASSES = [
  ARTIFICER,
  BARBARIAN,
  BLOOD_HUNTER,
  BARD,
  CLERIC,
  DRUID,
  FIGHTER,
  MONK,
  PALADIN,
  RANGER,
  ROGUE,
  SORCEROR,
  WARLOCK,
  WIZARD
];

export const ARTIFICER_CASTER_TABLE = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, , 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 4, 2, 0, 0, 0, 0, 0, 0],
  [0, 4, 2, 0, 0, 0, 0, 0, 0],
  [0, 4, 3, 0, 0, 0, 0, 0, 0],
  [0, 4, 3, 0, 0, 0, 0, 0, 0],
  [0, 4, 3, 2, 0, 0, 0, 0, 0],
  [0, 4, 3, 2, 0, 0, 0, 0, 0],
  [0, 4, 3, 3, 0, 0, 0, 0, 0],
  [0, 4, 3, 3, 0, 0, 0, 0, 0],
  [0, 4, 3, 3, 1, 0, 0, 0, 0],
  [0, 4, 3, 3, 1, 0, 0, 0, 0],
  [0, 4, 3, 3, 2, 0, 0, 0, 0],
  [0, 4, 3, 3, 2, 0, 0, 0, 0],
  [0, 4, 3, 3, 3, 1, 0, 0, 0],
  [0, 4, 3, 3, 3, 1, 0, 0, 0],
  [0, 4, 3, 3, 3, 2, 0, 0, 0],
  [0, 4, 3, 3, 3, 2, 0, 0, 0],
];

export const FULL_CASTER_TABLE = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 2, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 2, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 1, 0, 0, 0, 0, 0],
  [4, 3, 3, 2, 0, 0, 0, 0, 0],
  [4, 3, 3, 3, 1, 0, 0, 0, 0],
  [4, 3, 3, 3, 2, 0, 0, 0, 0],
  [4, 3, 3, 3, 2, 1, 0, 0, 0],
  [4, 3, 3, 3, 2, 1, 0, 0, 0],
  [4, 3, 3, 3, 2, 1, 1, 0, 0],
  [4, 3, 3, 3, 2, 1, 1, 0, 0],
  [4, 3, 3, 3, 2, 1, 1, 1, 0],
  [4, 3, 3, 3, 2, 1, 1, 1, 0],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

export const HALF_CASTER_TABLE = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 4, 2, 0, 0, 0, 0, 0, 0],
  [0, 4, 2, 0, 0, 0, 0, 0, 0],
  [0, 4, 3, 0, 0, 0, 0, 0, 0],
  [0, 4, 3, 0, 0, 0, 0, 0, 0],
  [0, 4, 3, 2, 0, 0, 0, 0, 0],
  [0, 4, 3, 2, 0, 0, 0, 0, 0],
  [0, 4, 3, 3, 0, 0, 0, 0, 0],
  [0, 4, 3, 3, 0, 0, 0, 0, 0],
  [0, 4, 3, 3, 1, 0, 0, 0, 0],
  [0, 4, 3, 3, 1, 0, 0, 0, 0],
  [0, 4, 3, 3, 2, 0, 0, 0, 0],
  [0, 4, 3, 3, 2, 0, 0, 0, 0],
  [0, 4, 3, 3, 3, 1, 0, 0, 0],
  [0, 4, 3, 3, 3, 1, 0, 0, 0],
  [0, 4, 3, 3, 3, 2, 0, 0, 0],
  [0, 4, 3, 3, 3, 2, 0, 0, 0],
];

export const THIRD_CASTER_TABLE = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 2, 0, 0, 0, 0, 0, 0, 0],
  [4, 2, 0, 0, 0, 0, 0, 0, 0],
  [4, 2, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 0, 0, 0, 0, 0, 0, 0],
  [4, 3, 2, 0, 0, 0, 0, 0, 0],
  [4, 3, 2, 0, 0, 0, 0, 0, 0],
  [4, 3, 2, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 0, 0, 0, 0, 0, 0],
  [4, 3, 3, 1, 0, 0, 0, 0, 0],
  [4, 3, 3, 1, 0, 0, 0, 0, 0]
];
