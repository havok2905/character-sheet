const destroyMagicItem = (id: string): Promise<Record<string, never>> => {
  return fetch(`/api/magic_items/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { destroyMagicItem };
