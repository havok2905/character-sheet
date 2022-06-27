import { createRoot, Root } from 'react-dom/client';

type IBootstrapperData = {
  container: HTMLElement | null,
  root: Root | null
};

const getReactRoot = (id: string): IBootstrapperData => {
  const response = {
    container: null,
    root: null
  };

  const container = document.getElementById(id);
  
  if (container) {
    response.container = container;
    response.root = createRoot(container!)
  }

  return response;
};

export { getReactRoot };