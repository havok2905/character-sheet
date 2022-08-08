import React, { ReactElement, useState } from 'react';
import { ICharacter, ICharacterFeatureResource } from '../../types/models';

interface IAssociatedFeatureResourcesFormProps {
  buttonLabel: string,
  character: ICharacter;
  handleSubmit: (characterFeatureResources: ICharacterFeatureResource[]) => void;
}

const AssociatedFeatureResourcesForm = ({
  buttonLabel,
  character,
  handleSubmit
}: IAssociatedFeatureResourcesFormProps): ReactElement => {
  const [newFeatureResources, setNewFeatureResources] = useState<ICharacterFeatureResource[]>([]);
  const [updatedFeatureResources, setUpdatedFeatureResources] = useState<ICharacterFeatureResource[]>(
    (character.characterFeatureResources || []).map(featureResource => ({ ...featureResource }))
  );

  const handleFormChange = (index: number, key: string, value: any) => {
    const updatedForm = updatedFeatureResources.map(featureResource => ({ ...featureResource }));
    updatedForm[index][key] = value;
    setUpdatedFeatureResources(updatedForm);
  };

  const handleNewFieldsChange = (index: number, key: string, value: any) => {
    const updatedForm = newFeatureResources.map(featureResource => ({ ...featureResource }));
    updatedForm[index][key] = value;
    setNewFeatureResources(updatedForm);
  };

  const getFeatureResource = (
    featureResource: ICharacterFeatureResource,
    index: number,
    isNewField: boolean
  ): ReactElement => {
    const { _destroy, name, total } = featureResource;

    const func = isNewField ? handleNewFieldsChange : handleFormChange;

    return (
      <fieldset>
        <label>Name</label>
        <textarea
          onChange={e => func(index, 'name', e.target.value)}
          value={name}>  
        </textarea>
        <label>Total</label>
        <input
          onChange={e => func(index, 'total', e.target.value)}
          type="number"
          value={total}/>
        {
          isNewField ? (
            <button
              className="button button-red"
              onClick={e => {
                e.preventDefault();
                setNewFeatureResources(newFeatureResources.filter((_featureResource, i) => i !== index ))
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
        handleSubmit([...updatedFeatureResources, ...newFeatureResources])
      }}>
        <h2>Feature Resources</h2>
        {updatedFeatureResources.map((featureResource, index) => getFeatureResource(featureResource, index, false))}
        <hr/>
        <button
          className="button"
          onClick={e => {
            e.preventDefault()
            setNewFeatureResources([...newFeatureResources, { name: '', total: 0 }])
          }}>
          Add
        </button>
        {newFeatureResources.map((featureResource, index) => getFeatureResource(featureResource, index, true))}
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

export { AssociatedFeatureResourcesForm };
