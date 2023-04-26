import React from 'react';

const ShapeElevation = (props) => {
  const color = props.color;
  const size = props.size ? props.size : 24;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 4V16H22V2H8V4H20Z" fill={color} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 8V22H16V8H2ZM14 10H4V20H14V10Z"
        fill={color}
      />
      <path d="M17 7H5V5H19V19H17V7Z" fill={color} />
    </svg>
  );
};

export default ShapeElevation;
