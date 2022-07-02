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

export {
  ILocation,
  IMagicItem,
  IMap,
  IPin,
  ISpell
};
