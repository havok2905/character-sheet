enum ToastCollectionErrorTypes {
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn'
}

interface IToast {
  errorType: ToastCollectionErrorTypes;
  expiry: Date;
  message: string;
}

export {
  IToast,
  ToastCollectionErrorTypes
};
