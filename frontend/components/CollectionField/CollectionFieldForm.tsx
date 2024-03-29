import React, { FC, useEffect, useRef, useState } from 'react';
import {
  ICollectionFieldCollectionItem,
  IFieldModel
} from './types';

interface ICollectionFieldFormProps {
  formModel: IFieldModel[];
  item: ICollectionFieldCollectionItem;
  items: ICollectionFieldCollectionItem[];
  onChange: (items: any[]) => void;
}

interface ITextFieldProps {
  fieldModel: IFieldModel,
  handleFieldChange: (e, fieldModel: IFieldModel) => void;
  value: string;
}

interface ITextAreaFieldProps {
  fieldModel: IFieldModel,
  handleFieldChange: (e, fieldModel: IFieldModel) => void;
  value: string;
}

const TextField: FC<ITextFieldProps> = ({
  fieldModel,
  handleFieldChange,
  value
}) => {
  const [cursor, setCursor] = useState<number | null>(null);
  const el = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (el.current && cursor !== null) {
      el.current.setSelectionRange(cursor, cursor);
    }
  }, [cursor, el, value]);

  const onChange = e => {
    setCursor(e.target.selectionStart);
    handleFieldChange(e, fieldModel);
  };

  return (
    <input
      onChange={onChange}
      ref={el}
      type="text"
      value={value}>
    </input>
  );
};

const TextAreaField: FC<ITextAreaFieldProps> = ({
  fieldModel,
  handleFieldChange,
  value
}) => {
  const [cursor, setCursor] = useState<number | null>(null);
  const el = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (el.current && cursor !== null) {
      el.current.setSelectionRange(cursor, cursor);
    }
  }, [cursor, el, value]);

  const onChange = e => {
    setCursor(e.target.selectionStart);
    handleFieldChange(e, fieldModel);
  };

  return (
    <textarea
      onChange={onChange}
      ref={el}
      value={value}>
    </textarea>
  );
};

export const CollectionFieldForm: FC<ICollectionFieldFormProps> = ({
  formModel,
  item,
  items,
  onChange
}) => {
  const isMarkedForDeletion = item.collectionItem._destroy;

  const handleMarkForDeletion = e => {
    e.preventDefault();

    const newItems = items.map((i) => {
      const newCollectionItem = {...i.collectionItem};

      if (i.collectionItemId === item.collectionItemId) {
        newCollectionItem._destroy = true;
      }

      return newCollectionItem
    });

    onChange(newItems);
  };

  const handleUndoMarkForDeletion = e => {
    e.preventDefault();

    const newItems = items.map((i) => {
      const newCollectionItem = {...i.collectionItem};

      if (i.collectionItemId === item.collectionItemId) {
        newCollectionItem._destroy = false;
      }

      return newCollectionItem
    });

    onChange(newItems);
  };

  const handleFieldChange = (e, fieldModel: IFieldModel) => {
    const isCheckbox = fieldModel.type === 'checkbox' || fieldModel.type === 'destroy';
    const newValue = isCheckbox ? e.target.checked : e.target.value;
    const newItems = items.map((i) => {
      const newCollectionItem = {...i.collectionItem};

      if (i.collectionItemId === item.collectionItemId) {
        newCollectionItem[fieldModel.fieldKey] = newValue;
      }

      return newCollectionItem
    });

    onChange(newItems);
  };

  const handleNewItemRemoval = e => {
    e.preventDefault();
    const newItems = items.filter(i => i.collectionItemId !== item.collectionItemId).map(item => ({ ...item.collectionItem }));
    onChange(newItems);
  };

  const getNewDestroyField = (fieldModel: IFieldModel) => {
    if (item.collectionItem?.id) return null;
    if (fieldModel.type !== 'destroy') return null;

    return (
      <button className="button button-destructive" onClick={handleNewItemRemoval}>
        Remove
      </button>
    );
  };
  
  const getDestroyField = (fieldModel: IFieldModel) => {
    if (!item.collectionItem?.id) return null;
    if (fieldModel.type !== 'destroy') return null;
    
    return (
      <button className="button button-destructive" onClick={handleMarkForDeletion}>
        Remove
      </button>
    )
  };

  const getCheckboxField = (fieldModel: IFieldModel) => {
    if (fieldModel.type !== 'checkbox') return null;

    const value = item.collectionItem[fieldModel.fieldKey];

    return (
      <input
        checked={value}
        onChange={e => handleFieldChange(e, fieldModel)}
        type="checkbox"/>
    )
  };

  const getNumberField = (fieldModel: IFieldModel) => {
    if (fieldModel.type !== 'number') return null;

    const value = item.collectionItem[fieldModel.fieldKey];

    return (
      <>
        <label>{fieldModel.label}</label>
        <input
          onChange={e => handleFieldChange(e, fieldModel)}
          type="number"
          value={value}>
        </input>
      </>
    );
  };

  const getSelectField = (fieldModel: IFieldModel) => {
    if (fieldModel.type !== 'select') return null;

    const value = item.collectionItem[fieldModel.fieldKey];

    return (
      <>
        <label>{fieldModel.label}</label>
        <select
          onChange={e => handleFieldChange(e, fieldModel)}
          value={value}>
          {
            fieldModel.options.map(optionItem => {
              return (
                <option value={optionItem.value}>
                  {optionItem.label}
                </option>
              );
            })
          }
        </select>
      </>
    );
  };

  const getTextField = (fieldModel: IFieldModel) => {
    if (fieldModel.type !== 'text') return null;

    const value = item.collectionItem[fieldModel.fieldKey];

    return (
      <>
        <label>{fieldModel.label}</label>
        <TextField
          fieldModel={fieldModel}
          handleFieldChange={handleFieldChange}
          value={value}
        />
      </>
    );
  };

  const getTextareaField = (fieldModel: IFieldModel) => {
    if (fieldModel.type !== 'textarea') return null;

    const value = item.collectionItem[fieldModel.fieldKey];

    return (
      <>
        <label>{fieldModel.label}</label>
        <TextAreaField
          fieldModel={fieldModel}
          handleFieldChange={handleFieldChange}
          value={value}
        />
      </>
    );
  };

  const handleGetItem = (fieldModel: IFieldModel) => {
    return (
      getCheckboxField(fieldModel) ||
      getNewDestroyField(fieldModel) ||
      getDestroyField(fieldModel) ||
      getNumberField(fieldModel) ||
      getSelectField(fieldModel) ||
      getTextField(fieldModel) ||
      getTextareaField(fieldModel)
    );
  };

  if (isMarkedForDeletion) return (
    <fieldset className="collection-field-form">
      <p>
        <em>Removed.</em> <a href="#" onClick={handleUndoMarkForDeletion}>Undo?</a>
      </p>
    </fieldset>
  );

  return (
    <fieldset className="collection-field-form">
      {
        formModel.map(fieldModel => handleGetItem(fieldModel))
      }
    </fieldset>
  );
};
