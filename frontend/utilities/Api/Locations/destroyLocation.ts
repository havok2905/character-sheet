const destroyLocation = (id: string): Promise<Record<string, never>> => {
  return fetch(`/api/locations/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { destroyLocation };
