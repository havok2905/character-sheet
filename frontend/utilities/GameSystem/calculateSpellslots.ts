import {
  ARTIFICER,
  ARTIFICER_CASTER_TABLE,
  FULL_CASTER_TABLE,
  FULL_CASTERS,
  HALF_CASTER_TABLE,
  HALF_CASTERS,
  THIRD_CASTER_TABLE,
  THIRD_CASTERS
} from './constants';

interface IClassSetItem {
  classLevel: number;
  className: string;
  subclassName: string;
}

export const calculateSpellslots = (classes: IClassSetItem[]) => {
  const isMultiClass = classes.length > 1;

  if (!isMultiClass) {
    const { classLevel, className, subclassName } = classes[0];
    if (ARTIFICER === className) return ARTIFICER_CASTER_TABLE[classLevel];
    if (HALF_CASTERS.includes(className)) return HALF_CASTER_TABLE[classLevel];
    if (THIRD_CASTERS.includes(subclassName)) return THIRD_CASTER_TABLE[classLevel];
    return FULL_CASTER_TABLE[classLevel];
  } else {
    let totalLevel = 0;

    classes.forEach(classItem => {
      const {classLevel, className, subclassName} = classItem;
      
      if (FULL_CASTERS.includes(className)) {
        totalLevel += classLevel;
      } else if (HALF_CASTERS.includes(className)) {
        totalLevel += Math.floor(classLevel / 2);
      } else if (THIRD_CASTERS.includes(subclassName)) {
        totalLevel += Math.floor(classLevel / 3);
      } else if (className === ARTIFICER) {
        totalLevel += Math.ceil(classLevel / 2);
      }
    });

    return FULL_CASTER_TABLE[totalLevel];
  }
};
