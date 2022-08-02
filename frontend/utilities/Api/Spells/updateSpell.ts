import { ISpell } from '../../../types/models';

type IUpdateSpellRequest = {
  spell: ISpell;
};


type IUpdateSpellResponse = {
  spell: ISpell;
};

const updateSpell = (id: string, data: IUpdateSpellRequest): Promise<IUpdateSpellResponse> => {
  return fetch(`/api/spells/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export { updateSpell };
