import React, {useEffect, useId, useState} from 'react';

interface IBaseFieldModel {
  fieldKey: string;
  label: string;
}

interface IDestroyFieldModel extends IBaseFieldModel {
  type: 'destroy';
}

interface ITextFieldModel extends IBaseFieldModel {
  type: 'text';
}

interface ITextAreaFieldModel extends IBaseFieldModel {
  type: 'textarea';
}

type IFieldModel = IDestroyFieldModel | ITextFieldModel | ITextAreaFieldModel;

interface ICollectionFieldProps<T> {
  collection: T[];
  formModel: IFieldModel[];
  onChange: (items: T[]) => void;
}

interface ICollectionFieldCollectionItem<T> {
  collectionItem: T;
  collectionItemId: string;
}

export const CollectionField = <T extends object>({
  collection,
  formModel,
  onChange
}: ICollectionFieldProps<T>) => {
  const [items, setItems] = useState<ICollectionFieldCollectionItem<T>[]>([]);
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

  const handleFieldChange = (
    e,
    fieldModel: IFieldModel,
    item: ICollectionFieldCollectionItem<T>
  ) => {
    const newValue = fieldModel.type === 'destroy' ? e.target.checked : e.target.value;
    const newItems = items.map((i) => {
      const newCollectionItem = {...i.collectionItem};

      if (i.collectionItemId === item.collectionItemId) {
        newCollectionItem[fieldModel.fieldKey] = newValue;
      }

      return newCollectionItem
    });

    onChange(newItems);
  };

  const handleAddItem = () => {
    const newItem = {}

    formModel.forEach(item => {
      const defaultValue = item.type === 'destroy' ? false : '';
      newItem[item.fieldKey] = defaultValue;
    });

    const newItems = [...items.map(i => i.collectionItem), newItem];

    onChange(newItems);
  };

  const handleNewItemRemoval = (
    item: ICollectionFieldCollectionItem<T>
  ) => {
    const newItems = items.filter(i => i.collectionItemId !== item.collectionItemId).map(item => ({ ...item.collectionItem }));

    onChange(newItems);
  };

  const getNewDestroyField = (
    fieldModel: IFieldModel,
    item: ICollectionFieldCollectionItem<T>
  ) => {
    if (item.collectionItem?.id) return null;
    if (fieldModel.type !== 'destroy') return null;

    return (
      <>
        <label>{fieldModel.label}</label>
        <button onClick={e => {
          e.preventDefault();
          handleNewItemRemoval(item);
        }}>
          Remove
        </button>
      </>
    );
  };
  
  const getDestroyField = (
    fieldModel: IFieldModel,
    item: ICollectionFieldCollectionItem<T>
  ) => {
    if (!item.collectionItem?.id) return null;
    if (fieldModel.type !== 'destroy') return null;
    
    const value = item.collectionItem[fieldModel.fieldKey];

    return (
      <>
        <label>{fieldModel.label}</label>
        <input
          checked={value}
          name="_destroy"
          onChange={e => handleFieldChange(e, fieldModel, item)}
          type="checkbox"/>
      </>
    );
  };

  const getTextField = (
    fieldModel: IFieldModel,
    item: ICollectionFieldCollectionItem<T>
  ) => {
    if (fieldModel.type !== 'text') return null;

    const value = item.collectionItem[fieldModel.fieldKey];

    return (
      <>
        <label>{fieldModel.label}</label>
        <input
          onChange={e => handleFieldChange(e, fieldModel, item)}
          type="text"
          value={value}>
        </input>
      </>
    );
  };

  const getTextareaField = (
    fieldModel: IFieldModel,
    item: ICollectionFieldCollectionItem<T>
  ) => {
    if (fieldModel.type !== 'textarea') return null;

    const value = item.collectionItem[fieldModel.fieldKey];

    return (
      <>
        <label>{fieldModel.label}</label>
        <textarea
          onChange={e => handleFieldChange(e, fieldModel, item)}
          value={value}>
        </textarea>
      </>
    );
  };

  const handleGetItem = (
    fieldModel: IFieldModel,
    item: ICollectionFieldCollectionItem<T>
  ) => {
    return (
      getNewDestroyField(fieldModel, item) ||
      getDestroyField(fieldModel, item) ||
      getTextField(fieldModel, item) ||
      getTextareaField(fieldModel, item)
    );
  };

  return (
    <fieldset>
      {
        items.map(item => {
          return formModel.map(fieldModel => {
            return handleGetItem(fieldModel, item);
          });
        }) 
      }
      <button
        className="button"
        onClick={e => {
          e.preventDefault();
          handleAddItem();
        }}>
        Add
      </button>
    </fieldset>
  );
};
