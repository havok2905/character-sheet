import { DiceRollerClient } from '../DiceRollerClient';

describe('DiceRoller', () => {
  describe('roll', () => {
    it ('should roll with empty string', () => {
      const subject = new DiceRollerClient();
      const result = subject.roll('');

      expect(result).toEqual(0);
    });

    it ('should roll with addition and no diceTotal', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.6475903475903);

      const subject = new DiceRollerClient();
      const result = subject.roll('d10+5');

      expect(result).toEqual(12);
    });

    it ('should roll with addition and no diceUnit', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.6475903475903);

      const subject = new DiceRollerClient();
      const result = subject.roll('1d+5');

      expect(result).toEqual(5);
    });

    it ('should roll with no addition and no diceUnit', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.6475903475903);

      const subject = new DiceRollerClient();
      const result = subject.roll('1d');

      expect(result).toEqual(0);
    });

    it ('should roll with addition', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.6475903475903);

      const subject = new DiceRollerClient();
      const result = subject.roll('1d10+5');

      expect(result).toEqual(12);
    });

    it ('should roll with subtraction', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.6475903475903);

      const subject = new DiceRollerClient();
      const result = subject.roll('1d10-5');

      expect(result).toEqual(2);
    });

    it ('should roll without bonus', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.6475903475903);

      const subject = new DiceRollerClient();
      const result = subject.roll('1d10');

      expect(result).toEqual(7);
    });

    it ('should roll a constant with addition', () => {
      const subject = new DiceRollerClient();
      const result = subject.roll('10+5');

      expect(result).toEqual(15);
    });

    it ('should roll a constant with subtraction', () => {
      const subject = new DiceRollerClient();
      const result = subject.roll('10-5');

      expect(result).toEqual(5);
    });

    it ('should roll a constant without bonus', () => {
      const subject = new DiceRollerClient();
      const result = subject.roll('10');

      expect(result).toEqual(10);
    });
  });
});
