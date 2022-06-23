const destroyPin = (id: string): Promise<any> => {
  return fetch(`/pins/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { destroyPin };
