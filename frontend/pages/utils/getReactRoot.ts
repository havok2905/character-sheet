import { createRoot, Root } from 'react-dom/client';

interface IBootstrapperData {
  container?: HTMLElement;
  root?: Root;
}

const getReactRoot = (id: string): IBootstrapperData => {
  const container = document.getElementById(id);

  if (!container) return {};

  return {
    container,
    root: createRoot(container)
  };
};

export { getReactRoot };