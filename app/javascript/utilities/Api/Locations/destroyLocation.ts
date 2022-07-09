const destroyLocation = (id: string): Promise<Record<string, never>> => {
  return fetch(`/locations/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { destroyLocation };
