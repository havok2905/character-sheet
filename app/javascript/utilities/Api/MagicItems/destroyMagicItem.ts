const destroyMagicItem = (id: string): Promise<any> => {
  return fetch(`/magic_items/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { destroyMagicItem };
