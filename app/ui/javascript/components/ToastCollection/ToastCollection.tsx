import { createPortal } from 'react-dom'
import React, { ReactElement, useContext, useEffect, useRef } from 'react';
import { Toast } from './Toast';
import { ToastCollectionContext } from './ToastCollectionContext';

const ToastCollection = (): ReactElement | null => {
  const { toasts } = useContext(ToastCollectionContext);

  const toastCollectionRootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const toastCollectionRoot = document.getElementById('toast-collection-root');
    toastCollectionRootRef.current = toastCollectionRoot;
  }, []);

  if (!toastCollectionRootRef.current) return null;

  return createPortal((
    <div className='toast-collection'>
      {toasts.map(toast => <Toast toast={toast}/>)}
    </div>
  ), toastCollectionRootRef.current);  
};

export { ToastCollection };
