import React, { ReactElement, useState } from 'react';
import { ICreature, ICreatureRegionalEffect } from '../../types/models';

interface IAssociatedRegionalEffectsFormProps {
  creature: ICreature
}

const AssociatedRegionalEffectsForm = ({
  creature
}: IAssociatedRegionalEffectsFormProps): ReactElement => {
  const [newRegionalEffects, setNewRegionalEffects] = useState<ICreatureRegionalEffect[]>([]);
  const [regionalEffects, setRegionalEffects] = useState<ICreatureRegionalEffect[]>(
    (creature.creatureRegionalEffects ?? []).map(effect => ({ ...effect }))
  );

  const addNewRegionalEffect = e => {
    e.preventDefault();
    setNewRegionalEffects([...newRegionalEffects, { description: '' }]);
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log([
      ...regionalEffects,
      ...newRegionalEffects
    ]);
  };

  const updateDescriptionField = (
    index: number,
    value: string,
    effects: ICreatureRegionalEffect[]
  ) => {
    const updatedRegionalEffects = effects.map((effect, i) => {
      return index === i ? { ...effect, description: value } : effect;
    });

    setRegionalEffects(updatedRegionalEffects);
  };

  const getDescriptionField = (
    effect: ICreatureRegionalEffect,
    effects: ICreatureRegionalEffect[],
    index: number
  ) => {
    const { description } = effect;

    return (
      <>
        <label>Description</label>
        <textarea
          name="description"
          onChange={e => updateDescriptionField(index, e.target.value, effects)}
          value={description}>  
        </textarea>
      </>
    )
  };

  const updateDestroyField = (
    index: number, 
    value: boolean, 
    effects: ICreatureRegionalEffect[]
  ) => {
    const updatedRegionalEffects = effects.map((effect, i) => {
      return index === i ? { ...effect, _destroy: value } : effect;
    });

    setRegionalEffects(updatedRegionalEffects);
  };


  const getDestroyField = (
    effect: ICreatureRegionalEffect,
    effects: ICreatureRegionalEffect[],
    index: number
  ) => {
    const { _destroy } = effect;

    return (
      <>
        <label>
          Mark for deletion
          <input
          checked={_destroy}
          name="_destroy"
          onChange={e => updateDestroyField(index, e.target.checked, effects)}
          type="checkbox"/>
        </label>
      </>
    );
  };

  const getRegionalEffects = () => {
    return (
      <>
        {
          regionalEffects.map((effect, index) => {
            return (
              <fieldset>
                {getDescriptionField(effect, regionalEffects, index)}
                {getDestroyField(effect, regionalEffects, index)}
              </fieldset>
            );
          })
        }
        {
          !!newRegionalEffects.length && <hr/>
        }
        {
          newRegionalEffects.map((effect, index) => {
            return (
              <fieldset>
                {getDescriptionField(effect, newRegionalEffects, index)}
                <button
                  onClick={() => {
                    setNewRegionalEffects(newRegionalEffects.filter((_effect, i) => i !== index))
                  }}>
                  Remove
                </button>
              </fieldset>
            );
          })
        }
      </>
    );
  };

  return (
    <form onSubmit={onSubmit}>
      {getRegionalEffects()}
      <button onClick={addNewRegionalEffect}>
        Add Regional Effect
      </button>
      <button type="submit">
        Save Regional Effects
      </button>
    </form>
  )
};

export { AssociatedRegionalEffectsForm };
