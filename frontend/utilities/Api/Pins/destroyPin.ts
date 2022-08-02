const destroyPin = (id: string): Promise<Record<string, never>> => {
  return fetch(`/api/pins/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { destroyPin };
