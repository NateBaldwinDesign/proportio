import React from "react";
import {
  useRecoilState
} from 'recoil';
import "../styles/iconography.css";
import buildArray from "../utilities/buildArray";
import buildShiftedArray from "../utilities/buildShiftedArray";
import calculateScale from "../utilities/calculateScale";
import capitalize from "../utilities/capitalize";
import ComponentElement from "./componentElement";
import ComponentSizeColumn from "./componentSizeColumn";
import {
  sizeNamesIncrement,
  sizeNamesDecrement
} from "../utilities/names"
import {baseSizeState} from '../states/base';
import {
  typeScaleFormulaState,
  typeScaleState
} from '../states/typography'
import {
  spacingFormulaState,
  spacingScaleFactorState
} from '../states/spacing'
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
  baseComponentPaddingYIndexState
} from "../states/components"
import {
  baseRadiusSizeState,
  radiusScaleFormulaState,
  radiusScaleFactorState
} from '../states/radius'
import {
  iconScaleState,
  iconScaleFormulaState,
  iconPaddingState
} from '../states/iconography'
import {
  textIconGapIndexState,
  textIconIconSizeIndexState,
  textIconGapScaleFormulaState
} from "../states/textIconPair"

const ComponentSpecs = (props) => {  
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [componentPaddingMethodOption, setComponentPaddingMethodOption] = useRecoilState(componentPaddingMethodOptionState)
  const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
  const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactorState);
  const [spacingFormula, setSpacingFormula] = useRecoilState(spacingFormulaState);
  const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState)
  const [componentMinHeightMethodOption, setComponentMinHeightMethodOption] = useRecoilState(componentMinHeightMethodOptionState)
  const [componentSmallQuantity, setComponentSmallQuantity] = useRecoilState(componentSmallQuantityState);
  const [componentLargeQuantity, setComponentLargeQuantity] = useRecoilState(componentLargeQuantityState);
  const [baseComponentPaddingXIndex, setBaseComponentPaddingXIndex] = useRecoilState(baseComponentPaddingXIndexState);
  const [baseComponentPaddingYIndex, setBaseComponentPaddingYIndex] = useRecoilState(baseComponentPaddingYIndexState);
  // Should get rid of these two. Customizing adds unnecessary complexity
  const [baseComponentTextSizeIndex, setBaseComponentTextSizeIndex] = useRecoilState(baseComponentTextSizeIndexState);
  const [baseIconSizeIndex, setBaseIconSizeIndex] = useRecoilState(baseIconSizeIndexState);
  
  const [baseComponentSizeIndex, setBaseComponentSizeIndex] = useRecoilState(baseComponentSizeIndexState)
  const [scaleComponentRadius, setScaleComponentRadiusState] = useRecoilState(scaleComponentRadiusState)
  const [baseComponentRadius, setBaseComponentRadiusState] = useRecoilState(baseComponentRadiusState)
  const [componentLineHeight, setComponentLineHeightState] = useRecoilState(componentLineHeightState)

  const [baseRadiusSize, setBaseRadiusSize] = useRecoilState(baseRadiusSizeState);
  const [radiusScaleFormula, setRadiusScaleFormula] = useRecoilState(radiusScaleFormulaState)
  const [radiusScaleFactor, setRadiusScaleFactor] = useRecoilState(radiusScaleFactorState)

  const [iconScaleFormula, setIconScaleFormula] = useRecoilState(iconScaleFormulaState)
  const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState)
  
  const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(textIconGapIndexState);
  const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState);
  const [textIconGapScaleFormula, setTextIconGapScaleFormula] = useRecoilState(textIconGapScaleFormulaState);
  
  const showSpecs = props.showSpecs;

  const componentPaddingScale =
    componentPaddingMethodOption === "typeScale"
      ? typeScale
      : componentPaddingMethodOption === "spacingScale"
      ? spacingScaleFactor
      : 1;
  const componentPaddingMethodFormula =
    componentPaddingMethodOption === "typeScale"
      ? typeScaleFormula
      : componentPaddingMethodOption === "spacingScale"
      ? spacingFormula
      : undefined;
  const componentScale =
  componentMinHeightMethodOption === "typeScale"
        ? typeScale
        : componentMinHeightMethodOption === "spacingScale"
        ? spacingScaleFactor
        : 1;
  const componentScaleMethodFormula =
  componentMinHeightMethodOption === "typeScale"
      ? typeScaleFormula
      : componentMinHeightMethodOption === "spacingScale"
      ? spacingFormula
      : undefined;
  const componentGapScale =
    textIconGapScaleFormula === "typeScale"
      ? typeScale
      : textIconGapScaleFormula === "spacingScale"
      ? spacingScaleFactor
      : "none";
  const componentGapMethod =
    textIconGapScaleFormula === "typeScale"
      ? typeScaleFormula
      : textIconGapScaleFormula === "spacingScale"
      ? spacingFormula
      : "none";

  /* Create array of size indexes to generate components */
  let sizeArray = buildArray(componentSmallQuantity, componentLargeQuantity);

  /* Create arrays of sub-element indexes */
  const gapIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    textIconGapIndex
  );
  const paddingXIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    baseComponentPaddingXIndex
  );
  const paddingYIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    baseComponentPaddingYIndex
  );
  const textSizeIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    baseComponentTextSizeIndex
  );
  const iconSizeIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    baseIconSizeIndex
  );
  const componentMinHeightIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    baseComponentSizeIndex
  );
  const componentRadiusIndexArray = buildShiftedArray(
    componentSmallQuantity,
    componentLargeQuantity,
    baseComponentRadius
  );
  
  const componentRadiusNewIndexValue = calculateScale(
      baseRadiusSize,
      radiusScaleFactor,
      baseComponentRadius,
      radiusScaleFormula
    );
  

  /* Map size index array to calculate values and generate components */
  const sizedComponents = sizeArray.map((size, increment) => {
    return <ComponentSizeColumn
      size={size}
      increment={increment}
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
    />
  });

  return (
    <div className="column column--fitContent">
      <div className="componentColumn_Heading">
        <h5>Comfortable (default)</h5>
      </div>
      {sizedComponents}
    </div>
  );
};

export default ComponentSpecs;
