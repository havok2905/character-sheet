import React from 'react';

const Pin = ({
  x,
  y
}) => {
  return (
    <div className="map-pin" style={{ left: `${x}px`, top: `${y}px` }}>
      <div className="map-pin-inner">
      </div>
    </div>
  )
};

export { Pin };
