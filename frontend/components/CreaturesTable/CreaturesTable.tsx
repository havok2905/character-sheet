import React, { ReactElement, useState } from 'react';
import { CREATURE_ROUTE } from '../../app';
import { CreatureCategoryTypes } from '../../types/rules';
import { creatureRow } from '../../utilities/UiHelpers/creatureRow';
import { generatePath } from 'react-router-dom';
import { ICreature } from '../../types/models';
import { ItemWithToken } from '../../components/ItemWithToken';

interface ICreaturesTableProps {
  creatures: ICreature[];
}

const CreaturesTable = ({
  creatures
}: ICreaturesTableProps): ReactElement => {
  const [categorySelection, setCategorySelection] = useState<CreatureCategoryTypes>(CreatureCategoryTypes.UNKNOWN);
  const [nameFilter, setNameFilter] = useState('');
  const [crFilter, setCrFilter] = useState('');

  const getCreatures = (): ICreature[] => {
    let filteredCreatures = creatures;

    if (nameFilter) {
      filteredCreatures = filteredCreatures.filter(creature => {
        return creature.name.includes(nameFilter);
      });
    }

    if (categorySelection) {
      filteredCreatures = filteredCreatures.filter(creature => {
        return creature.creatureCategory === categorySelection;
      });
    }

    if (crFilter) {
      filteredCreatures = filteredCreatures.filter(creature => {
        return creature.cr === crFilter;
      });
    }

    return filteredCreatures;
  };

  const handleNameFilterOnChange = e => {
    setNameFilter(e.target.value);
  };

  const handleCategoryFilterOnChange = e => {
    setCategorySelection(e.target.value);
  };

  const handleCrFilterOnChange = e => {
    setCrFilter(e.target.value);
  };

  return (
    <>
      <form>
        <fieldset>
          <label>Category</label>
          <select onChange={handleCategoryFilterOnChange}>
            <option value=""></option>
            <option value={CreatureCategoryTypes.MONSTER}>{CreatureCategoryTypes.MONSTER}</option>
            <option value={CreatureCategoryTypes.NPC}>{CreatureCategoryTypes.NPC}</option>
          </select>
          <label>Name</label>
          <input onChange={handleNameFilterOnChange} type="text"/>
          <label>CR</label>
          <input onChange={handleCrFilterOnChange} type="text"/>
        </fieldset>
      </form>
      <ul className="bulletless-list">
        {
          getCreatures().map(creature => {
            const {
              id,
              imageUrl,
              name
            } = creature;

            return (
              <li>
                {
                  <ItemWithToken
                    description={creatureRow(creature)}
                    heading={name}
                    imageAltText={`${name} token`}
                    imageUrl={imageUrl}
                    itemPath={generatePath(CREATURE_ROUTE, { id })}
                  />
                }
              </li>
            );
          })
        }
      </ul>
    </>
  );
};

export { CreaturesTable };
