import React from 'react';

const Logo = (props) => {
  const color = props.color;
  const size = props.size;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={size} height={size} fill="transparent" />
      <rect
        x="3.5"
        y="3.5"
        width="25"
        height="25"
        stroke={color}
        strokeWidth="3"
      />
      <rect
        x="3.5"
        y="19.5"
        width="9"
        height="9"
        stroke={color}
        strokeWidth="3"
      />
      <rect
        x="3.5"
        y="12.5"
        width="16"
        height="16"
        stroke={color}
        strokeWidth="3"
      />
      <rect
        x="28.1432"
        y="2.54916"
        width="2"
        height="35.4735"
        transform="rotate(45 28.1432 2.54916)"
        fill={color}
      />
    </svg>
  );
};

export default Logo;
