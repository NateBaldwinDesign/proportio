import React from 'react';
import { useRecoilState } from 'recoil';
import '../styles/iconography.css';
import buildArray from '../utilities/buildArray';
import buildShiftedArray from '../utilities/buildShiftedArray';
import calculateScale from '../utilities/calculateScale';
import capitalize from '../utilities/capitalize';
import ComponentElement from './componentElement';
import ComponentSizeColumn from './componentSizeColumn';
import {
  sizeNamesIncrement,
  sizeNamesDecrement,
  densityNamesIncrement,
  densityNamesDecrement,
} from '../utilities/names';
import { baseSizeState } from '../states/base';
import { typeScaleFormulaState, typeScaleState } from '../states/typography';
import {
  spacingFormulaState,
  spacingScaleFactorState,
} from '../states/spacing';
import {
  componentMinHeightMethodOptionState,
  componentSmallQuantityState,
  componentLargeQuantityState,
  baseComponentTextSizeIndexState,
  baseIconSizeIndexState,
  baseComponentSizeIndexState,
  scaleComponentRadiusState,
  baseComponentRadiusState,
  componentLineHeightState,
  componentPaddingMethodOptionState,
  baseComponentPaddingXIndexState,
  baseComponentPaddingYIndexState,
  componentDensitySmallQuantityState,
  componentDensityLargeQuantityState,
  componentDensityScaleFactorState,
} from '../states/components';
import {
  baseRadiusSizeState,
  radiusScaleFormulaState,
  radiusScaleFactorState,
} from '../states/radius';
import {
  iconScaleState,
  iconScaleFormulaState,
  iconPaddingState,
} from '../states/iconography';
import {
  textIconGapIndexState,
  textIconIconSizeIndexState,
  textIconGapScaleFormulaState
} from "../states/textIconPair"
import tokens from "../utilities/tokens";
import demoComponents from '../utilities/demoComponents'

const Sizes = (props) => {
  const tokenNamePrefix = props.tokenNamePrefix;
  const densityName = props.densityName;
  const sizeArray = props.sizeArray;
  const componentPaddingScale = props.componentPaddingScale;
  const paddingXIndexArray = props.paddingXIndexArray;
  const componentPaddingMethodFormula = props.componentPaddingMethodFormula;
  const paddingYIndexArray = props.paddingYIndexArray;
  const textSizeIndexArray = props.textSizeIndexArray;
  const iconSizeIndexArray = props.iconSizeIndexArray;
  const iconScaleFormula = props.iconScaleFormula;
  const componentScale = props.componentScale;
  const componentMinHeightIndexArray = props.componentMinHeightIndexArray;
  const componentScaleMethodFormula = props.componentScaleMethodFormula;
  const baseRadiusSize = props.baseRadiusSize;
  const radiusScaleFactor = props.radiusScaleFactor;
  const componentRadiusIndexArray = props.componentRadiusIndexArray;
  const radiusScaleFormula = props.radiusScaleFormula;
  const sizeNamesDecrement = props.sizeNamesDecrement;
  const sizeNamesIncrement = props.sizeNamesIncrement;
  const componentLineHeight = props.componentLineHeight;
  const componentRadiusNewIndexValue = props.componentRadiusNewIndexValue;
  const scaleComponentRadius = props.scaleComponentRadius;
  const iconPadding = props.iconPadding;
  const showSpecs = props.showSpecs;
  const componentGapScale = props.componentGapScale;
  const componentGapMethod = props.componentGapMethod;
  const gapIndexArray = props.gapIndexArray;

  const showComponentIcon = props.showComponentIcon;
  const showComponentText = props.showComponentText;

  const sizedComponents = sizeArray.map((size, increment) => {
    const decrementIndex = size * -1 - 1;
    let sizeName =
      size < 0 ? sizeNamesDecrement[decrementIndex] : sizeNamesIncrement[size];
    if (sizeName === undefined) sizeName = 'undefined';

    const newTokenNamePrefix = `${tokenNamePrefix}-${sizeName.replace(
      ' (default)',
      '',
    )}`;

    return <ComponentSizeColumn
      key={`${newTokenNamePrefix}-${decrementIndex}`}
      size={size}
      density={densityName}
      sizeName={sizeName}
      increment={increment}
      newTokenNamePrefix={newTokenNamePrefix}
      componentPaddingScale={componentPaddingScale}
      paddingXIndexArray={paddingXIndexArray}
      componentPaddingMethodFormula={componentPaddingMethodFormula}
      paddingYIndexArray={paddingYIndexArray}
      textSizeIndexArray={textSizeIndexArray}
      iconSizeIndexArray={iconSizeIndexArray}
      iconScaleFormula={iconScaleFormula}
      componentScale={componentScale}
      componentMinHeightIndexArray={componentMinHeightIndexArray}
      componentScaleMethodFormula={componentScaleMethodFormula}
      baseRadiusSize={baseRadiusSize}
      radiusScaleFactor={radiusScaleFactor}
      componentRadiusIndexArray={componentRadiusIndexArray}
      radiusScaleFormula={radiusScaleFormula}
      componentLineHeight={componentLineHeight}
      componentRadiusNewIndexValue={componentRadiusNewIndexValue}
      scaleComponentRadius={scaleComponentRadius}
      iconPadding={iconPadding}
      showSpecs={showSpecs}
      showComponentIcon={showComponentIcon}
      showComponentText={showComponentText}
      componentGapScale={componentGapScale}
      componentGapMethod={componentGapMethod}
      gapIndexArray={gapIndexArray}
    />
  }) 

  return (
    <div className="column column--fitContent">
      <div className="componentColumn_Heading">
        <h5>{capitalize(densityName)}</h5>
      </div>
      <div className="componentColumn">{sizedComponents}</div>
    </div>
  );
};

