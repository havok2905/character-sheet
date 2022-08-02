const destroyArticle = (id: string): Promise<Record<string, never>> => {
  return fetch(`/api/wiki/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { destroyArticle };
