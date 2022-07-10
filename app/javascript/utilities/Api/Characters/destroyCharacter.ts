const destroyCharacter = (id: string): Promise<Record<string, never>> => {
  return fetch(`/characters/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { destroyCharacter };
