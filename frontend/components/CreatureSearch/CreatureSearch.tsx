import React, {FC, useState} from 'react';
import classNames from 'classnames';
import { generatePath, Link } from 'react-router-dom';
import { ICreature } from '../../types/models';
import { CREATURE_ROUTE } from '../../app';
import { PlusIcon, TrashIcon } from '../Icons';
import './CreatureSearch.scss';
 
interface ICreatureSearchProps {
  creatureIds: string[];
  creatures: ICreature[];
  handleCreatureIdsUpdate: (creatureIds: string[]) => void;
}

export const CreatureSearch: FC<ICreatureSearchProps> = ({
  creatureIds,
  creatures,
  handleCreatureIdsUpdate
}) => {
  const [nameFilter, setNameFilter] = useState('');

  const handleNameFilterOnChange = e => {
    setNameFilter(e.target.value);
  }

  const onCreatureAdd = (id: string) => {
    const data = [...creatureIds, id];
    handleCreatureIdsUpdate(data);
  };

  const onCreatureRemove = (id: string) => {
    const data = [...creatureIds].filter(creatureId => creatureId !== id);
    handleCreatureIdsUpdate(data);
  };

  const getCreatureLink = (creature: ICreature, className?: string) => {
    return (
      <Link
        className={className}
        target='_blank'
        to={generatePath(CREATURE_ROUTE, { id: creature.id ?? '' })}>
        {creature.name}
      </Link>
    )
  };

  const getCreatureAddRow = (creature: ICreature) => {
    const creatureAssociated = creatureIds.includes(String(creature.id ?? ''));

    const classList = {
      'creature-search-row': true,
      'creature-search-row-known': creatureAssociated
    };

    return (
      <div className="creature-search-row">
        <button
          disabled={creatureAssociated}
          onClick={e => {
            e.preventDefault()
            onCreatureAdd(String(creature.id))
          }}>
          <span className="spell-search-row-add">
            <PlusIcon/>              
          </span>
        </button>
        {' '}
        {getCreatureLink(creature, classNames(classList))}
      </div>
    );
  };

  const getCreatureRemoveRow = (creature: ICreature) => {
    return (
      <div className="creature-search-row">
        <button
          onClick={e => {
            e.preventDefault()
            onCreatureRemove(String(creature.id))
          }}>
          <span className="creature-search-row-delete">
            <TrashIcon/>
          </span>
        </button>
        {' '}
        {getCreatureLink(creature)}
      </div>
    );
  };

  const sortCreatures = (a: ICreature, b: ICreature): number => {
    if (a.cr === b.cr) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    }

    if (a.cr > b.cr) return 1;
    if (a.cr < b.cr) return -1;
    return 0;
  } 
  
  const searchedCreatures = !nameFilter ? [] : creatures
    .filter(creature => {
      return creature.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase());
    })
    .sort(sortCreatures);

  const associatedCreatures = creatures
    .filter(creature => {
      return creatureIds.includes(String(creature.id ?? ''))
    })
    .sort(sortCreatures);

  return (
    <div>
      <fieldset>
        <label>Search Creature by Name</label>
        <input
          onChange={handleNameFilterOnChange}
          placeholder="Adult Red Dragon"
          type="text"/>
      </fieldset>
      {
        searchedCreatures.map(creature => getCreatureAddRow(creature))
      }
      <p>
        <strong>
          Associated Creatures
        </strong>
      </p>
      {
        associatedCreatures.map(creature => getCreatureRemoveRow(creature))
      }
    </div>
  );
};
