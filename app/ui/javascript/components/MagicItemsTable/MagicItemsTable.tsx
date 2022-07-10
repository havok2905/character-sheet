import React, { ReactElement, useState } from 'react';
import { IMagicItem } from '../../types/models';
import { ItemCategoryTypes, ItemRarityTypes } from '../../types/rules';
import { ItemWithToken } from '../../components/ItemWithToken';

interface IMagicItemsTableProps {
  magicItems: IMagicItem[];
}

const MagicItemsTable = ({
  magicItems
}: IMagicItemsTableProps): ReactElement => {
  const [categorySelection, setCategorySelection] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [raritySelection, setRaritySelection] = useState('');

  const getMagicItems = (): IMagicItem[] => {
    let filteredMagicItems = magicItems;

    if (nameFilter) {
      filteredMagicItems = filteredMagicItems.filter(magicItem => {
        return magicItem.name.includes(nameFilter);
      });
    }

    if (categorySelection) {
      filteredMagicItems = filteredMagicItems.filter(magicItem => {
        return magicItem.category.toLowerCase() === categorySelection.toLowerCase();
      });
    }

    if (raritySelection) {
      filteredMagicItems = filteredMagicItems.filter(magicItem => {
        return magicItem.rarity.toLowerCase() === raritySelection.toLowerCase();
      });
    }

    return filteredMagicItems;
  };

  const handleNameFilterOnChange = e => {
    setNameFilter(e.target.value);
  };

  const handleCategoryFilterOnChange = e => {
    setCategorySelection(e.target.value);
  };

  const handleRarityFilterOnChange = e => {
    setRaritySelection(e.target.value);
  };

  const getMagicItemDescription = (magicItem: IMagicItem) => {
    if (!magicItem) return '';

    const {
      attunement,
      category,
      rarity,
      subCategory
    } = magicItem;

    const attunementText = attunement ? ' (requires attunement)' : '';
    const subCategoryText = subCategory ? ` (${subCategory})` : '';

    return `${category}${subCategoryText}, ${rarity}${attunementText}`;
  };

  return (
    <>
      <form>
        <fieldset>
          <label>Name</label>
          <input onChange={handleNameFilterOnChange} type="text"/>
          <label>Category</label>
          <select onChange={handleCategoryFilterOnChange}>
            <option></option>
            <option value={ItemCategoryTypes.ARMOR}>{ItemCategoryTypes.ARMOR}</option>
            <option value={ItemCategoryTypes.POTION}>{ItemCategoryTypes.POTION}</option>
            <option value={ItemCategoryTypes.RING}>{ItemCategoryTypes.RING}</option>
            <option value={ItemCategoryTypes.ROD}>{ItemCategoryTypes.ROD}</option>
            <option value={ItemCategoryTypes.SCROLL}>{ItemCategoryTypes.SCROLL}</option>
            <option value={ItemCategoryTypes.STAFF}>{ItemCategoryTypes.STAFF}</option>
            <option value={ItemCategoryTypes.WAND}>{ItemCategoryTypes.WAND}</option>
            <option value={ItemCategoryTypes.WEAPON}>{ItemCategoryTypes.WEAPON}</option>
            <option value={ItemCategoryTypes.WONDEROUS_ITEM}>{ItemCategoryTypes.WONDEROUS_ITEM}</option>
          </select>
          <label>Rarity</label>
          <select onChange={handleRarityFilterOnChange}>
            <option></option>
            <option value={ItemRarityTypes.COMMON}>{ItemRarityTypes.COMMON}</option>
            <option value={ItemRarityTypes.UNCOMMON}>{ItemRarityTypes.UNCOMMON}</option>
            <option value={ItemRarityTypes.RARE}>{ItemRarityTypes.RARE}</option>
            <option value={ItemRarityTypes.VERY_RARE}>{ItemRarityTypes.VERY_RARE}</option>
            <option value={ItemRarityTypes.LEGENDARY}>{ItemRarityTypes.LEGENDARY}</option>
            <option value={ItemRarityTypes.ARTIFACT}>{ItemRarityTypes.ARTIFACT}</option>
          </select>
        </fieldset>
      </form>
      <ul className="bulletless-list">
        {
          getMagicItems().map(magicItem => {
            const {
              id,
              imageUrl,
              name
            } = magicItem;

            return (
              <li>
                {
                  <ItemWithToken
                    description={getMagicItemDescription(magicItem)}
                    heading={name}
                    imageAltText={`${name} token`}
                    imageUrl={imageUrl}
                    itemPath={`/magic_items/${id}`}
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

export { MagicItemsTable };
