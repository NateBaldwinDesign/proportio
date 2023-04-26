import React from 'react';

const ShapeHexagon = (props) => {
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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 15.2348L12 18.5681L18 15.2348V8.76521L12 5.43188L6 8.76521V15.2348ZM12 2L3 7V17L12 22L21 17V7L12 2Z"
        fill={color}
      />
    </svg>
  );
};

export default ShapeHexagon;
