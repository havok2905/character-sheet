import { ISpell } from '../../../types/models';

type ICreateSpellRequest = {
  spell: ISpell;
};


type ICreateSpellResponse = {
  spell: ISpell;
};

const createSpell = (data: ICreateSpellRequest): Promise<ICreateSpellResponse> => {
  return fetch(`/spells.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export { createSpell };
