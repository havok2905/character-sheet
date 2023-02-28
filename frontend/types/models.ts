import {
  AlignmentTypes,
  CreatureCategoryTypes,
  ItemCategoryTypes,
  ItemRarityTypes,
  SpellSchoolsTypes
} from '../utilities/GameSystem/enums';
import { ProficiencyType } from '../utilities/GameSystem/types';

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

interface ICharacterAttack {
  _destroy?: boolean;
  attackBonus: number;
  critRange: number;
  damageDiceRoll: string;
  damageTwoDiceRoll: string;
  damageTwoType: string;
  damageType: string;
  description: string;
  id?: string;
  isSavingThrow: boolean;
  name: string;
  range: string;
  savingThrowDescription: string;
  savingThrowThreshold: string;
  savingThrowType: string;
}

interface ICharacterFeature {
  _destroy?: boolean;
  description: string;
  id?: string;
  name: string;
  source: string;
}

interface ICharacterFeatureResource {
  _destroy?: boolean;
  id?: string;
  name: string;
  total: number;
}

interface ICharacterItem {
  _destroy?: boolean;
  id?: string;
  name: string;
  total: number;
}

interface ICharacter {
  ac: number;
  acrobaticsProf: ProficiencyType;
  age: number;
  alignment: string;
  animalHandlingProf: ProficiencyType;
  arcanaProf: ProficiencyType;
  armorProficiencies: string;
  athleticsProf: ProficiencyType;
  background: string;
  backstory: string;
  bonds: string;
  characterClass: string;
  characterClassHitDice: number;
  characterClassLevel: number;
  characterAttacks?: ICharacterAttack[];
  characterFeatures?: ICharacterFeature[];
  characterFeatureResources?: ICharacterFeatureResource[];
  characterItems?: ICharacterItem[];
  characterSubClass: string;
  charismaProf: ProficiencyType;
  charismaScore: number;
  conditionImmunities: string;
  conditionResistances: string;
  conditionVulnerabilities: string;
  constitutionProf: ProficiencyType;
  constitutionScore: number;
  copperPieces: number;
  creatures?: ICreature[];
  creatureIds?: string[];
  damageImmunities: string;
  damageResistances: string;
  damageVulnerabilities: string;
  deceptionProf: ProficiencyType;
  dexterityProf: ProficiencyType;
  dexterityScore: number;
  electrumPieces: number;
  eyes: string;
  flaws: string;
  goldPieces: number;
  hair: string;
  height: string;
  historyProf: ProficiencyType;
  hp: number;
  id?: string;
  ideals: string;
  imageUrl?: string;
  initiative: number;
  insightProf: ProficiencyType;
  intelligenceProf: ProficiencyType;
  intelligenceScore: number;
  intimidationProf: ProficiencyType;
  investigationProf: ProficiencyType;
  jackOfAllTrades: boolean;
  languages: string;
  magicItems?: IMagicItem[];
  magicItemIds?: string[];
  medicineProf: ProficiencyType;
  multiclassClass: string;
  multiclassClassHitDice: number;
  multiclassClassLevel: number;
  multiclassSubClass: string;
  passivePerception: number;
  name: string;
  natureProf: ProficiencyType;
  perceptionProf: ProficiencyType;
  performanceProf: ProficiencyType;
  personalityTraits: string;
  persuasionProf: ProficiencyType;
  platinumPieces: number;
  race: string;
  religionProf: ProficiencyType;
  senses: string;
  silverPieces: number;
  skin: string;
  sleightOfHandProf: ProficiencyType;
  speed: number;
  spells?: ISpell[];
  spellIds?: string[];
  spellcastingAbility: string;
  stealthProf: ProficiencyType;
  strengthProf: ProficiencyType;
  strengthScore: number;
  subRace: string;
  survivalProf: ProficiencyType;
  toolProficiencies: string;
  weaponProficiencies: string;
  weight: string;
  wisdomProf: ProficiencyType;
  wisdomScore: number;
}

interface ICreatureAction {
  _destroy?: boolean;
  description: string;
  actionType: string;
  actionCombatType: string;
  attackBonus: number;
  damageDiceRoll: string;
  damageTwoDiceRoll: string;
  damageTwoType: string;
  damageType: string;
  id?: string;
  name: string;
  range: string;
  savingThrowDc: number;
  savingThrowType: string;
}

interface ICreatureFeature {
  _destroy?: boolean;
  description: string;
  id?: string;
  name: string;
}

interface ICreatureLairAction {
  _destroy?: boolean;
  description: string;
  id?: string;
}

interface ICreatureLegendaryAction {
  _destroy?: boolean;
  description: string;
  id?: string;
  name: string;
}

interface ICreatureRegionalEffect {
  _destroy?: boolean;
  description: string;
  id?: string;
}

interface ICreature {
  ac: number;
  acrobaticsProf: ProficiencyType;
  alignment: AlignmentTypes;
  animalHandlingProf: ProficiencyType;
  arcanaProf: ProficiencyType;
  armor: string;
  athleticsProf: ProficiencyType,
  backstory: string;
  bonds: string;
  charismaProf: ProficiencyType;
  charismaScore: number;
  conditionImmunities: string;
  conditionResistances: string;
  conditionVulnerabilities: string;
  constitutionProf: ProficiencyType;
  constitutionScore: number;
  cr: string;
  creatureActions?: ICreatureAction[];
  creatureCategory: CreatureCategoryTypes;
  creatureFeatures?: ICreatureFeature[];
  creatureLairActions?: ICreatureLairAction[];
  creatureLegendaryActions?: ICreatureLegendaryAction[];
  creatureRegionalEffects?: ICreatureRegionalEffect[];
  creatureType: string;
  damageImmunities: string;
  damageResistances: string;
  damageVulnerabilities: string;
  deceptionProf: ProficiencyType;
  description: string;
  dexterityProf: ProficiencyType;
  dexterityScore: number;
  flaws: string;
  historyProf: ProficiencyType;
  hp: number;
  id?: string;
  ideals: string;
  insightProf: ProficiencyType;
  imageUrl?: string;
  intelligenceProf: ProficiencyType;
  intelligenceScore: number;
  intimidationProf: ProficiencyType;
  investigationProf: ProficiencyType;
  jackOfAllTrades: boolean;
  languages: string;
  lairActionsText?: string;
  legendaryActionsText?: string;
  magicItems?: IMagicItem[];
  magicItemIds?: string[];
  medicineProf: ProficiencyType;
  name: string;
  natureProf: ProficiencyType;
  perceptionProf: ProficiencyType;
  performanceProf: ProficiencyType;
  personalityTraits: string;
  persuasionProf: ProficiencyType;
  regionalEffectsText?: string;
  religionProf: ProficiencyType;
  senses: string;
  size: string;
  sleightOfHandProf: ProficiencyType;
  speed: string;
  spells?: ISpell[];
  spellIds?: string[];
  spellcastingAbility: string;
  spellcastingLevel: number;
  stealthProf: ProficiencyType;
  strengthProf: ProficiencyType;
  strengthScore: number;
  survivalProf: ProficiencyType;
  wisdomProf: ProficiencyType;
  wisdomScore: number;
}

interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  username: string;
}

export {
  ICharacter,
  ICharacterAttack,
  ICharacterFeature,
  ICharacterFeatureResource,
  ICharacterItem,
  ICreature,
  ICreatureAction,
  ICreatureFeature,
  ICreatureLairAction,
  ICreatureLegendaryAction,
  ICreatureRegionalEffect,
  IMagicItem,
  ISpell,
  IUser
};
