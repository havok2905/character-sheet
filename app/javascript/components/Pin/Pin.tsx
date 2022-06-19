import React, { ReactElement } from 'react';

type IPinProps = {
  onClick?: ()=> void;
  selected?: boolean;
  x: number;
  y: number;
};

const Pin = ({
  onClick,
  selected,
  x,
  y
}: IPinProps): ReactElement => {
  const style = {
    backgroundColor: selected ? 'green' : 'red',
    left: `${String(x)}px`,
    top: `${String(y)}px`
  };

  const handleOnClick = onClick ? () => {
    onClick();
  } : undefined;

  return (
    <div
      className="map-pin"
      onClick={handleOnClick}
      style={style}>
      <div className="map-pin-inner">
      </div>
    </div>
  )
};

export { Pin };
