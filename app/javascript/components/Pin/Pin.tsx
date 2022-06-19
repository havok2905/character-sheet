import React, { ReactElement } from 'react';
import { IPin } from '../types/models';

type IPinProps = {
  onMouseDown?: (id: string) => void;
  onMouseUp?: (id: string) => void;
  pin: IPin;
  selected?: boolean;
};

const Pin = ({
  onMouseDown,
  onMouseUp,
  pin,
  selected
}: IPinProps): ReactElement => {
  const { id, x, y } = pin;

  const style = {
    backgroundColor: selected ? 'green' : 'red',
    left: `${String(x)}px`,
    top: `${String(y)}px`
  };

  return (
    <div
      className="map-pin"
      onMouseDown={() => { if (onMouseDown) onMouseDown(id); }}
      onMouseUp={() => { if (onMouseDown) onMouseUp(id); }}
      style={style}>
      <div className="map-pin-inner">
      </div>
    </div>
  )
};

export { Pin };
