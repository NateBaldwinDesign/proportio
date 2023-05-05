import React from 'react';
import {
    containerSmallSizesState,
    containerLargeSizesState,
    containerBaseRadiusIndexState,
    containerBaseElevationIndexState,
    containerRadiusScaleFactorState
} from '../states/containers';
import {
    baseElevationSizeState,
    elevationScaleFactorState,
    elevationSmallQuantityState,
    elevationLargeQuantityState,
    elevationScaleFormulaState,
    elevationOffsetYState
} from "../states/elevation"
import tokens from "../utilities/tokens";
import { useRecoilState } from 'recoil';
import { baseScaleUnitState, baseSizeState } from "../states/base";
import round from "../utilities/round";
import "../styles/container.css";
import ComponentElement from './componentElement';
import demoComponents from '../utilities/demoComponents';
import capitalize from '../utilities/capitalize';

const ContainerElement = (props) => {
  const elevation = props.elevation;
  const radius = props.radius;
  const offsetY = props.offsetY;
  const spec = props.spec;
  const sizeName = props.sizeName;
  const containerElevation = props.containerElevation;
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState)
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [containerBaseRadiusIndex, setContainerBaseRadiusIndex] = useRecoilState(containerBaseRadiusIndexState)
  const [containerRadiusScaleFactor, setContainerRadiusScaleFactor] = useRecoilState(containerRadiusScaleFactorState)

  const paddingY = props.paddingY;
  const paddingX = props.paddingX;
  const margin = elevation > 0 ? elevation : 4;

  const defaultComponent = demoComponents.filter((item) => item.name === "component-comfortable (default)-medium (default)");

  // const gapSpecAnnotation =
  //     <div
  //       className="specGap specs"
  //       style={{ marginLeft: `${paddingX}px` }}
  //     >
  //       {`Gap: ${
  //         baseScaleUnit === 'px' ? round(gapSize) : round(gapSize / baseSize, 3)
  //       }${baseScaleUnit}`}
  //     </div>
  //   ;

  const elevationSpec = (
    <div className="containerspecElevation specs">
        {`Blur: ${
          baseScaleUnit === 'px' ? round(elevation) : round(elevation / baseSize, 3)
        }${baseScaleUnit}`}
          <br/> 
        {`Distance: ${baseScaleUnit === 'px' ? round(offsetY) : round(offsetY / baseSize, 3)}${baseScaleUnit}`}
      </div>
  )

  const elevationSpecAnnotation = (containerElevation) ? elevationSpec : " ";
  const specAnnotations = (
    <>
      <div className="containerspecPaddingX specs">
        {' '}
        {`Pad-X: ${paddingX}${baseScaleUnit}`}{' '}
      </div>
      <div className="containerspecPaddingY specs">
        {' '}
        {`Pad-Y: ${paddingY}${baseScaleUnit}`}{' '}
      </div>
      {/* {gapSpecAnnotation} */}
      <div className="containerspecRadius specs">
        {' '}
        {`R: ${radius}${baseScaleUnit}`}{' '}
      </div>
      {elevationSpecAnnotation}
    </>
  );
  const showSpecs = spec ? specAnnotations : '';

  return (
    <div className="specRowItem"  key={`containerSpecItem${sizeName}${offsetY}${elevation}`}>
      <h5> {capitalize(sizeName)} </h5>
      <div className={spec ? 'containerSpecWrapper' : 'containerWrapper'}>
        {/* <span className="specs"> {value}{baseScaleUnit} </span> */}
        <div
          className="containerElement apply-font-main"
          style={{
            boxShadow: `0 ${offsetY}px ${elevation}px var(--elevationDemoShadowColor)`,
            marginBottom: `${margin}px`,
            borderRadius: `${radius}px`
          }}
        >
          <div
            className={spec ? `paddingUnit padTop` : `padTop`}
            style={{
              height: `${paddingY}${baseScaleUnit}`,
              width: `${paddingY}${baseScaleUnit}`,
            }}
          ></div>
          <div
            className={
              spec ? `paddingUnit padBottom` : ` padBottom`
            }
            style={{
              height: `${paddingY}${baseScaleUnit}`,
              width: `${paddingY}${baseScaleUnit}`,
            }}
          ></div>
          <div
            className={spec ? 'paddingUnit padLeft' : 'padLeft'}
            style={{
              height: `${paddingX}${baseScaleUnit}`,
              width: `${paddingX}${baseScaleUnit}`,
            }}
          ></div>
          <div
            className={spec ? 'paddingUnit padRight' : 'padRight'}
            style={{
              height: `${paddingX}${baseScaleUnit}`,
              width: `${paddingX}${baseScaleUnit}`,
            }}
          ></div>
          <div
            className={spec ? 'paddingUnit compRadius' : 'compRadius'}
            style={{
              height: `${radius * 2}${baseScaleUnit}`,
              width: `${radius * 2}${baseScaleUnit}`,
              borderRadius: `${radius}${baseScaleUnit}`,
            }}
          ></div>

          <div className="containerContent">
            <p className="apply-font-main">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non nisl ac dui gravida pellentesque. Phasellus et cursus dui, at fringilla risus. Vestibulum a tortor euismod, fermentum tortor sed, euismod turpis.
            </p>
            {/* <div
              // className={spec ? 'paddingUnit innerGap' : 'innerGap'}
              style={{
                height: `${gapSize}px`,
                width: `${gapSize / 2}px`,
              }}
            ></div> */}
            {/* {defaultComponent[0].value} */}
          </div>

        </div>
        {showSpecs}
      </div>
    </div>
  );
};

export default ContainerElement;
