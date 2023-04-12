import React from "react";
import { useRecoilState } from 'recoil';

const ElevationElement = (props) => {
  const elevation = props.elevation;
  const margin = elevation > 0 ? elevation : 4;
  return (
    <div className="elevationItem">
      <span className="specs"> {Math.round(elevation)}px </span>
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
