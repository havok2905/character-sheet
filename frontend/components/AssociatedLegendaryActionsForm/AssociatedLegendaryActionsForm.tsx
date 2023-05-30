import React, { FC, useState } from 'react';
import { ICreature, ICreatureLegendaryAction } from '../../types/models';

interface IAssociatedLegendaryActionsFormProps {
  buttonLabel: string,
  creature: ICreature;
  handleSubmit: (legendaryActionsText: string, creatureLegendaryActions: ICreatureLegendaryAction[]) => void;
}

const AssociatedLegendaryActionsForm: FC<IAssociatedLegendaryActionsFormProps> = ({
  buttonLabel,
  creature,
  handleSubmit
}) => {
  const [newLegendaryActions, setNewLegendaryActions] = useState<ICreatureLegendaryAction[]>([]);
  const [legendaryActionsText, setLegendaryActionsText] = useState(creature.legendaryActionsText || '');
  const [updatedLegendaryActions, setUpdatedLegendaryActions] = useState<ICreatureLegendaryAction[]>(
    (creature.creatureLegendaryActions || []).map(action => ({ ...action }))
  );

  const handleFormChange = (index: number, key: string, value: any) => {
    const updatedForm = updatedLegendaryActions.map(action => ({ ...action }));
    updatedForm[index][key] = value;
    setUpdatedLegendaryActions(updatedForm);
  };

  const handleNewFieldsChange = (index: number, key: string, value: any) => {
    const updatedForm = newLegendaryActions.map(actions => ({ ...actions }));
    updatedForm[index][key] = value;
    setNewLegendaryActions(updatedForm);
  };

  const getLegendaryAction = (action: ICreatureLegendaryAction, index: number) => {
    const { _destroy, description, name } = action;

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

  const getNewLegendaryAction = (action: ICreatureLegendaryAction, index: number) => {
    const { description, name } = action;

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
        <button
          className="button button-red"
          onClick={e => {
            e.preventDefault();
            setNewLegendaryActions(newLegendaryActions.filter((_action, i) => i !== index ))
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
        handleSubmit(legendaryActionsText, [...updatedLegendaryActions, ...newLegendaryActions])
      }}>
        <h2>Legendary Actions Text</h2>
        <fieldset>
          <label>Legendary Actions Text</label>
          <textarea
            onChange={e => setLegendaryActionsText(e.target.value)}
            value={legendaryActionsText}>
          </textarea>
        </fieldset>
        <h2>Legendary Actions</h2>
        {updatedLegendaryActions.map(getLegendaryAction)}
        <hr/>
        <button
          className="button"
          onClick={e => {
            e.preventDefault()
            setNewLegendaryActions([...newLegendaryActions, { description: '', name: '' }])
          }}>
          Add
        </button>
        {newLegendaryActions.map(getNewLegendaryAction)}
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

export { AssociatedLegendaryActionsForm };
