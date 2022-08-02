const destroyFaction = (id: string): Promise<Record<string, never>> => {
  return fetch(`/api/factions/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { destroyFaction };
