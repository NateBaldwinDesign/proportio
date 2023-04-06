import React from "react";

const ElevationElement = (props) => {
  const elevation = props.elevation;
  const margin = elevation > 0 ? elevation : 4;
  return (
    <div className="elevationItem">
      <span className="specs"> {Math.round(elevation)} </span>
      <div
        className="elevation"
        style={{
          boxShadow: `0 ${elevation}px ${elevation}px var(--elevationDemoShadowColor)`,
          marginBottom: `${margin}px`,
        }}
      ></div>
    </div>
  );
};

export default ElevationElement;
