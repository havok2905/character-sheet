import React, { FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import { InfoIcon } from '../Icons';
import './_toggleItem.scss';

interface IToggleItemProps {
  children: ReactNode,
  heading: string
}

const ToggleItem: FC<IToggleItemProps> = ({
  children,
  heading
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(!isOpen);

  const titleClassList = {
    'toggle-item-title': true,
    'toggle-item-title-open': isOpen
  };

  return (
    <div className="toggle-item">
      <div className="toggle-header" onClick={onClick}>
        <p className={classNames(titleClassList)}>
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
