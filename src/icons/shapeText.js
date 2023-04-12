import React from "react";

const ShapeText = (props) => {
  const color = props.color;
  const size = (props.size) ? props.size : 24;

  return (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"><path d="M6.5 3H3V6.5H4V4H6.5V3Z" fill={color} /><path d="M8.5 4V3H11V4H8.5Z" fill={color} /><path d="M13 4H15.5V3H13V4Z" fill={color} /><path d="M17.5 3V4H20V6.5H21V3H17.5Z" fill={color} /><path d="M21 8.5H20V11H21V8.5Z" fill={color} /><path d="M21 13H20V15.5H21V13Z" fill={color} /><path d="M21 17.5H20V20H17.5V21H21V17.5Z" fill={color} /><path d="M15.5 21V20H13V21H15.5Z" fill={color} /><path d="M11 21V20H8.5V21H11Z" fill={color} /><path d="M6.5 21V20H4V17.5H3V21H6.5Z" fill={color} /><path d="M3 15.5H4V13H3V15.5Z" fill={color} /><path d="M3 11H4V8.5H3V11Z" fill={color} /><path d="M11 9.5H7V7.5H17V9.5H13V16.5H11V9.5Z" fill={color} />
    </svg>
  );
};

export default ShapeText;

