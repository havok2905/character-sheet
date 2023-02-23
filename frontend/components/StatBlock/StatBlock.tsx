import React, { ReactElement } from 'react';
import { calculateAbilityModifier } from '../../utilities/GameSystem/calculateAbilityModifier';
import { calculateSavingThrowModifier } from '../../utilities/GameSystem/calculateSavingThrowModifier';
import { EXP, PROF, PROFICIENCY_BONUS_BY_LEVEL } from '../../utilities/GameSystem/constants';
import { ICreature, ICharacter } from '../../types/models';
import { ProficiencyType } from '../../utilities/GameSystem/types';
import './_statBlock.scss';

interface IStatBlockProps {
  entity?: ICharacter | ICreature
}

const StatBlock = ({
  entity
}: IStatBlockProps): ReactElement | null => {
  if (!entity) return null;

  const getProficientClass = (prof: ProficiencyType): string | undefined => {
    const profs: ProficiencyType[] = [EXP, PROF];
    return profs.includes(prof) ? 'stat-block-proficient': undefined
  };

  const {
    charismaScore,
    constitutionScore,
    dexterityScore,
    intelligenceScore,
    strengthScore,
    wisdomScore
  } = entity;

  const strengthProf = ('strengthProf' in entity) ? entity.strengthProf : '';
  const dexterityProf = ('dexterityProf' in entity) ? entity.dexterityProf : '';
  const constitutionProf = ('constitutionProf' in entity) ? entity.constitutionProf : '';
  const intelligenceProf = ('intelligenceProf' in entity) ? entity.intelligenceProf : '';
  const wisdomProf = ('wisdomProf' in entity) ? entity.wisdomProf : ''
  const charismaProf = ('charismaProf' in entity) ? entity.charismaProf : '';

  const cr = ('cr' in entity) ? entity.cr : '';
  const characterClassLevel = ('characterClassLevel' in entity) ? entity.characterClassLevel : 0;
  const multiclassClassLevel = ('multiclassClassLevel' in entity) ? entity.multiclassClassLevel : 0;
  
  const totalLevel = characterClassLevel + multiclassClassLevel;
  const pbKey = cr || (totalLevel).toString();

  const proficiencyBonus = PROFICIENCY_BONUS_BY_LEVEL[pbKey] ?? 0;
  
  return (
    <table className='stat-block'>
      <thead>
        <tr>
          <th></th>
          <th>STR</th>
          <th>DEX</th>
          <th>CON</th>
          <th>INT</th>
          <th>WIS</th>
          <th>CHA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Score</td>
          <td>{strengthScore}</td>
          <td>{dexterityScore}</td>
          <td>{constitutionScore}</td>
          <td>{intelligenceScore}</td>
          <td>{wisdomScore}</td>
          <td>{charismaScore}</td>
        </tr>
        <tr>
          <td>Mod</td>
          <td>
            {
              calculateAbilityModifier({
                abilityScore: strengthScore,
                bonus: 0
              })
            }
          </td>
          <td>
            {
              calculateAbilityModifier({
                abilityScore: dexterityScore,
                bonus: 0
              })
            }
          </td>
          <td>
            {
              calculateAbilityModifier({
                abilityScore: constitutionScore,
                bonus: 0
              })
            }
          </td>
          <td>
            {
              calculateAbilityModifier({
                abilityScore: intelligenceScore,
                bonus: 0
              })
            }
          </td>
          <td>
            {
              calculateAbilityModifier({
                abilityScore: wisdomScore,
                bonus: 0
              })
            }
          </td>
          <td>
            {
              calculateAbilityModifier({
                abilityScore: charismaScore,
                bonus: 0
              })
            }
          </td>
        </tr>
        <tr>
          <td>Save</td>
          <td className={getProficientClass(strengthProf)}>
            {
              calculateSavingThrowModifier({
                abilityScore: strengthScore,
                bonus: 0,
                proficiency: strengthProf,
                proficiencyBonus,
              })
            }
          </td>
          <td className={getProficientClass(dexterityProf)}>
            {
              calculateSavingThrowModifier({
                abilityScore: dexterityScore,
                bonus: 0,
                proficiency: dexterityProf,
                proficiencyBonus,
              })
            }
          </td>
          <td className={getProficientClass(constitutionProf)}>
            {
              calculateSavingThrowModifier({
                abilityScore: constitutionScore,
                bonus: 0,
                proficiency: constitutionProf,
                proficiencyBonus,
              })
            }
          </td>
          <td className={getProficientClass(intelligenceProf)}>
            {
              calculateSavingThrowModifier({
                abilityScore: intelligenceScore,
                bonus: 0,
                proficiency: intelligenceProf,
                proficiencyBonus,
              })
            }
          </td>
          <td className={getProficientClass(wisdomProf)}>
            {
              calculateSavingThrowModifier({
                abilityScore: wisdomScore,
                bonus: 0,
                proficiency: wisdomProf,
                proficiencyBonus,
              })
            }
          </td>
          <td className={getProficientClass(charismaProf)}>
            {
              calculateSavingThrowModifier({
                abilityScore: charismaScore,
                bonus: 0,
                proficiency: charismaProf,
                proficiencyBonus,
              })
            }
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { StatBlock };
