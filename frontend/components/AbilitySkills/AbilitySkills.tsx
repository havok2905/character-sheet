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
  
  const getProficientClass = (prof: string): string | undefined => {
    const profs = ['exp', 'prof'];
    return profs.includes(prof) ? 'ability-skills-proficient' : undefined
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
        <tr>
          <td>{acrobaticsProf}</td>
          <td>Dex</td>
          <td>Acrobatics</td>
          <td className={getProficientClass(acrobaticsProf)}>{acrobaticsMod}</td>
        </tr>
        <tr>
          <td>{animalHandlingProf}</td>
          <td>Wis</td>
          <td>Animal Handling</td>
          <td className={getProficientClass(animalHandlingProf)}>{animalHandlingMod}</td>
        </tr>
        <tr>
          <td>{arcanaProf}</td>
          <td>Int</td>
          <td>Arcana</td>
          <td className={getProficientClass(arcanaProf)}>{arcanaMod}</td>
        </tr>
        <tr>
          <td>{athleticsProf}</td>
          <td>Str</td>
          <td>Athletics</td>
          <td className={getProficientClass(athleticsProf)}>{athleticsMod}</td>
        </tr>
        <tr>
          <td>{deceptionProf}</td>
          <td>Cha</td>
          <td>Deception</td>
          <td className={getProficientClass(deceptionProf)}>{deceptionMod}</td>
        </tr>
        <tr>
          <td>{historyProf}</td>
          <td>Int</td>
          <td>History</td>
          <td className={getProficientClass(historyProf)}>{historyMod}</td>
        </tr>
        <tr>
          <td>{insightProf}</td>
          <td>Wis</td>
          <td>Insight</td>
          <td className={getProficientClass(insightProf)}>{insightMod}</td>
        </tr>
        <tr>
          <td>{intimidationProf}</td>
          <td>Cha</td>
          <td>Intimidation</td>
          <td className={getProficientClass(intimidationProf)}>{intimidationMod}</td>
        </tr>
        <tr>
          <td>{investigationProf}</td>
          <td>Int</td>
          <td>Investigation</td>
          <td className={getProficientClass(investigationProf)}>{investigationMod}</td>
        </tr>
        <tr>
          <td>{medicineProf}</td>
          <td>Wis</td>
          <td>Medicine</td>
          <td className={getProficientClass(medicineProf)}>{medicineMod}</td>
        </tr>
        <tr>
          <td>{natureProf}</td>
          <td>Int</td>
          <td>Nature</td>
          <td className={getProficientClass(natureProf)}>{natureMod}</td>
        </tr>
        <tr>
          <td>{perceptionProf}</td>
          <td>Wis</td>
          <td>Perception</td>
          <td className={getProficientClass(perceptionProf)}>{perceptionMod}</td>
        </tr>
        <tr>
          <td>{performanceProf}</td>
          <td>Cha</td>
          <td>Performance</td>
          <td className={getProficientClass(performanceProf)}>{performanceMod}</td>
        </tr>
        <tr>
          <td>{perceptionProf}</td>
          <td>Cha</td>
          <td>Persuasion</td>
          <td className={getProficientClass(persuasionProf)}>{persuasionMod}</td>
        </tr>
        <tr>
          <td>{religionProf}</td>
          <td>int</td>
          <td>Religion</td>
          <td className={getProficientClass(religionProf)}>{religionMod}</td>
        </tr>
        <tr>
          <td>{sleightOfHandProf}</td>
          <td>Dex</td>
          <td>Sleight of Hand</td>
          <td className={getProficientClass(sleightOfHandProf)}>{sleightOfHandMod}</td>
        </tr>
        <tr>
          <td>{stealthProf}</td>
          <td>Dex</td>
          <td>Stealth</td>
          <td className={getProficientClass(stealthProf)}>{stealthMod}</td>
        </tr>
        <tr>
          <td>{survivalProf}</td>
          <td>Wis</td>
          <td>Survival</td>
          <td className={getProficientClass(survivalProf)}>{survivalMod}</td>
        </tr>
      </tbody>
    </table>
  );
};

export { AbilitySkills };