const ComponentSpecs = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [componentPaddingMethodOption, setComponentPaddingMethodOption] =
    useRecoilState(componentPaddingMethodOptionState);
  const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
  const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(
    spacingScaleFactorState,
  );
  const [spacingFormula, setSpacingFormula] =
    useRecoilState(spacingFormulaState);
  const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(
    typeScaleFormulaState,
  );
  const [componentMinHeightMethodOption, setComponentMinHeightMethodOption] =
    useRecoilState(componentMinHeightMethodOptionState);
  const [componentSmallQuantity, setComponentSmallQuantity] = useRecoilState(
    componentSmallQuantityState,
  );
  const [componentLargeQuantity, setComponentLargeQuantity] = useRecoilState(
    componentLargeQuantityState,
  );
  const [baseComponentPaddingXIndex, setBaseComponentPaddingXIndex] =
    useRecoilState(baseComponentPaddingXIndexState);
  const [baseComponentPaddingYIndex, setBaseComponentPaddingYIndex] =
    useRecoilState(baseComponentPaddingYIndexState);
  // Should get rid of these two. Customizing adds unnecessary complexity
  const [baseComponentTextSizeIndex, setBaseComponentTextSizeIndex] =
    useRecoilState(baseComponentTextSizeIndexState);

  const [baseComponentSizeIndex, setBaseComponentSizeIndex] = useRecoilState(
    baseComponentSizeIndexState,
  );
  const [scaleComponentRadius, setScaleComponentRadiusState] = useRecoilState(
    scaleComponentRadiusState,
  );
  const [baseComponentRadius, setBaseComponentRadiusState] = useRecoilState(
    baseComponentRadiusState,
  );
  const [componentLineHeight, setComponentLineHeightState] = useRecoilState(
    componentLineHeightState,
  );

  const [baseRadiusSize, setBaseRadiusSize] =
    useRecoilState(baseRadiusSizeState);
  const [radiusScaleFormula, setRadiusScaleFormula] = useRecoilState(
    radiusScaleFormulaState,
  );
  const [radiusScaleFactor, setRadiusScaleFactor] = useRecoilState(
    radiusScaleFactorState,
  );

  const [iconScaleFormula, setIconScaleFormula] = useRecoilState(
    iconScaleFormulaState,
  );
  const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState);

  const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(
    textIconGapIndexState,
  );
  const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(
    textIconIconSizeIndexState,
  );
  const [textIconGapScaleFormula, setTextIconGapScaleFormula] = useRecoilState(
    textIconGapScaleFormulaState,
  );
  const [componentDensitySmallQuantity, setComponentDensitySmallQuantity] =
    useRecoilState(componentDensitySmallQuantityState);
  const [componentDensityLargeQuantity, setComponentDensityLargeQuantity] =
    useRecoilState(componentDensityLargeQuantityState);
  const [componentDensityScaleFactor, setComponentDensityScaleFactor] =
    useRecoilState(componentDensityScaleFactorState);

  const showSpecs = props.showSpecs;
  const showComponentIcon = props.showComponentIcon;
  const showComponentText = props.showComponentText;

  const rowClassName = showSpecs ? 'row row--comfortable' : 'row row--spacious';
  // Clear out component tokens
  tokens.component = []
  demoComponents.length = 0;

  const componentPaddingScale =
    componentPaddingMethodOption === 'typeScale'
      ? typeScale
      : componentPaddingMethodOption === 'spacingScale'
      ? spacingScaleFactor
      : 1;
  const componentPaddingMethodFormula =
    componentPaddingMethodOption === 'typeScale'
      ? typeScaleFormula
      : componentPaddingMethodOption === 'spacingScale'
      ? spacingFormula
      : undefined;
  const componentScale =
    componentMinHeightMethodOption === 'typeScale'
      ? typeScale
      : componentMinHeightMethodOption === 'spacingScale'
      ? spacingScaleFactor
      : 1;
  const componentScaleMethodFormula =
    componentMinHeightMethodOption === 'typeScale'
      ? typeScaleFormula
      : componentMinHeightMethodOption === 'spacingScale'
      ? spacingFormula
      : undefined;
  const componentGapScale =
    textIconGapScaleFormula === 'typeScale'
      ? typeScale
      : textIconGapScaleFormula === 'spacingScale'
      ? spacingScaleFactor
      : 'none';
  const componentGapMethod =
    textIconGapScaleFormula === 'typeScale'
      ? typeScaleFormula
      : textIconGapScaleFormula === 'spacingScale'
      ? spacingFormula
      : 'none';

  /* Create array of size indexes to generate components */
  let sizeArray = buildArray(componentSmallQuantity, componentLargeQuantity);
  let densityArray = buildArray(
    componentDensitySmallQuantity,
    componentDensityLargeQuantity,
  );

  /* Create arrays of sub-element indexes */
  const densityPaddingXIndexArray = buildShiftedArray(
    componentDensitySmallQuantity,
    componentDensityLargeQuantity,
    baseComponentPaddingXIndex,
    componentDensityScaleFactor,
  );

  const densityPaddingYIndexArray = buildShiftedArray(
    componentDensitySmallQuantity,
    componentDensityLargeQuantity,
    baseComponentPaddingYIndex,
    componentDensityScaleFactor,
  );
  const gapIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    textIconGapIndex,
  );

  const textSizeIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    baseComponentTextSizeIndex,
  );
  const iconSizeIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    textIconIconSizeIndex,
  );
  const componentMinHeightIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    baseComponentSizeIndex,
  );
  const componentRadiusIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    baseComponentRadius,
  );

  const componentRadiusNewIndexValue = calculateScale(
    baseRadiusSize,
    radiusScaleFactor,
    baseComponentRadius,
    radiusScaleFormula,
  );

  /* Map each density */
  const densityComponents = densityArray.map((density, densityIncrement) => {
    const paddingXIndexArray = buildShiftedArray(
      componentSmallQuantity,
      componentLargeQuantity,
      densityPaddingXIndexArray[densityIncrement],
    );
    const paddingYIndexArray = buildShiftedArray(
      componentSmallQuantity,
      componentLargeQuantity,
      densityPaddingYIndexArray[densityIncrement],
    );

    const decrementIndex = density * -1 - 1;
    let densityName =
      density < 0
        ? densityNamesDecrement[decrementIndex]
        : densityNamesIncrement[density];
    if (densityName === undefined) densityName = 'undefined';

    const tokenNamePrefix = `component-${densityName.replace(
      ' (default)',
      '',
    )}`;

    const tokenNamePrefix = `component-${densityName.replace(' (default)', '')}`;
    
    return <Sizes 
        key={`${densityName}-${sizeArray}`}
        tokenNamePrefix={tokenNamePrefix}
        densityName={densityName}
        sizeArray={sizeArray}
        componentPaddingScale={componentPaddingScale}
        paddingXIndexArray={paddingXIndexArray}
        componentPaddingMethodFormula={componentPaddingMethodFormula}
        paddingYIndexArray={paddingYIndexArray}
        textSizeIndexArray={textSizeIndexArray}
        iconSizeIndexArray={iconSizeIndexArray}
        iconScaleFormula={iconScaleFormula}
        componentScale={componentScale}
        componentMinHeightIndexArray={componentMinHeightIndexArray}
        componentScaleMethodFormula={componentScaleMethodFormula}
        baseRadiusSize={baseRadiusSize}
        radiusScaleFactor={radiusScaleFactor}
        componentRadiusIndexArray={componentRadiusIndexArray}
        radiusScaleFormula={radiusScaleFormula}
        sizeNamesDecrement={sizeNamesDecrement}
        sizeNamesIncrement={sizeNamesIncrement}
        componentLineHeight={componentLineHeight}
        componentRadiusNewIndexValue={componentRadiusNewIndexValue}
        scaleComponentRadius={scaleComponentRadius}
        iconPadding={iconPadding}
        showSpecs={showSpecs}
        componentGapScale={componentGapScale}
        componentGapMethod={componentGapMethod}
        gapIndexArray={gapIndexArray}
        showComponentIcon={showComponentIcon}
        showComponentText={showComponentText}
      />
    );
  });

  return (
    <>
      <div className={rowClassName}>{densityComponents}</div>
    </>
  );
};

export default ComponentSpecs;
