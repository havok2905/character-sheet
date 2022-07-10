import { ICharacter } from '../../types/models';

const characterMulticlassRow = (character: ICharacter): string => {
  const {
    multiclassClass,
    multiclassClassLevel,
    multiclassSubClass
  } = character;

  if (!multiclassClass) return '';

  const subClass = multiclassSubClass ? `, ${multiclassSubClass}` : '';
  
  return `${multiclassClass}${subClass} (${multiclassClassLevel})`;
};

export { characterMulticlassRow };
