interface ICalculateAbilityModifierArguments {
  abilityScore: number;
  bonus: number;
}

const calculateAbilityModifier = ({
  abilityScore,
  bonus = 0
}: ICalculateAbilityModifierArguments): number => {
  const baseMod = Math.floor((abilityScore - 10) / 2);

  return baseMod + bonus;
};

export {calculateAbilityModifier};
