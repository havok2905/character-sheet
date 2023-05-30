import React, { FC, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { IMagicItem } from '../../types/models';
import { MAGIC_ITEM_ROUTE } from '../../app';

interface IAssociatedMagicItemsFormProps {
  buttonLabel: string,
  handleSubmit: (magicItemIds: string[]) => void;
  magicItemIds: string[];
  magicItems: IMagicItem[];
}

const AssociatedMagicItemsForm: FC<IAssociatedMagicItemsFormProps> = ({
  buttonLabel,
  handleSubmit,
  magicItems,
  magicItemIds
}) => {
  const [nameFilter, setNameFilter] = useState('');
  const [updatedMagicItemIds, setUpdatedMagicItemIds] = useState([...magicItemIds]);

  const getMagicItems = (): IMagicItem[] => {
    let filteredMagicItems = magicItems;

    if (nameFilter) {
      filteredMagicItems = filteredMagicItems.filter(magicItem => {
        return magicItem.name.includes(nameFilter);
      });
    }

    return filteredMagicItems;
  };

  const handleNameFilterOnChange = e => setNameFilter(e.target.value);

  const handleMagicItemToggle = (id: string) => {
    if (updatedMagicItemIds.includes(id)) {
      const data = [...updatedMagicItemIds].filter(magicItemId => magicItemId !== id);
      setUpdatedMagicItemIds(data);
    } else {
      const data = [...updatedMagicItemIds, id];
      setUpdatedMagicItemIds(data);
    }
  };

  return (
    <>
      <h2>Magic Items</h2>
      <form>
        <fieldset>
          <label>Name</label>
          <input onChange={handleNameFilterOnChange} type="text"/>
        </fieldset>
      </form>
      <button
        className="button button-constructive"
        onClick={() => handleSubmit(updatedMagicItemIds)}>
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
            getMagicItems().map(magicItem => {
              const { id, name } = magicItem;
              
              const checked = updatedMagicItemIds.includes(String(id));

              return (
                <tr>
                  <td>{name}</td>
                  <td>
                    <Link to={generatePath(MAGIC_ITEM_ROUTE, { id })}>
                      View
                    </Link>
                  </td>
                  <td>
                    <input
                      checked={checked}
                      onChange={() => handleMagicItemToggle(String(id))}
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

export { AssociatedMagicItemsForm };
