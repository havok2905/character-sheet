import React, { ReactElement, useState } from 'react';
import { CREATURE_ROUTE } from '../../app';
import { generatePath, Link } from 'react-router-dom';
import { ICreature } from '../../types/models';

interface IAssociatedCreaturesForm {
  buttonLabel: string,
  handleSubmit: (creatureIds: string[]) => void;
  creatureIds: string[];
  creatures: ICreature[];
}

const AssociatedCreaturesForm = ({
  buttonLabel,
  creatures,
  creatureIds,
  handleSubmit
}: IAssociatedCreaturesForm): ReactElement => {
  const [nameFilter, setNameFilter] = useState('');
  const [updatedCreatureIds, setUpdatedCreatureIds] = useState([...creatureIds]);

  const getCreatures = (): ICreature[] => {
    let filteredCreatures = creatures;

    if (nameFilter) {
      filteredCreatures = filteredCreatures.filter(creature => {
        return creature.name.includes(nameFilter);
      });
    }

    return filteredCreatures;
  };

  const handleNameFilterOnChange = e => setNameFilter(e.target.value);

  const handleCreatureToggle = (id: string) => {
    if (updatedCreatureIds.includes(id)) {
      const data = [...updatedCreatureIds].filter(creatureId => creatureId !== id);
      setUpdatedCreatureIds(data);
    } else {
      const data = [...updatedCreatureIds, id];
      setUpdatedCreatureIds(data);
    }
  };

  return (
    <>
      <h2>Creatures</h2>
      <form>
        <fieldset>
          <label>Name</label>
          <input onChange={handleNameFilterOnChange} type="text"/>
        </fieldset>
      </form>
      <button
        className="button button-green"
        onClick={() => handleSubmit(updatedCreatureIds)}>
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
            getCreatures().map(creature => {
              const { id, name } = creature;

              const checked = updatedCreatureIds.includes(String(id));

              return (
                <tr>
                  <td>{name}</td>
                  <td>
                    <Link to={generatePath(CREATURE_ROUTE, { id })}>
                      View
                    </Link>
                  </td>
                  <td>
                    <input
                      checked={checked}
                      onChange={() => handleCreatureToggle(String(id))}
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

export { AssociatedCreaturesForm };
