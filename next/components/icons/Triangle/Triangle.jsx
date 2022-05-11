import React from 'react';

const Triangle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#eef1f6',
          fillOpacity: 1
        }}
        d="M33.293 26.434 20.922 5.059a3.379 3.379 0 0 0-5.844 0L2.707 26.434a3.372 3.372 0 0 0-.004 3.375A3.38 3.38 0 0 0 5.63 31.5H30.37a3.38 3.38 0 0 0 2.926-1.691 3.372 3.372 0 0 0-.004-3.375Zm0 0"
      />
    </svg>
  );
};

export default Triangle;
