import React, { ReactElement, useEffect, useState } from 'react';
import { IMagicItem } from '../../types/models';

interface IAssociatedMagicItemsFormProps {
  entityMagicItems: IMagicItem[];
  handleSubmit: (magicItemIds: string[]) => void;
  magicItems: IMagicItem[];
}

const AssociatedMagicItemsForm = ({
  entityMagicItems,
  handleSubmit,
  magicItems
}: IAssociatedMagicItemsFormProps): ReactElement => {
  const [nameFilter, setNameFilter] = useState('');
  const [magicItemIds, setMagicItemIds] = useState<string[]>([]);

  useEffect(() => {
    const entityMagicItemIds = entityMagicItems.map(magicItem => magicItem.id as string).filter(Boolean);
    setMagicItemIds(entityMagicItemIds);
  }, []);

  const onClick = e => {
    e.preventDefault();
    handleSubmit(magicItemIds);
  }

  const getMagicItems = (): IMagicItem[] => {
    let filteredMagicItems = magicItems;

    if (nameFilter) {
      filteredMagicItems = filteredMagicItems.filter(magicItem => {
        return magicItem.name.includes(nameFilter);
      });
    }

    return filteredMagicItems;
  };

  const handleNameFilterOnChange = e => {
    setNameFilter(e.target.value);
  }

  const handleMagicItemToggle = (id: string) => {
    if (magicItemIds.includes(id)) {
      const data = [...magicItemIds].filter(magicItemId => magicItemId !== id);
      setMagicItemIds(data);
    } else {
      const data = [...magicItemIds, id];
      setMagicItemIds(data);
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
            getMagicItems().map(magicItem => {
              const { id, name } = magicItem;

              if (!id) return;
              
              const checked = magicItemIds.includes(id);

              return (
                <tr>
                  <td>{name}</td>
                  <td><a href={`/magic_items/${id}`}>View</a></td>
                  <td>
                    <input
                      checked={checked}
                      onChange={() => handleMagicItemToggle(id)}
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

export { AssociatedMagicItemsForm };
