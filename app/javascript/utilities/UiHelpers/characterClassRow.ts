import { ICharacter } from '../../types/models';

const characterClassRow = (character: ICharacter): string => {
  const {
    characterClass,
    characterClassLevel,
    characterSubClass
  } = character;

  const subClass = characterSubClass ? `, ${characterSubClass}` : '';
  
  return `${characterClass}${subClass} (${characterClassLevel})`
};

export { characterClassRow };
