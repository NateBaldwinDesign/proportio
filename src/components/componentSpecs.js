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
  typeScaleFormlaState
} from '../states/typography'
import {spacingFormulaState} from '../states/spacing'
import {
  componentMinHeightMethodOptionState,
  componentSmallQuantityState,
  componentLargeQuantityState,
  baseComponentTextSizeIndexState,
  baseIconSizeIndexState,
  baseComponentSizeIndexState,
  scaleComponentRadiusState,
  baseComponentRadiusState,
  componentLineHeightState
} from "../states/components"
import {
  baseRadiusSizeState,
  radiusScaleFormulaState,
  radiusScaleFactorState
} from '../states/radius'
import {
  iconScaleState,
  iconScaleFormlaState,
  iconPaddingState
} from '../states/iconography'

const ComponentSpecs = (props) => {
  const showSpecs = props.showSpecs;
  
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [componentPaddingMethodOption, setComponentPaddingMethodOption] = useRecoilState(componentPaddingMethodOption)
  const [typeScale, setTypeScale] = useRecoilState(typeScale);
  const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(spacingScaleFactor);
  const [spacingFormula, setSpacingFormula] = useRecoilState(spacingFormulaState);
  const [typeScaleFormla, setTypeScaleFormla] = useRecoilState(typeScaleFormlaState)
  const [componentMinHeightMethodOption, setComponentMinHeightMethodOption] = useRecoilState(componentMinHeightMethodOptionState)
  const [componentSmallQuantity, setComponentSmallQuantity] = useRecoilState(componentSmallQuantityState);
  const [componentLargeQuantity, setComponentLargeQuantity] = useRecoilState(componentLargeQuantityState);
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

  const [iconScale, setIconScale] = useRecoilState(iconScaleState)
  const [iconScaleFormla, setIconScaleFormla] = useRecoilState(iconScaleFormlaState)
  const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState)
  

  const componentPaddingScale =
    componentPaddingMethodOption === "typeScale"
      ? typeScale
      : componentPaddingMethodOption === "spacingScale"
      ? spacingScaleFactor
      : 1;
  const componentPaddingMethodFormula =
    componentPaddingMethodOption === "typeScale"
      ? typeScaleFormla
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
      ? typeScaleFormla
      : componentMinHeightMethodOption === "spacingScale"
      ? spacingFormula
      : undefined;

  const baseComponentPaddingXIndex = props.baseComponentPaddingXIndex;
  const baseComponentPaddingYIndex = props.baseComponentPaddingYIndex;

  /* Create array of size indexes to generate components */
  let sizeArray = buildArray(componentSmallQuantity, componentLargeQuantity);

  /* Create arrays of sub-element indexes */
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
      typeScale={typeScale}
      textSizeIndexArray={textSizeIndexArray}
      iconScale={iconScale}
      iconSizeIndexArray={iconSizeIndexArray}
      iconScaleFormla={iconScaleFormla}
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
    />
  });

  return (
    <div className="column">
      <h3>Component size & density</h3>
      {sizedComponents}
    </div>
  );
};

export default ComponentSpecs;
