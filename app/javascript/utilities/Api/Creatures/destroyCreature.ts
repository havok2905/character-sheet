const destroyCreature = (id: string): Promise<any> => {
  return fetch(`/creatures/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { destroyCreature };
