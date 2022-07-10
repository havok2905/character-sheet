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
  const { id, x, y } = pin;

  const style = {
    left: `${String(x)}px`,
    top: `${String(y)}px`
  };

  const classList = {
    'pin': true,
    'pin-selected': selected,
    'pin-focused': focused
  };

  return (
    <div
      className={classNames(classList)}
      onMouseDown={() => { if (onMouseDown) onMouseDown(id); }}
      onMouseUp={() => { if (onMouseDown) onMouseUp(id); }}
      style={style}>
      <div className="pin-inner">
      </div>
    </div>
  )
};

export { Pin };
