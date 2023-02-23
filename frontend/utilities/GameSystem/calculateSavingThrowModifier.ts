import {ProficiencyType} from './types';

interface ICalculateSavingThrowModifierArguments {
  abilityScore: number;
  bonus: number;
  proficiency: ProficiencyType;
  proficiencyBonus: number;
}

const calculateSavingThrowModifier = ({
  abilityScore,
  bonus = 0,
  proficiency = 'none',
  proficiencyBonus = 0
}: ICalculateSavingThrowModifierArguments): number => {
  const baseMod = Math.floor((abilityScore - 10) / 2);

  if (proficiency === 'prof') {
    return baseMod + proficiencyBonus + bonus;
  }

  if (proficiency === 'exp') {
    return baseMod + (proficiencyBonus * 2) + bonus;
  }

  return baseMod + bonus;
};

export {calculateSavingThrowModifier};
