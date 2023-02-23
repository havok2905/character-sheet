import React, { ReactElement } from 'react';
import {
 ACROBATICS,
 ANIMAL_HANDLING,
 ARCANA,
 ATHLETICS,
 CHA,
 DECEPTION,
 DEX,
 EXP,
 HISTORY,
 INSIGHT,
 INT,
 INTIMIDATION,
 INVESTIGATION,
 MEDICINE,
 NATURE,
 PERCEPTION,
 PERFORMANCE,
 PERSUASION,
 PROF,
 PROFICIENCY_BONUS_BY_LEVEL,
 RELIGION,
 SLEIGHT_OF_HAND,
 STEALTH,
 STR,
 SURVIVAL,
 WIS
} from '../../utilities/GameSystem/constants';
import { calculateSkillModifier } from '../../utilities/GameSystem/calculateSkillModifier';
import { CheckIcon, DoubleCheckIcon } from '../Icons';
import { ICharacter, ICreature } from '../../types/models';
import { ProficiencyType } from '../../utilities/GameSystem/types';
import './_abilitySkills.scss';

interface IAbilitySkillsProps {
  entity?: ICharacter | ICreature
}

const AbilitySkills = ({
  entity
}: IAbilitySkillsProps): ReactElement | null => {
  if (!entity) return null;

  const {
    acrobaticsProf,
    animalHandlingProf,
    arcanaProf,
    athleticsProf,
    charismaScore,
    deceptionProf,
    dexterityScore,
    historyProf,
    insightProf,
    intelligenceScore,
    intimidationProf,
    investigationProf,
    jackOfAllTrades,
    medicineProf,
    natureProf,
    perceptionProf,
    performanceProf,
    persuasionProf,
    religionProf,
    sleightOfHandProf,
    stealthProf,
    strengthScore,
    survivalProf,
    wisdomScore
  } = entity;

  const characterClassLevel = ('characterClassLevel' in entity) ? entity.characterClassLevel : 0;
  const cr = ('cr' in entity) ? entity.cr : '';
  const multiclassClassLevel = ('multiclassClassLevel' in entity) ? entity.multiclassClassLevel : 0;

  const totalLevel = characterClassLevel + multiclassClassLevel;
  const levelToUse = cr ? cr : totalLevel;
  
  const profs: ProficiencyType[] = [EXP, PROF];

  const getProficientClass = (prof: ProficiencyType): string | undefined => {
    return profs.includes(prof) ? 'ability-skills-proficient' : undefined
  };

  const getProfIcon = (prof: ProficiencyType) => {
    if (prof === PROF) {
      return <CheckIcon/>;
    }
    
    if (prof === EXP) {
      return <DoubleCheckIcon/>;
    }

    return null;
  };

  const skills = [
    {
      ability: DEX,
      abilityScore: dexterityScore,
      proficiency: acrobaticsProf,
      skill: ACROBATICS
    },
    {
      ability: WIS,
      abilityScore: wisdomScore,
      proficiency: animalHandlingProf,
      skill: ANIMAL_HANDLING
    },
    {
      ability: INT,
      abilityScore: intelligenceScore,
      proficiency: arcanaProf,
      skill: ARCANA
    },
    {
      ability: STR,
      abilityScore: strengthScore,
      proficiency: athleticsProf,
      skill: ATHLETICS
    },
    {
      ability: CHA,
      abilityScore: charismaScore,
      proficiency: deceptionProf,
      skill: DECEPTION
    },
    {
      ability: INT,
      abilityScore: intelligenceScore,
      proficiency: historyProf,
      skill: HISTORY
    },
    {
      ability: WIS,
      abilityScore: wisdomScore,
      proficiency: insightProf,
      skill: INSIGHT
    },
    {
      ability: CHA,
      abilityScore: charismaScore,
      proficiency: intimidationProf,
      skill: INTIMIDATION
    },
    {
      ability: INT,
      abilityScore: intelligenceScore,
      proficiency: investigationProf,
      skill: INVESTIGATION
    },
    {
      ability: WIS,
      abilityScore: wisdomScore,
      proficiency: medicineProf,
      skill: MEDICINE
    },
    {
      ability: INT,
      abilityScore: intelligenceScore,
      proficiency: natureProf,
      skill: NATURE
    },
    {
      ability: WIS,
      abilityScore: wisdomScore,
      proficiency: perceptionProf,
      skill: PERCEPTION
    },
    {
      ability: CHA,
      abilityScore: charismaScore,
      proficiency: performanceProf,
      skill: PERFORMANCE
    },
    {
      ability: CHA,
      abilityScore: charismaScore,
      proficiency: persuasionProf,
      skill: PERSUASION
    },
    {
      ability: INT,
      abilityScore: intelligenceScore,
      proficiency: religionProf,
      skill: RELIGION
    },
    {
      ability: DEX,
      abilityScore: dexterityScore,
      proficiency: sleightOfHandProf,
      skill: SLEIGHT_OF_HAND
    },
    {
      ability: DEX,
      abilityScore: dexterityScore,
      proficiency: stealthProf,
      skill: STEALTH
    },
    {
      ability: WIS,
      abilityScore: dexterityScore,
      proficiency: survivalProf,
      skill: SURVIVAL
    }
  ];

  const proficiencyBonus = PROFICIENCY_BONUS_BY_LEVEL[levelToUse];

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
        {
          skills.map(skillItem => {
            const {
              ability,
              abilityScore,
              proficiency,
              skill
            } = skillItem;

            return (
              <tr>
                <td className={getProficientClass(proficiency)}>
                  {getProfIcon(proficiency)}
                </td>
                <td>{ability}</td>
                <td>{skill}</td>
                <td className={getProficientClass(proficiency)}>
                  {calculateSkillModifier({
                    abilityScore,
                    bonus: 0,
                    jackOfAllTrades,
                    proficiency,
                    proficiencyBonus
                  }).toString()}
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export { AbilitySkills };
