import React, { FC, useState } from 'react';
import { ActionCombatTypes, ActionTypes } from '../../utilities/GameSystem/enums';
import { ICreature, ICreatureAction } from '../../types/models';

interface IAssociatedActionsFormProps {
  buttonLabel: string,
  creature: ICreature;
  handleSubmit: (creatureFeatures: ICreatureAction[]) => void;
}

const AssociatedActionsForm: FC<IAssociatedActionsFormProps> = ({
  buttonLabel,
  creature,
  handleSubmit
}) => {
  const [newActions, setNewActions] = useState<ICreatureAction[]>([]);
  const [updatedActions, setUpdatedActions] = useState<ICreatureAction[]>(
    (creature.creatureActions || []).map(action => ({ ...action }))
  );

  const handleFormChange = (index: number, key: string, value: any) => {
    const updatedForm = updatedActions.map(action => ({ ...action }));
    updatedForm[index][key] = value;
    setUpdatedActions(updatedForm);
  };

  const handleNewFieldsChange = (index: number, key: string, value: any) => {
    const updatedForm = newActions.map(action => ({ ...action }));
    updatedForm[index][key] = value;
    setNewActions(updatedForm);
  };

  const getAction = (
    action: ICreatureAction,
    index: number,
    isNewField: boolean
  ) => {
    const {
      _destroy,
      actionType,
      actionCombatType,
      attackBonus,
      damageDiceRoll,
      damageType,
      damageTwoDiceRoll,
      damageTwoType,
      description,
      name,
      range,
      savingThrowDc,
      savingThrowType
    } = action;

    const func = isNewField ? handleNewFieldsChange : handleFormChange;

    return (
      <fieldset>
        <label>Name</label>
        <input 
          onChange={e => func(index, 'name', e.target.value)}
          type="text"
          value={name}/>
        <label>Action Type</label>
        <select
          onChange={e => func(index, 'actionType', e.target.value)}
          value={actionType}>
          <option></option>
          <option value={ActionTypes.ACTION}>{ActionTypes.ACTION}</option>
          <option value={ActionTypes.BONUS_ACTION}>{ActionTypes.BONUS_ACTION}</option>
          <option value={ActionTypes.REACTION}>{ActionTypes.REACTION}</option>
        </select>
        <label>Action Combat Type</label>
        <select
          onChange={e => func(index, 'actionCombatType', e.target.value)}
          value={actionCombatType}>
          <option></option>
          <option value={ActionCombatTypes.MELEE_SPELL_ATTACK}>{ActionCombatTypes.MELEE_SPELL_ATTACK}</option>
          <option value={ActionCombatTypes.MELEE_WEAPON_ATTACK}>{ActionCombatTypes.MELEE_WEAPON_ATTACK}</option>
          <option value={ActionCombatTypes.RANGED_OR_MELEE_WEAPON_ATTACK}>{ActionCombatTypes.RANGED_OR_MELEE_WEAPON_ATTACK}</option>
          <option value={ActionCombatTypes.RANGED_SPELL_ATTACK}>{ActionCombatTypes.RANGED_SPELL_ATTACK}</option>
          <option value={ActionCombatTypes.RANGED_WEAPON_ATTACK}>{ActionCombatTypes.RANGED_WEAPON_ATTACK}</option>
        </select>
        <label>Range</label>
        <input 
          onChange={e => func(index, 'range', e.target.value)}
          type="text"
          value={range}/>
        <label>Attack Bonus</label>
        <input 
          onChange={e => func(index, 'attackBonus', e.target.value)}
          type="text"
          value={attackBonus}/>
        <label>Damage Dice Roll</label>
        <input 
          onChange={e => func(index, 'damageDiceRoll', e.target.value)}
          type="text"
          value={damageDiceRoll}/>
        <label>Damage Type</label>
        <input 
          onChange={e => func(index, 'damageType', e.target.value)}
          type="text"
          value={damageType}/>
        <label>Damage Two Dice Roll</label>
        <input 
          onChange={e => func(index, 'damageTwoDiceRoll', e.target.value)}
          type="text"
          value={damageTwoDiceRoll}/>
        <label>Damage Two Type</label>
        <input 
          onChange={e => func(index, 'damageTwoType', e.target.value)}
          type="text"
          value={damageTwoType}/>
        <label>Saving Throw DC</label>
        <input 
          onChange={e => func(index, 'savingThrowDc', e.target.value)}
          type="text"
          value={savingThrowDc}/>
        <label>Saving Throw Type</label>
        <input 
          onChange={e => func(index, 'savingThrowType', e.target.value)}
          type="text"
          value={savingThrowType}/>
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
                setNewActions(newActions.filter((_action, i) => i !== index ))
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
        handleSubmit([...updatedActions, ...newActions])
      }}>
        <h2>Actions</h2>
        {updatedActions.map((action, index) => getAction(action, index, false))}
        <hr/>
        <button
          className="button"
          onClick={e => {
            e.preventDefault()
            setNewActions([...newActions, {
              actionType: '',
              actionCombatType: '',
              attackBonus: 0,
              damageDiceRoll: '',
              damageType: '',
              damageTwoDiceRoll: '',
              damageTwoType: '',
              description: '',
              name: '',
              range: '',
              savingThrowDc: 0,
              savingThrowType: ''
            }])
          }}>
          Add
        </button>
        {newActions.map((action, index) => getAction(action, index, true))}
        <fieldset>
          <button className="button button-green" type="submit">
            {buttonLabel}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export { AssociatedActionsForm };
