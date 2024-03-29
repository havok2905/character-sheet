import React, { FC, useState } from 'react';

import { Modal } from '../Modal';

interface IDeleteButtonProps {
  buttonText: string;
  handleDelete: () => void;
}

const DeleteButton: FC<IDeleteButtonProps> = ({
  buttonText,
  handleDelete
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="button button-destructive" onClick={() => setIsOpen(true)}>
        {buttonText}
      </button>
      {
        isOpen && (
          <Modal
            onCloseModal={() => setIsOpen(false)}
            onCloseModalOverlay={() => setIsOpen(false)}>
            <h2>Delete this item?</h2>
            <button className="button button-destructive" onClick={handleDelete}>Confirm</button>
            <button className="button" onClick={() => setIsOpen(false)}>Cancel</button>
          </Modal>
        )
      }
    </>
  );
};

export { DeleteButton };
