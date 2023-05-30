import React, { FC } from 'react';
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

const SpellListByLevel: FC<ISpellListByLevelProps> = ({
  label,
  spellLevel,
  spellSlots,
  spells
}) => {
  return (
    <>
      <h4>
        {label}
        {' '}
        {!!spellSlots && `( ${spellSlots} )`}
      </h4>
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
