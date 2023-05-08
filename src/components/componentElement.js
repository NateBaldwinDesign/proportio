import React from 'react';
import { useRecoilState } from 'recoil';
import createSvgIcon from '../utilities/createSvgIcon';
import '../styles/component.css';
import { iconState, iconStrokeState } from '../states/iconography';
import { baseScaleUnitState, baseSizeState } from '../states/base';
import round from '../utilities/round';

const ComponentElement = (props) => {
  const [icon, setIcon] = useRecoilState(iconState);
  const [iconStroke, setIconStroke] = useRecoilState(iconStrokeState);
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);

  const componentMinHeight = props.componentMinHeight;
  const paddingX = props.paddingX;
  const paddingY = props.paddingY;
  const typeSize = props.typeSize;
  const iconSize = props.iconSize;
  const gapSize = props.gapSize;
  const spec = props.spec;
  const iconPadding = props.iconPadding;
  const componentLineHeight = props.componentLineHeight;
  const computedHeight = paddingY * 2 + Number(componentLineHeight) * typeSize;

  const showComponentIcon = props.showComponentIcon;
  const showComponentText = props.showComponentText;

  const componentLabel = showComponentText ? (
    <div className={spec ? 'componentTextSpec' : 'componentText'}>
      {' '}
      Component label{' '}
    </div>
  ) : (
    ''
  );
  const componentIcon = showComponentIcon ? (
    <div className={spec ? 'componentIconSpec' : 'componentIcon'}>
      {createSvgIcon(iconSize, iconSize, iconPadding, icon, iconStroke)}
    </div>
  ) : (
    ''
  );
  const componentGap =
    showComponentIcon && showComponentText ? (
      <div
        className={spec ? 'paddingUnit textIconGap' : 'textIconGap'}
        style={{
          width: `${gapSize}px`,
          height: `${gapSize / 2}px`,
        }}
      ></div>
    ) : (
      ''
    );
  const padTopClass = showComponentText ? 'padTop' : 'padTopAlt';
  const padBottomClass = showComponentText ? 'padBottom' : 'padBottomAlt';
  const gapSpecAnnotation =
    !showComponentIcon || !showComponentText ? (
      ''
    ) : (
      <div
        className="specGap specs"
        style={{ marginLeft: `${Math.round(paddingX)}px` }}
      >
        {`Gap: ${
          baseScaleUnit === 'px' ? round(gapSize) : round(gapSize / baseSize, 3)
        }${baseScaleUnit}`}
      </div>
    );

  const biggestHeight =
    computedHeight > componentMinHeight ? computedHeight : componentMinHeight;
  const radius =
    props.radius > biggestHeight / 2 ? biggestHeight / 2 : props.radius;

  const specAnnotations = (
    <>
      <div className="specHeight specs">
        {' '}
        {`Height: ${
          baseScaleUnit === 'px'
            ? round(computedHeight)
            : round(computedHeight / baseSize, 3)
        }${baseScaleUnit} 
        \n (Min: ${
          baseScaleUnit === 'px'
            ? round(componentMinHeight)
            : round(componentMinHeight / baseSize, 3)
        }${baseScaleUnit})`}{' '}
      </div>
      <div className="specType specs">
        {' '}
        {`Font: ${
          baseScaleUnit === 'px'
            ? round(typeSize)
            : round(typeSize / baseSize, 3)
        }${baseScaleUnit}`}{' '}
      </div>
      <div
        className="specIcon specs"
        style={{
          marginLeft: `${Math.round(paddingX)}px`,
        }}
      >
        {`Icon: ${
          baseScaleUnit === 'px'
            ? round(iconSize)
            : round(iconSize / baseSize, 3)
        }${baseScaleUnit}`}
      </div>
      <div className="specPaddingX specs">
        {' '}
        {`Pad-X: ${
          baseScaleUnit === 'px'
            ? round(paddingX)
            : round(paddingX / baseSize, 3)
        }${baseScaleUnit}`}{' '}
      </div>
      <div className="specPaddingY specs">
        {' '}
        {`Pad-Y: ${
          baseScaleUnit === 'px'
            ? round(paddingY)
            : round(paddingY / baseSize, 3)
        }${baseScaleUnit}`}{' '}
      </div>
      {gapSpecAnnotation}
      <div className="specRadius specs">
        {' '}
        {`R: ${
          baseScaleUnit === 'px' ? round(radius) : round(radius / baseSize, 3)
        }${baseScaleUnit}`}{' '}
      </div>
    </>
  );
  const showSpecs = spec ? specAnnotations : '';

  const paddingElementFixedSize = '10';

  return (
    <div className={spec ? 'componentSpecWrapper' : 'componentWrapper'}>
      <div className={spec ? 'componentSpecItemWrapper' : ''}>
        <div
          style={{
            minWidth: `${componentMinHeight}px`,
            minHeight: `${componentMinHeight}px`,
            fontSize: `${typeSize}px`,
            lineHeight: `${componentLineHeight}`,
            borderRadius: `${radius}px`,
          }}
          className="component"
        >
          <div
            className={spec ? `paddingUnit ${padTopClass}` : `${padTopClass}`}
            style={{
              height: `${paddingY}px`,
              width: `${paddingElementFixedSize}px`,
            }}
          ></div>
          <div
            className={
              spec ? `paddingUnit ${padBottomClass}` : ` ${padBottomClass}`
            }
            style={{
              height: `${paddingY}px`,
              width: `${paddingElementFixedSize}px`,
            }}
          ></div>
          <div
            className={spec ? 'paddingUnit padLeft' : 'padLeft'}
            style={{
              height: `${paddingElementFixedSize}px`,
              width: `${paddingX}px`,
            }}
          ></div>
          <div
            className={spec ? 'paddingUnit padRight' : 'padRight'}
            style={{
              height: `${paddingElementFixedSize}px`,
              width: `${paddingX}px`,
            }}
          ></div>
          <div
            className={spec ? 'paddingUnit compRadius' : 'compRadius'}
            style={{
              height: `${radius * 2}px`,
              width: `${radius * 2}px`,
              borderRadius: `${radius}px`,
            }}
          ></div>

          {componentIcon}
          {componentGap}
          {componentLabel}
        </div>
      </div>
      {showSpecs}
    </div>
  );
};

export default ComponentElement;
