import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { IPin } from '../../types/models';
import './_pin.scss';

type IPinProps = {
  focused?: boolean;
  onMouseDown?: (id: string) => void;
  onMouseUp?: (id: string) => void;
  pin: IPin;
  selected?: boolean;
};

const Pin = ({
  focused,
  onMouseDown,
  onMouseUp,
  pin,
  selected
}: IPinProps): ReactElement => {
  const { id, name, x, y } = pin;

  const style = {
    left: `${String(x)}px`,
    top: `${String(y)}px`
  };

  const classList = {
    'pin-body': true,
    'pin-selected': selected,
    'pin-focused': focused
  };

  return (
    <div
      className="pin"
      onMouseDown={() => { if (onMouseDown) onMouseDown(id); }}
      onMouseUp={() => { if (onMouseUp) onMouseUp(id); }}
      style={style}>
      <div className={classNames(classList)}>
        <div className="pin-inner">
        </div>
      </div>
      {
        name && (
          <span className="pin-label">
            {name}
          </span>
        )
      }
    </div>
  )
};

export { Pin };
