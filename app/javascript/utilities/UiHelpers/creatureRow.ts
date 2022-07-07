import { ICreature } from "../../types/models";

const creatureRow = (creature: ICreature): string => {
  const {
    cr,
    creatureType,
    size
  } = creature;

  return `${size}, ${creatureType} (CR: ${cr})`;
};

export { creatureRow };
