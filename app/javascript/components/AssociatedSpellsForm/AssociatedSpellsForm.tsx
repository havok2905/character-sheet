import React, { ReactElement, useState } from 'react';
import { ISpell } from '../../types/models';
import { SpellSchoolsTypes } from '../../types/rules';

interface IAssociatedSpellsFormProps {
  buttonLabel: string,
  handleSubmit: (spellIds: string[]) => void;
  spellIds: string[];
  spells: ISpell[];
}

const AssociatedSpellsForm = ({
  buttonLabel,
  handleSubmit,
  spellIds,
  spells
}: IAssociatedSpellsFormProps): ReactElement => {
  const [nameFilter, setNameFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState(0);
  const [schoolSelection, setSchoolSelection] = useState('');
  const [updatedSpellIds, setUpdatedSpellIds] = useState([...spellIds]);

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

  const handleNameFilterOnChange = e => setNameFilter(e.target.value);
  const handleLevelFilterOnChange = e => setLevelFilter(e.target.value);
  const handleSchoolFilterOnChange = e => setSchoolSelection(e.target.value);

  const handleSpellToggle = (id: string) => {
    if (updatedSpellIds.includes(id)) {
      const data = [...updatedSpellIds].filter(spellId => spellId !== id);
      setUpdatedSpellIds(data);
    } else {
      const data = [...updatedSpellIds, id];
      setUpdatedSpellIds(data);
    }
  };

  return (
    <>
      <h2>Spells</h2>
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
      <button onClick={() => handleSubmit(updatedSpellIds)}>
        {buttonLabel}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>School</th>
            <th>View</th>
            <th>Include</th>
          </tr>
        </thead>
        <tbody>
          {
            getSpells().map(spell => {
              const { id, name, level, school } = spell;
              
              const checked = updatedSpellIds.includes(String(id));

              return (
                <tr>
                  <td>{name}</td>
                  <td>{level}</td>
                  <td>{school}</td>
                  <td><a href={`/spells/${id}`}>View</a></td>
                  <td>
                    <input
                      checked={checked}
                      onChange={() => handleSpellToggle(String(id))}
                      type="checkbox"
                      value={id}/>
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

export { AssociatedSpellsForm };
