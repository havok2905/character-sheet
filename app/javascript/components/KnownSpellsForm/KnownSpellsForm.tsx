import React, { ReactElement, useEffect, useState } from 'react';
import { ISpell } from '../../types/models';
import { SpellSchoolsTypes } from '../../types/rules';

interface IKnownSpellsFormProps {
  entitySpells: ISpell[];
  handleSubmit: (spellIds: string[]) => void;
  spells: ISpell[];
}

const KnownSpellsForm = ({
  entitySpells,
  handleSubmit,
  spells
}: IKnownSpellsFormProps): ReactElement => {
  const [nameFilter, setNameFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState(0);
  const [schoolSelection, setSchoolSelection] = useState('');
  const [spellIds, setSpellIds] = useState<string[]>([]);

  useEffect(() => {
    const entitySpellIds = entitySpells.map(spell => spell.id as string).filter(Boolean);
    setSpellIds(entitySpellIds);
  }, []);

  const onClick = e => {
    e.preventDefault();
    handleSubmit(spellIds);
  }

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

  const handleSpellToggle = (id: string) => {
    if (spellIds.includes(id)) {
      const data = [...spellIds].filter(spellId => spellId !== id);
      setSpellIds(data);
    } else {
      const data = [...spellIds, id];
      setSpellIds(data);
    }
  };

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
      <button
        className="button button-constructive"
        onClick={onClick}>
        Save
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

              if (!id) return;
              
              const checked = spellIds.includes(id);

              return (
                <tr>
                  <td>{name}</td>
                  <td>{level}</td>
                  <td>{school}</td>
                  <td><a href={`/spells/${id}`}>View</a></td>
                  <td>
                    <input
                      checked={checked}
                      onChange={() => handleSpellToggle(id)}
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
  )
};

export { KnownSpellsForm };
