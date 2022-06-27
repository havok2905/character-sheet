import React, { ReactElement, useEffect, useState } from 'react';
import { IToast } from '../../types/toasts';
import { ToastCollectionContext } from './ToastCollectionContext';
import { ToastCollectionErrorTypes } from '../../types/toasts';

const ToastCollectionContextProvider = ({
  children
}): ReactElement => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setToasts((toasts => {
        const newToasts = toasts.filter(toast => {
          return toast.expiry.getTime() > new Date().getTime();
        });

        return [...newToasts];
      }));
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  const add = (
    errorType: ToastCollectionErrorTypes,
    message: string
  ) => {
    const duration = 5000;
    const now = new Date();
    const expiry = new Date(now.getTime() + duration);
    const toast = { errorType, expiry, message };

    setToasts((toasts => [toast, ...toasts]));
  };

  return (
    <ToastCollectionContext.Provider value={{ add, toasts }}>
      {children}
    </ToastCollectionContext.Provider>
  );
};

export { ToastCollectionContextProvider };
