import React, { ReactElement, useState } from 'react';
import { ICharacter, ICharacterFeature } from '../../types/models';

interface IAssociatedCharacterFeaturesFormProps {
  buttonLabel: string,
  character: ICharacter;
  handleSubmit: (characterFeatures: ICharacterFeature[]) => void;
}

const AssociatedCharacterFeaturesForm = ({
  buttonLabel,
  character,
  handleSubmit
}: IAssociatedCharacterFeaturesFormProps): ReactElement => {
  const [newFeatures, setNewFeatures] = useState<ICharacterFeature[]>([]);
  const [updatedFeatures, setUpdatedFeatures] = useState<ICharacterFeature[]>(
    (character.characterFeatures || []).map(feature => ({ ...feature }))
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

  const getFeature = (
    feature: ICharacterFeature,
    index: number,
    isNewField: boolean
  ): ReactElement => {
    const { _destroy, description, name, source } = feature;

    const func = isNewField ? handleNewFieldsChange : handleFormChange;

    return (
      <fieldset>
        <label>Name</label>
        <input 
          onChange={e => func(index, 'name', e.target.value)}
          type="text"
          value={name}/>
        <label>Source</label>
        <input 
          onChange={e => func(index, 'source', e.target.value)}
          type="text"
          value={source}/>
        <label>Description</label>
        <textarea
          onChange={e => func(index, 'description', e.target.value)}
          value={description}>  
        </textarea>
        {
          isNewField ? (
            <button
              className="button button-red"
              onClick={e => {
                e.preventDefault();
                setNewFeatures(newFeatures.filter((_feature, i) => i !== index ))
              }}>
              Remove
            </button>
          ) : (
            <label>
              Mark for deletion
              <input
                checked={_destroy}
                name="_destroy"
                onChange={e => func(index, '_destroy', e.target.checked)}
                type="checkbox"/>
            </label>
          )
        }
      </fieldset>
    );
  };

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit([...updatedFeatures, ...newFeatures])
      }}>
        <h2>Features</h2>
        {updatedFeatures.map((feature, index) => getFeature(feature, index, false))}
        <hr/>
        <button
          className="button"
          onClick={e => {
            e.preventDefault()
            setNewFeatures([...newFeatures, { description: '', name: '', source: '' }])
          }}>
          Add
        </button>
        {newFeatures.map((feature, index) => getFeature(feature, index, true))}
        <fieldset>
          <button
            className="button button-green"
            type="submit">
            {buttonLabel}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export { AssociatedCharacterFeaturesForm };
