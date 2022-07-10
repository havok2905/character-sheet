import React, { ReactElement, useState } from 'react';
import { ISpell } from '../../types/models';
import { SpellSchoolsTypes } from '../../types/rules';

interface ISpellsTableProps {
  spells: ISpell[];
}

const SpellsTable = ({
  spells
}: ISpellsTableProps): ReactElement => {
  const [nameFilter, setNameFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState(0);
  const [schoolSelection, setSchoolSelection] = useState('');

  const getSpells = (): ISpell[] => {
    let filteredSpells = spells;

    if (nameFilter) {
      filteredSpells = filteredSpells.filter(spell => {
        return spell.name.includes(nameFilter);
      });
    }

    if (levelFilter) {
      filteredSpells = filteredSpells.filter(spell => {
        return spell.level === levelFilter;
      });
    }

    if (schoolSelection) {
      filteredSpells = filteredSpells.filter(spell => {
        return spell.school === schoolSelection;
      });
    }

    return filteredSpells;
  };

  const handleNameFilterOnChange = e => {
    setNameFilter(e.target.value);
  }

  const handleLevelFilterOnChange = e => {
    setLevelFilter(e.target.value);
  }

  const handleSchoolFilterOnChange = e => {
    setSchoolSelection(e.target.value);
  }

  return (
    <>
      <form>
        <fieldset>
          <label>Name</label>
          <input onChange={handleNameFilterOnChange} type="text"/>
          <label>Level</label>
          <input onChange={handleLevelFilterOnChange} type="text"/>
          <label>School</label>
          <select onChange={handleSchoolFilterOnChange}>
            <option></option>
            <option value={SpellSchoolsTypes.ABJURATION}>{SpellSchoolsTypes.ABJURATION}</option>
            <option value={SpellSchoolsTypes.CONJURATION}>{SpellSchoolsTypes.CONJURATION}</option>
            <option value={SpellSchoolsTypes.DIVINATION}>{SpellSchoolsTypes.DIVINATION}</option>
            <option value={SpellSchoolsTypes.ENCHANTMENT}>{SpellSchoolsTypes.ENCHANTMENT}</option>
            <option value={SpellSchoolsTypes.EVOCATION}>{SpellSchoolsTypes.EVOCATION}</option>
            <option value={SpellSchoolsTypes.ILLUSION}>{SpellSchoolsTypes.ILLUSION}</option>
            <option value={SpellSchoolsTypes.NECROMANCY}>{SpellSchoolsTypes.NECROMANCY}</option>
            <option value={SpellSchoolsTypes.TRANSMUTATION}>{SpellSchoolsTypes.TRANSMUTATION}</option>
          </select>
        </fieldset>
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Level</th>
            <th>School</th>
            <th>Concentration</th>
            <th>Ritual</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            getSpells().map(spell => {
              const {
                concentration,
                id,
                level,
                name,
                ritual,
                school
              } = spell;

              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{level}</td>
                  <td>{school}</td>
                  <td>{concentration ? 'C' : ''}</td>
                  <td>{ritual ? 'R' : ''}</td>
                  <td>
                    <a href={`/spells/${id}`}>View</a>
                    <a href={`/spells/${id}/edit`}>Edit</a>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
};

export { SpellsTable };
