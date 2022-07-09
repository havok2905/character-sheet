import React, { ReactElement, useState } from 'react';
import { ICreature, ICreatureFeature } from '../../types/models';

interface IAssociatedFeaturesFormProps {
  buttonLabel: string,
  creature: ICreature;
  handleSubmit: (creatureFeatures: ICreatureFeature[]) => void;
}

const AssociatedFeaturesForm = ({
  buttonLabel,
  creature,
  handleSubmit
}: IAssociatedFeaturesFormProps): ReactElement => {
  const [newFeatures, setNewFeatures] = useState<ICreatureFeature[]>([]);
  const [updatedFeatures, setUpdatedFeatures] = useState<ICreatureFeature[]>(
    (creature.creatureFeatures || []).map(feature => ({ ...feature }))
  );

  const handleFormChange = (index: number, key: string, value: any) => {
    const updatedForm = updatedFeatures.map(feature => ({ ...feature }));
    updatedForm[index][key] = value;
    setUpdatedFeatures(updatedForm);
  };

  const handleNewFieldsChange = (index: number, key: string, value: any) => {
    const updatedForm = newFeatures.map(feature => ({ ...feature }));
    updatedForm[index][key] = value;
    setNewFeatures(updatedForm);
  };

  const getFeature = (feature: ICreatureFeature, index: number): ReactElement => {
    const { _destroy, description, name } = feature;

    return (
      <fieldset>
        <label>Name</label>
        <input 
          onChange={e => handleFormChange(index, 'name', e.target.value)}
          type="text"
          value={name}/>
        <label>Description</label>
        <textarea
          onChange={e => handleFormChange(index, 'description', e.target.value)}
          value={description}>  
        </textarea>
        <label>
          Mark for deletion
          <input
            checked={_destroy}
            name="_destroy"
            onChange={e => handleFormChange(index, '_destroy', e.target.checked)}
            type="checkbox"/>
        </label>
      </fieldset>
    );
  };

  const getNewFeature = (feature: ICreatureFeature, index: number): ReactElement => {
    const { description, name } = feature;

    return (
      <fieldset>
        <label>Name</label>
        <input 
          onChange={e => handleNewFieldsChange(index, 'name', e.target.value)}
          type="text"
          value={name}/>
        <label>Description</label>
        <textarea
          onChange={e => handleNewFieldsChange(index, 'description', e.target.value)}
          value={description}>  
        </textarea>
        <button onClick={e => {
          e.preventDefault();
          setNewFeatures(newFeatures.filter((_feature, i) => i !== index ))
        }}>
          Remove
        </button>
      </fieldset>
    );
  };

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit([...updatedFeatures, ...newFeatures])
      }}>
        <button type="submit">
          {buttonLabel}
        </button>
        <h2>Features</h2>
        {updatedFeatures.map(getFeature)}
        <hr/>
        <button onClick={e => {
          e.preventDefault()
          setNewFeatures([...newFeatures, { description: '', name: '' }])
        }}>
          Add
        </button>
        {newFeatures.map(getNewFeature)}
      </form>
    </>
  );
};

export { AssociatedFeaturesForm };
