import { createContext } from 'react';
import { IToast, ToastCollectionErrorTypes } from '../../types/toasts';

interface IToastCollectionContext {
  add: (errorType: ToastCollectionErrorTypes, message: string) => void;
  toasts: IToast[];
}

const ToastCollectionContext = createContext<IToastCollectionContext>({} as IToastCollectionContext);

export { ToastCollectionContext };
