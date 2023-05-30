import React, { FC, useState } from 'react';
import { ICharacter, ICharacterAttack } from '../../types/models';

interface IAssociatedAttacksFormProps {
  buttonLabel: string,
  character: ICharacter;
  handleSubmit: (characterFeatures: ICharacterAttack[]) => void;
}

const AssociatedAttacksForm: FC<IAssociatedAttacksFormProps> = ({
  buttonLabel,
  character,
  handleSubmit
}) => {
  const [newAttacks, setNewAttacks] = useState<ICharacterAttack[]>([]);
  const [updatedAttacks, setUpdatedAttacks] = useState<ICharacterAttack[]>(
    (character.characterAttacks || []).map(attack => ({ ...attack }))
  );

  const handleFormChange = (index: number, key: string, value: any) => {
    const updatedForm = updatedAttacks.map(attack => ({ ...attack }));
    updatedForm[index][key] = value;
    setUpdatedAttacks(updatedForm);
  };

  const handleNewFieldsChange = (index: number, key: string, value: any) => {
    const updatedForm = newAttacks.map(attack => ({ ...attack }));
    updatedForm[index][key] = value;
    setNewAttacks(updatedForm);
  };

  const getAttack = (
    attack: ICharacterAttack,
    index: number,
    isNewField: boolean
  ) => {
    const {
      _destroy,
      attackBonus,
      critRange,
      damageDiceRoll,
      damageTwoDiceRoll,
      damageTwoType,
      damageType,
      description,
      isSavingThrow,
      name,
      range,
      savingThrowDescription,
      savingThrowThreshold,
      savingThrowType
    } = attack;

    const func = isNewField ? handleNewFieldsChange : handleFormChange;

    return (
      <fieldset>
        <label>Name</label>
        <input 
          onChange={e => func(index, 'name', e.target.value)}
          type="text"
          value={name}/>
        <label>Attack Bonus</label>
        <input 
          onChange={e => func(index, 'attackBonus', e.target.value)}
          type="number"
          value={attackBonus}/>
        <label>Crit Range</label>
        <input 
          onChange={e => func(index, 'critRange', e.target.value)}
          type="number"
          value={critRange}/>
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
        <label>Is Saving Throw</label>
        <input
          checked={isSavingThrow}
          onChange={e => func(index, 'isSavingThrow', e.target.checked)}
          type="checkbox"/>
        <label>Range</label>
        <input 
          onChange={e => func(index, 'range', e.target.value)}
          type="text"
          value={range}/>
        <label>Saving Throw Description</label>
        <textarea
          onChange={e => func(index, 'savingThrowDescription', e.target.value)}
          value={savingThrowDescription}>
        </textarea>
        <label>Saving Throw Threshold</label>
        <input 
          onChange={e => func(index, 'savingThrowThreshold', e.target.value)}
          type="number"
          value={savingThrowThreshold}/>
        <label>Saving Throw Type</label>
        <input 
          onChange={e => func(index, 'savingThrowType', e.target.value)}
          type="text"
          value={savingThrowType}/>
        <label>Description</label>
        <textarea
          onChange={e => func(index, 'description', e.target.value)}
          value={description}></textarea>
        {
          isNewField ? (
            <button
              className="button button-destructive"
              onClick={e => {
                e.preventDefault();
                setNewAttacks(newAttacks.filter((_attack, i) => i !== index ))
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
        handleSubmit([...updatedAttacks, ...newAttacks])
      }}>
        <h2>Attacks</h2>
        {updatedAttacks.map((attack, index) => getAttack(attack, index, false))}
        <hr/>
        <button
          className="button"
          onClick={e => {
            e.preventDefault()
            setNewAttacks([...newAttacks, {
              attackBonus: 0,
              critRange: 20,
              damageDiceRoll: '',
              damageTwoDiceRoll: '',
              damageTwoType: '',
              damageType: '',
              description: '',
              isSavingThrow: false,
              name: '',
              range: '',
              savingThrowDescription: '',
              savingThrowThreshold: '',
              savingThrowType: ''
            }])
          }}>
          Add
        </button>
        {newAttacks.map((attack, index) => getAttack(attack, index, true))}
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

export { AssociatedAttacksForm };
