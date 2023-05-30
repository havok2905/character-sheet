import React, { FC, useState } from 'react';
import { ICreature, ICreatureRegionalEffect } from '../../types/models';

interface IAssociatedRegionalEffectsFormProps {
  buttonLabel: string,
  creature: ICreature;
  handleSubmit: (regionalEffectsText: string, creatureRegionalEffects: ICreatureRegionalEffect[]) => void;
}

const AssociatedRegionalEffectsForm: FC<IAssociatedRegionalEffectsFormProps> = ({
  buttonLabel,
  creature,
  handleSubmit
}) => {
  const [newRegionalEffects, setNewRegionalEffects] = useState<ICreatureRegionalEffect[]>([]);
  const [regionalEffectsText, setRegionalEffectsText] = useState(creature.regionalEffectsText || '');
  const [updatedRegionalEffects, setUpdatedRegionalEffects] = useState<ICreatureRegionalEffect[]>(
    (creature.creatureRegionalEffects || []).map(effect => ({ ...effect }))
  );

  const handleFormChange = (index: number, key: string, value: any) => {
    const updatedForm = updatedRegionalEffects.map(effect => ({ ...effect }));
    updatedForm[index][key] = value;
    setUpdatedRegionalEffects(updatedForm);
  };

  const handleNewFieldsChange = (index: number, key: string, value: any) => {
    const updatedForm = newRegionalEffects.map(effect => ({ ...effect }));
    updatedForm[index][key] = value;
    setNewRegionalEffects(updatedForm);
  };

  const getRegionalEffect = (effect: ICreatureRegionalEffect, index: number) => {
    const { _destroy, description } = effect;

    return (
      <fieldset>
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

  const getNewRegionalEffect = (effect: ICreatureRegionalEffect, index: number) => {
    const { description } = effect;

    return (
      <fieldset>
        <label>Description</label>
        <textarea
          onChange={e => handleNewFieldsChange(index, 'description', e.target.value)}
          value={description}>  
        </textarea>
        <button
          className="button button-destructive"
          onClick={e => {
            e.preventDefault();
            setNewRegionalEffects(newRegionalEffects.filter((_effect, i) => i !== index ))
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
        handleSubmit(regionalEffectsText, [...updatedRegionalEffects, ...newRegionalEffects])
      }}>
        <h2>Regional Effects Text</h2>
        <fieldset>
          <label>Regional Effects Text</label>
          <textarea
            onChange={e => setRegionalEffectsText(e.target.value)}
            value={regionalEffectsText}>
          </textarea>
        </fieldset>
        <h2>Regional Effects</h2>
        {updatedRegionalEffects.map(getRegionalEffect)}
        <hr/>
        <button
          className="button"
          onClick={e => {
            e.preventDefault()
            setNewRegionalEffects([...newRegionalEffects, { description: '' }])
          }}>
          Add
        </button>
        {newRegionalEffects.map(getNewRegionalEffect)}
        <fieldset>
          <button
            className="button button-constructive"
            type="submit">
            {buttonLabel}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export { AssociatedRegionalEffectsForm };
