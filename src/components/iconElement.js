import React from 'react';
import { useRecoilState } from 'recoil';
import calculateScale from '../utilities/calculateScale';
import createSvgIcon from '../utilities/createSvgIcon';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import {
  iconPaddingState,
  iconState,
  iconStrokeState,
} from '../states/iconography';
import round from '../utilities/round';

const IconElement = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState);
  const [icon, setIcon] = useRecoilState(iconState);
  const [iconStroke, setIconStroke] = useRecoilState(iconStrokeState);
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);

  const size = round(props.size);
  /* Just to align icon examples with typography */
  const iconLineHeight = 1.375;

  const value = baseScaleUnit === 'px' ? size : round(size / baseSize, 3);

  const showValue = props.showValue ? (
    <span className="specs">
      {' '}
      {value}
      {baseScaleUnit}{' '}
    </span>
  ) : (
    ''
  );
  const margin = props.showValue ? `${size * iconLineHeight - size}px` : '0px';

  return (
    <div
      className="iconItem"
      style={{
        marginBottom: margin,
      }}
    >
      {showValue}
      <div
        className="icon"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {createSvgIcon(size, size, iconPadding, `${icon}`, iconStroke)}
      </div>
    </div>
  );
};

export default IconElement;
