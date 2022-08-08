import { createPortal } from 'react-dom'
import React, { ReactElement, useEffect } from 'react';
import { CloseIcon } from '../Icons';
import './_modal.scss';

const Modal = ({
  children,
  onCloseModal,
  onCloseModalOverlay
}): ReactElement => {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName('html')[0];
    const htmlEl = document.getElementsByTagName('body')[0];

    bodyEl.style['overflow-y'] = 'hidden';
    htmlEl.style['overflow-y'] = 'hidden';

    return () => {
      const bodyEl = document.getElementsByTagName('html')[0];
      const htmlEl = document.getElementsByTagName('body')[0];

      bodyEl.style['overflow-y'] = '';
      htmlEl.style['overflow-y'] = '';
    };
  }, []);

  const handleOnCloseModal = () => {
    onCloseModal();
  };

  const handleOnCloseModalOverlay = e => {
    if (e.target === e.currentTarget) onCloseModalOverlay();
  };

  const getModal = () => {
    return (
      <div className="modal" onClick={handleOnCloseModalOverlay}>
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-close-button" onClick={handleOnCloseModal}>
              <CloseIcon/>
            </div>
          </div>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return createPortal(
    getModal(),
    document.getElementById('modal-root')
  );  
};

export { Modal };
