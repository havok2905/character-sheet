import React, { FC } from 'react';
import {ICreatureAction} from '../../types/models';
import './Action.scss';
import {ActionCombatTypes} from '../../utilities/GameSystem/enums';

interface IActionProps {
  action: ICreatureAction;
}

export const Action: FC<IActionProps> = ({
  action: {
    actionCombatType,
    attackBonus,
    damageDiceRoll,
    damageTwoDiceRoll,
    damageTwoType,
    damageType,
    description,
    range,
    savingThrowDc,
    savingThrowType
  }
}) => {
  const getActionCombatText = () => {
    if (!actionCombatType) return null;

    const modSymbol = attackBonus < 0 ? '' : '+';

    const reachRangeText = 
      actionCombatType === ActionCombatTypes.MELEE_WEAPON_ATTACK ||
      actionCombatType === ActionCombatTypes.MELEE_SPELL_ATTACK ?
        'reach' :
        'range';

    return (
      <p>
        <em>{actionCombatType}:</em>
        {' '}
        {modSymbol}{attackBonus} to hit, {reachRangeText} {range}
        {' '}
        Hit: {damageDiceRoll} {damageType} damage
        {
          damageTwoDiceRoll && damageTwoType ? ` plus ${damageTwoDiceRoll} ${damageTwoType} damage` : null
        }
        .
      </p>
    );
  };

  const getSavingThrowText = () => {
    if (!savingThrowDc || !savingThrowType) return null;

    return (
      <p>
        <strong>Saving Throw: </strong> DC{savingThrowDc} {savingThrowType}
      </p>
    );
  };

  const getDescription = () => {
    if (!description) return null;

    return (
      <p>
        {description}
      </p>
    );
  };

  return (
    <>
      {getActionCombatText()}
      {getSavingThrowText()}
      {getDescription()}
    </>
  );
};
