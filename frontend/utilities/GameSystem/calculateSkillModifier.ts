import {ProficiencyType} from './types';

interface ICalculateSkillModifierArguments {
  abilityScore: number;
  bonus: number;
  jackOfAllTrades: boolean;
  proficiency: ProficiencyType;
  proficiencyBonus: number;
}

const calculateSkillModifier = ({
  abilityScore,
  bonus = 0,
  proficiency = 'none',
  proficiencyBonus = 0,
  jackOfAllTrades = false
}: ICalculateSkillModifierArguments): number => {
  const baseMod = Math.floor((abilityScore - 10) / 2);

  if (jackOfAllTrades && proficiency !== 'exp' && proficiency !== 'prof') {
    return baseMod + Math.floor(proficiencyBonus / 2) + bonus;
  }

  if (proficiency === 'prof') {
    return baseMod + proficiencyBonus + bonus;
  }

  if (proficiency === 'exp') {
    return baseMod + (proficiencyBonus * 2) + bonus;
  }

  return baseMod + bonus;
};

export {calculateSkillModifier};
