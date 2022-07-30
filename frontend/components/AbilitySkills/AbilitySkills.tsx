import React, { ReactElement } from 'react';
import { ICharacter } from '../../types/models';
import './_abilitySkills.scss';

interface IAbilitySkillsProps {
  entity?: ICharacter
}

const AbilitySkills = ({
  entity
}: IAbilitySkillsProps): ReactElement | null => {
  if (!entity) return null;

  const {
    acrobaticsMod,
    acrobaticsProf,
    animalHandlingMod,
    animalHandlingProf,
    arcanaMod,
    arcanaProf,
    athleticsMod,
    athleticsProf,
    deceptionMod,
    deceptionProf,
    historyMod,
    historyProf,
    insightMod,
    insightProf,
    intimidationMod,
    intimidationProf,
    investigationMod,
    investigationProf,
    medicineMod,
    medicineProf,
    natureMod,
    natureProf,
    perceptionMod,
    perceptionProf,
    performanceMod,
    performanceProf,
    persuasionMod,
    persuasionProf,
    religionMod,
    religionProf,
    sleightOfHandMod,
    sleightOfHandProf,
    stealthMod,
    stealthProf,
    survivalMod,
    survivalProf
  } = entity;
  
  const profs = ['exp', 'prof'];

  const getProficientClass = (prof: string): string | undefined => {
    return profs.includes(prof) ? 'ability-skills-proficient' : undefined
  };

  const getProfString = (prof: string): string => {
    return profs.includes(prof) ? prof : '';
  };

  const getRow = (
    ability: string,
    skill: string,
    prof: string,
    mod: number
  ) => {
    return (
      <tr>
        <td>{getProfString(prof)}</td>
        <td>{ability}</td>
        <td>{skill}</td>
        <td className={getProficientClass(prof)}>{mod}</td>
      </tr>
    )
  };

  return (
    <table className='ability-skills'>
      <thead>
        <tr>
          <th>Prof</th>
          <th>Ability</th>
          <th>Skill</th>
          <th>Mod</th>
        </tr>
      </thead>
      <tbody>
        {getRow('Dex', 'Acrobatics', acrobaticsProf, acrobaticsMod)}
        {getRow('Wis', 'Animal Handling', animalHandlingProf, animalHandlingMod)}
        {getRow('Int', 'Arcana', arcanaProf, arcanaMod)}
        {getRow('Str', 'Athletics', athleticsProf, athleticsMod)}
        {getRow('Cha', 'Deception', deceptionProf, deceptionMod)}
        {getRow('Int', 'History', historyProf, historyMod)}
        {getRow('Wis', 'Insight', insightProf, insightMod)}
        {getRow('Cha', 'Intimidation', intimidationProf, intimidationMod)}
        {getRow('Int', 'Investigation', investigationProf, investigationMod)}
        {getRow('Wis', 'Medicine', medicineProf, medicineMod)}
        {getRow('Int', 'Nature', natureProf, natureMod)}
        {getRow('Wis', 'Perception', perceptionProf, perceptionMod)}
        {getRow('Cha', 'Performance', performanceProf, performanceMod)}
        {getRow('Cha', 'Persuasion', persuasionProf, persuasionMod)}
        {getRow('int', 'Religion', religionProf, religionMod)}
        {getRow('Dex', 'Sleight of Hand', sleightOfHandProf, sleightOfHandMod)}
        {getRow('Dex', 'Stealth', stealthProf, stealthMod)}
        {getRow('Wis', 'Survival', survivalProf, survivalMod)}
      </tbody>
    </table>
  );
};

export { AbilitySkills };
