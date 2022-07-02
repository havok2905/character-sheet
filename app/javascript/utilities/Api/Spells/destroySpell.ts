const destroySpell = (id: string): Promise<any> => {
  return fetch(`/spells/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { destroySpell };
