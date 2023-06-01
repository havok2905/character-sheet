import React, {FC, useEffect, useId, useState} from 'react';
import {CollectionFieldForm} from './CollectionFieldForm';
import {
  ICollectionFieldCollectionItem,
  IFieldModel
} from './types';
import './CollectionField.scss';

interface ICollectionFieldProps {
  collection: any[];
  formModel: IFieldModel[];
  onChange: (items: any[]) => void;
}

export const CollectionField: FC<ICollectionFieldProps> = ({
  collection,
  formModel,
  onChange
}) => {
  const [items, setItems] = useState<ICollectionFieldCollectionItem[]>([]);
  const collectionFieldId = useId();

  useEffect(() => {
    const fieldItems = collection.map((collectionItem, index) => {
      const collectionItemId = `${collectionFieldId}-${index}`;
      
      return {
        collectionItemId,
        collectionItem: {
          ...collectionItem
        }
      };
    });

    setItems(fieldItems);
  }, [collection]);

  if (!formModel.length) return null;

  const handleAddItem = e => {
    e.preventDefault();

    const newItem = {}

    formModel.forEach(item => {
      const defaultValue = item.type === 'destroy' ? false : '';
      newItem[item.fieldKey] = defaultValue;
    });

    const newItems = [...items.map(i => i.collectionItem), newItem];

    onChange(newItems);
  };

  return (
    <div>
      {
        items.map(item => {
          return (
            <CollectionFieldForm
              formModel={formModel}
              item={item}
              items={items}
              onChange={onChange}
            />
          );
        }) 
      }
      <fieldset>
        <button className="button button-primary" onClick={handleAddItem}>
          Add
        </button>
      </fieldset>
    </div>
  );
};
