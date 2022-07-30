import React, { ReactElement } from 'react';
import { getSpellsByLevel } from '../../utilities/UiHelpers/getSpellsByLevel';
import { ISpell } from '../../types/models';
import { SpellCard } from '../../components/SpellCard';
import { ToggleItem } from '../../components/ToggleItem';

interface ISpellListByLevelProps {
  label: string,
  spellLevel: number,
  spellSlots: number,
  spells: ISpell[]
}

const SpellListByLevel = ({
  label,
  spellLevel,
  spellSlots,
  spells
}: ISpellListByLevelProps): ReactElement => {
  return (
    <>
      <p>
        <strong>
          {label}
          {' '}
          {!!spellSlots && `( ${spellSlots} )`}
        </strong>
      </p>
      {
        getSpellsByLevel(spellLevel, spells).map(spell => {
          const {name} = spell;
          return (
            <ToggleItem heading={name}>
              <SpellCard spell={spell}/>
            </ToggleItem>
          );
        })
      }
    </>
  )
};

export { SpellListByLevel };
