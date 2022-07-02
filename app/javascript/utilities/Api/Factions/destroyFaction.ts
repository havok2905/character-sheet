const destroyFaction = (id: string): Promise<any> => {
  return fetch(`/factions/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { destroyFaction };
