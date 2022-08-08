import React, { ReactElement, useState } from 'react';

import { Modal } from '../Modal';

interface IDeleteButtonProps {
  buttonText: string;
  handleDelete: () => void;
}

const DeleteButton = ({
  buttonText,
  handleDelete
}: IDeleteButtonProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="button button-red" onClick={() => setIsOpen(true)}>
        {buttonText}
      </button>
      {
        isOpen && (
          <Modal
            onCloseModal={() => setIsOpen(false)}
            onCloseModalOverlay={() => setIsOpen(false)}>
            <h1>Delete this item?</h1>
            <button className="button button-red" onClick={handleDelete}>Confirm</button>
            <button className="button" onClick={() => setIsOpen(false)}>Cancel</button>
          </Modal>
        )
      }
    </>
  );
};

export { DeleteButton };
