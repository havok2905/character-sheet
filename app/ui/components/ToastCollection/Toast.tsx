import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { IToast, ToastCollectionErrorTypes } from '../../types/toasts';
import './_toast.scss';

interface IToastProps {
  toast: IToast
}

const Toast = ({
  toast
}: IToastProps): ReactElement => {
  const { errorType, message } = toast;

  const classList = {
    'toast': true,
    'toast-error': errorType === ToastCollectionErrorTypes.ERROR,
    'toast-info': errorType === ToastCollectionErrorTypes.INFO,
    'toast-warn': errorType === ToastCollectionErrorTypes.WARN
  };

  return (
    <div className={classNames(classList)}>
      {message}
    </div>
  );
};

export { Toast }
