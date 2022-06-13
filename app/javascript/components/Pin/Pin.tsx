import React, { ReactElement } from 'react';

type IPinProps = {
  x: number;
  y: number;
};

const Pin = ({ x, y }: IPinProps): ReactElement => {
  const style = {
    left: `${String(x)}px`,
    top: `${String(y)}px`
  };

  return (
    <div className="map-pin" style={style}>
      <div className="map-pin-inner">
      </div>
    </div>
  )
};

export { Pin };
