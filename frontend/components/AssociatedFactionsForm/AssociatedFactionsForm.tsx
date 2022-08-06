import React, { ReactElement, useState } from 'react';
import { FACTION_ROUTE } from '../../app';
import { generatePath, Link } from 'react-router-dom';
import { IFaction } from '../../types/models';

interface IAssociatedFactionsForm {
  buttonLabel: string,
  handleSubmit: (factionIds: string[]) => void;
  factionIds: string[];
  factions: IFaction[];
}

const AssociatedFactionsForm = ({
  buttonLabel,
  factions,
  factionIds,
  handleSubmit
}: IAssociatedFactionsForm): ReactElement => {
  const [nameFilter, setNameFilter] = useState('');
  const [updatedFactionIds, setUpdatedFactionIds] = useState([...factionIds]);

  const getFactions = (): IFaction[] => {
    let filteredFactions = factions;

    if (nameFilter) {
      filteredFactions = filteredFactions.filter(faction => {
        return faction.name.includes(nameFilter);
      });
    }

    return filteredFactions;
  };

  const handleNameFilterOnChange = e => setNameFilter(e.target.value);

  const handleFactionToggle = (id: string) => {
    if (updatedFactionIds.includes(id)) {
      const data = [...updatedFactionIds].filter(factionId => factionId !== id);
      setUpdatedFactionIds(data);
    } else {
      const data = [...updatedFactionIds, id];
      setUpdatedFactionIds(data);
    }
  };

  return (
    <>
      <h2>Factions</h2>
      <form>
        <fieldset>
          <label>Name</label>
          <input onChange={handleNameFilterOnChange} type="text"/>
        </fieldset>
      </form>
      <button onClick={() => handleSubmit(updatedFactionIds)}>
        {buttonLabel}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>View</th>
            <th>Include</th>
          </tr>
        </thead>
        <tbody>
          {
            getFactions().map(faction => {
              const { id, name } = faction;

              const checked = updatedFactionIds.includes(String(id));

              return (
                <tr>
                  <td>{name}</td>
                  <td>
                    <Link to={generatePath(FACTION_ROUTE, { id })}>
                      View
                    </Link>
                  </td>
                  <td>
                    <input
                      checked={checked}
                      onChange={() => handleFactionToggle(String(id))}
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

export { AssociatedFactionsForm };
