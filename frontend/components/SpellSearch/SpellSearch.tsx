import React, {FC, useState} from 'react';
import classNames from 'classnames';
import { generatePath, Link } from 'react-router-dom';
import { ISpell } from '../../types/models';
import { SPELL_ROUTE } from '../../app';
import { PlusIcon, TrashIcon } from '../Icons';
import './SpellSearch.scss';
 
interface ISpellSearchProps {
  handleSpellIdsUpdate: (spellIds: string[]) => void;
  spellIds: string[];
  spells: ISpell[];
}

export const SpellSearch: FC<ISpellSearchProps> = ({
  handleSpellIdsUpdate,
  spellIds,
  spells
}) => {
  const [nameFilter, setNameFilter] = useState('');

  const handleNameFilterOnChange = e => {
    setNameFilter(e.target.value);
  }

  const onSpellAdd = (id: string) => {
    const data = [...spellIds, id];
    handleSpellIdsUpdate(data);
  };

  const onSpellRemove = (id: string) => {
    const data = [...spellIds].filter(spellId => spellId !== id);
    handleSpellIdsUpdate(data);
  };

  const getSpellLink = (spell: ISpell, className?: string) => {
    return (
      <Link
        className={className}
        target='_blank'
        to={generatePath(SPELL_ROUTE, { id: spell.id ?? '' })}>
        ( Level {spell.level} )
        {' '}
        {spell.name}
      </Link>
    )
  };

  const getSpellAddRow = (spell: ISpell) => {
    const spellKnown = spellIds.includes(String(spell.id ?? ''));

    const classList = {
      'spell-search-row': true,
      'spell-search-row-known': spellKnown
    };

    return (
      <div className="spell-search-row">
        <button
          disabled={spellKnown}
          onClick={e => {
            e.preventDefault()
            onSpellAdd(String(spell.id))
          }}>
          <span className="spell-search-row-add">
            <PlusIcon/>              
          </span>
        </button>
        {' '}
        {getSpellLink(spell, classNames(classList))}
      </div>
    );
  };

  const getSpellRemoveRow = (spell: ISpell) => {
    return (
      <div className="spell-search-row">
        <button
          onClick={e => {
            e.preventDefault()
            onSpellRemove(String(spell.id))
          }}>
          <span className="spell-search-row-delete">
            <TrashIcon/>
          </span>
        </button>
        {' '}
        {getSpellLink(spell)}
      </div>
    );
  };

  const sortSpells = (a: ISpell, b: ISpell): number => {
    if (a.level === b.level) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    }

    if (a.level > b.level) return 1;
    if (a.level < b.level) return -1;
    return 0;
  } 
  
  const searchedSpells = !nameFilter ? [] : spells
    .filter(spell => {
      return spell.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase());
    })
    .sort(sortSpells);

  const knownSpells = spells
    .filter(spell => {
      return spellIds.includes(String(spell.id ?? ''))
    })
    .sort(sortSpells);

  return (
    <div>
      <fieldset>
        <label>Search Spell by Name</label>
        <input
          onChange={handleNameFilterOnChange}
          placeholder="Fireball"
          type="text"/>
      </fieldset>
      {
        searchedSpells.map(spell => getSpellAddRow(spell))
      }
      <p>
        <strong>
          Known Spells
        </strong>
      </p>
      {
        knownSpells.map(spell => getSpellRemoveRow(spell))
      }
    </div>
  );
};
