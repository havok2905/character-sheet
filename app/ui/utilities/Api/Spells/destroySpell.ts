const destroySpell = (id: string): Promise<Record<string, never>> => {
  return fetch(`/spells/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { destroySpell };
