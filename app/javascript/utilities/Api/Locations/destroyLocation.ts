const destroyLocation = (id: string): Promise<any> => {
  return fetch(`/locations/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export {
  destroyLocation
};
