type IParsedRoll = {
  bonus: number,
  bonusOperator: string,
  constant: number,
  diceTotal: number,
  diceUnit: number
}

interface IDiceRollerClient {
  roll(rollInput: string): number;
}

class DiceRollerClient implements IDiceRollerClient {
  public roll(rollInput: string): number {
    const {
      bonus,
      bonusOperator,
      constant,
      diceTotal,
      diceUnit
    } = this.parseRollInput(rollInput);

    let diceRoll = 0;

    for (let x=0; x<diceTotal; x++) {
      const singleDiceRoll = !diceUnit ? 0 : (Math.floor(Math.random() * diceUnit) + 1);
      diceRoll += singleDiceRoll;
    }

    return diceRoll + ( bonusOperator === '-' ? bonus * -1 : bonus) + constant;
  }

  private parseRollInput(rollInput: string): IParsedRoll {
    const rollRegex = new RegExp(/([0-9]+)?d([0-9]+)?((?:\+|-))?([0-9]+)?/);
    const constantRegex = new RegExp(/([0-9]+)((?:\+|-))?([0-9]+)?/);

    const rollMatch = rollRegex.exec(rollInput);
    const constantMatch = constantRegex.exec(rollInput);

    if (rollMatch) {
      return {
        bonus: parseInt(rollMatch[4]) || 0,
        bonusOperator: rollMatch[3] || '+',
        constant: 0,
        diceTotal: parseInt(rollMatch[1]) || 1,
        diceUnit: parseInt(rollMatch[2]) || 0
      }; 
    }
    
    if (constantMatch) {
      return {
        bonus: parseInt(constantMatch[3]) || 0,
        bonusOperator: constantMatch[2] || '+',
        constant: parseInt(constantMatch[1]) || 0,
        diceTotal: 0,
        diceUnit: 0
      };
    }
    
    return {
      bonus: 0,
      bonusOperator: '+',
      constant: 0,
      diceTotal: 0,
      diceUnit: 0
    };
  }
}

export { DiceRollerClient };
