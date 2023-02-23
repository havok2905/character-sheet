import React, { ReactElement, ReactNode, useState } from 'react';
import { InfoIcon } from '../Icons';
import './_toggleItem.scss';

interface IToggleItemProps {
  children: ReactNode,
  heading: string
}

const ToggleItem = ({
  children,
  heading
}: IToggleItemProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(!isOpen);

  return (
    <div className="toggle-item">
      <div className="toggle-header" onClick={onClick}>
        <p>
          <strong>
            <InfoIcon/>
            {heading}
          </strong>
        </p>
      </div>
      <div>
        {isOpen && children}
      </div>
    </div>
  )
};

export { ToggleItem };
