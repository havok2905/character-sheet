import { ISpell } from '../../types/models';

const getSpellsByLevel = (level: number, spells: ISpell[]) => {
  return spells.filter(spell => spell.level === level);
};

export { getSpellsByLevel };
