import React, { ReactElement } from 'react';

type IPin = {
  id: string;
  name: string;
  x: number;
  y: number;
}

type IPinProps = {
  onMouseDown: Function;
  onMouseUp: Function;
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
      onMouseDown={() => onMouseDown(id)}
      onMouseUp={() => onMouseUp(id)}
      style={style}>
      <div className="map-pin-inner">
      </div>
    </div>
  )
};

export { Pin };
