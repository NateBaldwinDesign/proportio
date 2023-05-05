import React from 'react';
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';

const ElevationElement = (props) => {
  const elevation = props.elevation;
  const offsetY = props.offsetY;
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const value =
    baseScaleUnit === 'px' ? round(elevation) : round(elevation / baseSize, 3);
  const offsetValue =
    baseScaleUnit === 'px' ? round(offsetY) : round(offsetY / baseSize, 3);

  const margin = elevation > 0 ? elevation : 4;
  return (
    <div className="elevationItem">
      <span className="specs">
        Blur: {value}
        {baseScaleUnit}
        <br />
        Distance: {offsetValue}
        {baseScaleUnit}
      </span>
      <div
        className="elevation"
        style={{
          boxShadow: `0 ${offsetY}px ${elevation}px var(--elevationDemoShadowColor)`,
          marginBottom: `${margin}px`,
        }}
      ></div>
    </div>
  );
};

export default ElevationElement;
