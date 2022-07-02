import {
  ItemCategoryTypes,
  ItemRarityTypes,
  SpellSchoolsTypes
} from './rules';

interface IPin {
  id?: string;
  map_id: string;
  name: string;
  x: number;
  y: number;
}

interface IMap {
  id?: string;
  imageUrl: string;
  pins: IPin[];
}

interface ILocation {
  content: string;
  description: string;
  id?: string;
  map: IMap;
  name: string;
  sigilUrl: string;
}

interface IMagicItem {
  attunement: boolean;
  category: ItemCategoryTypes;
  description: string;
  id?: string;
  imageUrl?: string;
  name: string;
  rarity: ItemRarityTypes;
  subCategory: string;
}

interface ISpell {
  castingTime: string;
  components: string;
  concentration: boolean;
  description: string;
  descriptionHigherLevels: string;
  duration: string;
  id?: string;
  level: number;
  materialComponents: boolean;
  name: string;
  range: string;
  ritual: boolean;
  school: SpellSchoolsTypes;
  somaticComponents: boolean;
  target: string;
  verbalComponents: boolean;
}

interface ICharacter {
  ac: number;
  acrobaticsMod: number;
  acrobaticsProf: string;
  age: number;
  alignment: string;
  animalHandlingMod: number;
  animalHandlingProf: string;
  arcanaMod: number;
  arcanaProf: string;
  athleticsMod: number;
  athleticsProf: string;
  armorProficiencies: string;
  background: string;
  backstory: string;
  bonds: string;
  characterClass: string;
  characterClassHitDice: number;
  characterClassLevel: number;
  characterSubClass: string;
  charismaMod: number;
  charismaProf: string;
  charismaSave: number;
  charismaScore: number;
  conditionImmunities: string;
  conditionResistances: string;
  conditionVulnerabilities: string;
  constitutionMod: number;
  constitutionProf: string;
  constitutionSave: number;
  constitutionScore: number;
  copperPieces: number;
  damageImmunities: string;
  damageResistances: string;
  damageVulnerabilities: string;
  deceptionMod: number;
  deceptionProf: string;
  dexterityMod: number;
  dexterityProf: string;
  dexteritySave: number;
  dexterityScore: number;
  electrumPieces: number;
  eyes: string;
  flaws: string;
  goldPieces: number;
  hair: string;
  height: string;
  historyMod: number;
  historyProf: string;
  id?: string;
  imageUrl?: string;
  insightMod: number;
  hp: number;
  ideals: string;
  initiative: number;
  insightProf: string;
  intelligenceMod: number;
  intelligenceProf: string;
  intelligenceSave: number;
  intelligenceScore: number;
  intimidationMod: number;
  intimidationProf: string;
  investigationMod: number;
  investigationProf: string;
  languages: string;
  medicineMod: number;
  medicineProf: string;
  multiclassClass: string;
  multiclassClassHitDice: number;
  multiclassClassLevel: number;
  multiclassSubClass: string;
  passivePerception: number;
  proficiencyBonus: number;
  name: string;
  natureMod: number;
  natureProf: string;
  perceptionMod: number;
  perceptionProf: string;
  performanceMod: number;
  performanceProf: string;
  personalityTraits: string;
  persuasionMod: number;
  persuasionProf: string;
  platinumPieces: number;
  race: string;
  religionMod: number;
  religionProf: string;
  senses: string;
  silverPieces: number;
  skin: string;
  sleightOfHandMod: number;
  sleightOfHandProf: string;
  spellSlotsEighth: number;
  spellSlotsFifth: number;
  spellSlotsFirst: number;
  spellSlotsFourth: number;
  spellSlotsNinth: number;
  spellSlotsSecond: number;
  spellSlotsSeventh: number;
  spellSlotsSixth: number;
  spellSlotsThird: number;
  spellcastingAbility: string;
  spellcastingModifier: number;
  spellcastingSaveDc: number;
  stealthMod: number;
  stealthProf: string;
  strengthMod: number;
  strengthProf: string;
  strengthSave: number;
  strengthScore: number;
  speed: number;
  subRace: string;
  survivalMod: number;
  survivalProf: string;
  toolProficiencies: string;
  weaponProficiencies: string;
  weight: string;
  wisdomMod: number;
  wisdomProf: string;
  wisdomSave: number;
  wisdomScore: number;
}

interface ICreature {
  ac: number;
  alignment: string;
  armor: string;
  backstory: string;
  bonds: string;
  charismaMod: number;
  charismaSave: number;
  charismaScore: number;
  conditionImmunities: string;
  conditionResistances: string;
  conditionVulnerabilities: string;
  constitution_mod: number;
  constitution_save: number;
  constitution_score: number;
  cr: string;
  creatureCategory: string;
  creatureType: string;
  damageImmunities: string;
  damageResistances: string;
  damageVulnerabilities: string;
  description: string;
  dexterityMod: number;
  dexteritySave: number;
  dexterityScore: number;
  flaws: string;
  hp: number;
  id?: string;
  ideals: string;
  imageUrl?: string;
  intelligenceMod: number;
  intelligenceSave: number;
  intelligenceScore: number;
  languages: string;
  lairActionsText: string;
  legendaryActionsText: string;
  name: string;
  personalityTraits: string;
  regionalEffectsText: string;
  senses: string;
  size: string;
  skills: string;
  speed: string;
  spellSlotsFirst: number;
  spellSlotsSecond: number;
  spellSlotsThird: number;
  spellSlotsFourth: number;
  spellSlotsFifth: number;
  spellSlotsSixth: number;
  spellSlotsSeventh: number;
  spellSlotsEighth: number;
  spellSlotsNinth: number;
  spellcastingAbility: string;
  spellcastingLevel: number;
  spellcastingModifier: number;
  spellcastingSaveDc: number;
  strengthMod: number;
  strengthSave: number;
  strengthScore: number;
  wisdomMod: number;
  wisdomSave: number;
  wisdomScore: number;
}

interface IFaction {
  alignment: string;
  allies: string;
  characters?: ICharacter[],
  creatures?: ICreature[],
  description: string;
  goals: string;
  id?: string;
  ideals: string;
  imageUrl?: string;
  name: string;
  rivals: string;
}

export {
  ICharacter,
  ICreature,
  IFaction,
  ILocation,
  IMagicItem,
  IMap,
  IPin,
  ISpell
};
