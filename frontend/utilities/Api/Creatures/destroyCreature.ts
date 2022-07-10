const destroyCreature = (id: string): Promise<Record<string, never>> => {
  return fetch(`/creatures/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { destroyCreature };
