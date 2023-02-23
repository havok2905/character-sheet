export const calculateSpellcastingSaveDc = (abilityMod: number, proficiencyBonus: number) => {
  return 8 + abilityMod + proficiencyBonus;
};
