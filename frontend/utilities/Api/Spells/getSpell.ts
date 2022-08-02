import { ISpell } from '../../../types/models';

type IGetSpellResponse = {
  spell: ISpell;
};

const getSpell = (id: string): Promise<IGetSpellResponse> => {
  return fetch(`/api/spells/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getSpell };
