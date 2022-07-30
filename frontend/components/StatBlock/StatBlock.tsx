import React, { ReactElement } from 'react';
import { ICreature, ICharacter } from '../../types/models';
import './_statBlock.scss';

interface IStatBlockProps {
  entity?: ICharacter | ICreature
}

const StatBlock = ({
  entity
}: IStatBlockProps): ReactElement | null => {
  if (!entity) return null;

  const getProficientClass = (prof: string): string | undefined => {
    const profs = ['exp', 'prof'];
    return profs.includes(prof) ? 'stat-block-proficient': undefined
  };

  const {
    charismaMod,
    charismaSave,
    charismaScore,
    constitutionMod,
    constitutionSave,
    constitutionScore,
    dexterityMod,
    dexteritySave,
    dexterityScore,
    intelligenceMod,
    intelligenceSave,
    intelligenceScore,
    strengthMod,
    strengthSave,
    strengthScore,
    wisdomMod,
    wisdomSave,
    wisdomScore
  } = entity;

  const strengthProf = ('strengthProf' in entity) ? entity.strengthProf : '';
  const dexterityProf = ('dexterityProf' in entity) ? entity.dexterityProf : '';
  const constitutionProf = ('constitutionProf' in entity) ? entity.constitutionProf : '';
  const intelligenceProf = ('intelligenceProf' in entity) ? entity.intelligenceProf : '';
  const wisdomProf = ('wisdomProf' in entity) ? entity.wisdomProf : ''
  const charismaProf = ('charismaProf' in entity) ? entity.charismaProf : '';

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
          <td>{strengthMod}</td>
          <td>{dexterityMod}</td>
          <td>{constitutionMod}</td>
          <td>{intelligenceMod}</td>
          <td>{wisdomMod}</td>
          <td>{charismaMod}</td>
        </tr>
        <tr>
          <td>Save</td>
          <td className={getProficientClass(strengthProf)}>{strengthSave}</td>
          <td className={getProficientClass(dexterityProf)}>{dexteritySave}</td>
          <td className={getProficientClass(constitutionProf)}>{constitutionSave}</td>
          <td className={getProficientClass(intelligenceProf)}>{intelligenceSave}</td>
          <td className={getProficientClass(wisdomProf)}>{wisdomSave}</td>
          <td className={getProficientClass(charismaProf)}>{charismaSave}</td>
        </tr>
      </tbody>
    </table>
  );
};

export { StatBlock };
