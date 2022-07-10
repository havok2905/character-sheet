import React, { ReactElement, useEffect, useState } from 'react';
import { IMagicItem } from '../../types/models';
import { ItemCategoryTypes, ItemRarityTypes } from '../../types/rules';

interface IMagicItemFormProps {
  handleSubmit: (magicItem: IMagicItem) => void;
  handleSubmitButtonLabel: string;
  magicItem?: IMagicItem;
}

const MagicItemForm = ({
  handleSubmit,
  handleSubmitButtonLabel,
  magicItem
}: IMagicItemFormProps): ReactElement => {
  const [attunementField, setAttunementField] = useState(false);
  const [categoryField, setCategoryField] = useState<ItemCategoryTypes>(ItemCategoryTypes.ARMOR);
  const [descriptionField, setDescriptionField] = useState('');
  const [nameField, setNameField] = useState('');
  const [rarityField, setRarityField] = useState<ItemRarityTypes>(ItemRarityTypes.ARTIFACT);
  const [subCategoryField, setSubCategoryField] = useState('');

  useEffect(() => {
    if (magicItem) {
      const {
        attunement,
        category,
        description,
        name,
        rarity,
        subCategory
      } = magicItem;

      setAttunementField(attunement);
      setCategoryField(category);
      setDescriptionField(description);
      setNameField(name);
      setRarityField(rarity);
      setSubCategoryField(subCategory);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const magicItem: IMagicItem = {
      attunement: attunementField,
      category: categoryField,
      description: descriptionField,
      name: nameField,
      rarity: rarityField,
      subCategory: subCategoryField
    };

    handleSubmit(magicItem);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="magic-item-name">
          Name
        </label>
        <input
          id="magic-item-name"
          name="magic-item-name"
          onChange={e => setNameField(e.target.value)}
          type="text"
          value={nameField}/>
        <label htmlFor="magic-item-category">
          Category
        </label>
        <select
          id="magic-item-category"
          name="magic-item-category"
          onChange={e => setCategoryField(e.target.value as ItemCategoryTypes)}
          value={categoryField}>
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
        <label htmlFor="magic-item-sub-category">
          Sub Category
        </label>
        <input
          id="magic-item-sub-category"
          name="magic-item-sub-category"
          onChange={e => setSubCategoryField(e.target.value)}
          type="text"
          value={subCategoryField}/>
        <label htmlFor="magic-item-rarity">
          Rarity
        </label>
        <select
          id="magic-item-rarity"
          name="magic-item-rarity"
          onChange={e => setRarityField(e.target.value as ItemRarityTypes)}
          value={rarityField}>
          <option></option>
          <option value={ItemRarityTypes.COMMON}>{ItemRarityTypes.COMMON}</option>
          <option value={ItemRarityTypes.UNCOMMON}>{ItemRarityTypes.UNCOMMON}</option>
          <option value={ItemRarityTypes.RARE}>{ItemRarityTypes.RARE}</option>
          <option value={ItemRarityTypes.VERY_RARE}>{ItemRarityTypes.VERY_RARE}</option>
          <option value={ItemRarityTypes.LEGENDARY}>{ItemRarityTypes.LEGENDARY}</option>
          <option value={ItemRarityTypes.ARTIFACT}>{ItemRarityTypes.ARTIFACT}</option>
        </select>
        <label htmlFor="magic-item-attunement">
          Attunement
        </label>
        <input
          checked={attunementField}
          id="magic-item-attunement"
          name="magic-item-attunement"
          onChange={e => setAttunementField(e.target.checked)}
          type="checkbox"/>
        <label htmlFor="magic-item-description">
          Description
        </label>
        <textarea 
          id="magic-item-description" 
          name="magic-item-description"
          onChange={e => setDescriptionField(e.target.value)}
          value={descriptionField}>
        </textarea>
      </fieldset>
      <fieldset>
        <button>
          {handleSubmitButtonLabel}
        </button>
      </fieldset>
    </form>
  );
};

export { MagicItemForm };
