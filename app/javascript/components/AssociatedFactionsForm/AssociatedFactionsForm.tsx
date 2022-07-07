import React, { ReactElement, useEffect, useState } from 'react';
import { IFaction } from '../../types/models';

interface IAssociatedFactionsFormProps {
  entityFactions: IFaction[];
  factions: IFaction[];
  handleSubmit: (factionIds: string[]) => void;
}

const AssociatedFactionsForm = ({
  entityFactions,
  factions,
  handleSubmit
}: IAssociatedFactionsFormProps): ReactElement => {
  const [nameFilter, setNameFilter] = useState('');
  const [factionIds, setFactionIds] = useState<string[]>([]);

  useEffect(() => {
    const entityFactionsIds = entityFactions.map(faction => faction.id as string).filter(Boolean);
    setFactionIds(entityFactionsIds);
  }, []);

  const onClick = e => {
    e.preventDefault();
    handleSubmit(factionIds);
  }

  const getFactions = (): IFaction[] => {
    let filteredFactions = factions;

    if (nameFilter) {
      filteredFactions = filteredFactions.filter(faction => {
        return faction.name.includes(nameFilter);
      });
    }

    return filteredFactions;
  };

  const handleNameFilterOnChange = e => {
    setNameFilter(e.target.value);
  }

  const handleFactionToggle = (id: string) => {
    if (factionIds.includes(id)) {
      const data = [...factionIds].filter(factionId => factionId !== id);
      setFactionIds(data);
    } else {
      const data = [...factionIds, id];
      setFactionIds(data);
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <label>Name</label>
          <input onChange={handleNameFilterOnChange} type="text"/>
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
            <th>View</th>
            <th>Include</th>
          </tr>
        </thead>
        <tbody>
          {
            getFactions().map(faction => {
              const { id, name } = faction;

              if (!id) return;
              
              const checked = factionIds.includes(id);

              return (
                <tr>
                  <td>{name}</td>
                  <td><a href={`/factions/${id}`}>View</a></td>
                  <td>
                    <input
                      checked={checked}
                      onChange={() => handleFactionToggle(id)}
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

export { AssociatedFactionsForm };
