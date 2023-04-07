import React from "react";
import "../styles/iconography.css";
import buildArray from "../utilities/buildArray";
import buildShiftedArray from "../utilities/buildShiftedArray";
import calculateScale from "../utilities/calculateScale";
import capitalize from "../utilities/capitalize";
import ComponentElement from "./componentElement";
import ComponentSizeColumn from "./componentSizeColumn";

const ComponentSpecs = (props) => {
  const baseSize = props.baseSize;
  const componentScaleMethod = props.componentScaleMethod;
  const baseIconSizeIndex = props.baseIconSizeIndex;
  const iconPadding = props.iconPadding;
  const baseComponentSize = props.baseComponentSize;
  const componentLineHeight = props.componentLineHeight;
  const baseComponentTextSizeIndex = props.baseComponentTextSizeIndex;

  const gapSize = props.gapSize;
  const minSizeScale = props.minSizeScale;
  const componentSmallQuantity = props.componentSmallQuantity;
  const componentLargeQuantity = props.componentLargeQuantity;
  const typeScale = props.typeScale;
  const iconScale = props.iconScale;
  const spacingScale = props.spacingScale;
  const sizeNamesIncrement = props.sizeNamesIncrement;
  const sizeNamesDecrement = props.sizeNamesDecrement;
  const typeScaleMethod = props.typeScaleMethod;
  const iconScaleMethod = props.iconScaleMethod;
  const spacingScaleMethod = props.spacingScaleMethod;
  const showSpecs = props.showSpecs;
  
  const scaleComponentRadius = props.scaleComponentRadius;
  const baseRadiusSize = props.baseRadiusSize;
  const baseComponentRadius = props.baseComponentRadius;
  const radiusScaleFactor = props.radiusScaleFactor;
  const radiusScaleMethod = props.radiusScaleMethod;

  const componentPaddingMethod = props.componentPaddingMethod;
  const componentPaddingScale =
    componentPaddingMethod === "typeScale"
      ? typeScale
      : componentPaddingMethod === "spacingScale"
      ? spacingScale
      : 1;
  const componentPaddingMethodFormula =
    componentPaddingMethod === "typeScale"
      ? typeScaleMethod
      : componentPaddingMethod === "spacingScale"
      ? spacingScaleMethod
      : undefined;
  const componentScale =
    componentScaleMethod === "typeScale"
        ? typeScale
        : componentScaleMethod === "spacingScale"
        ? spacingScale
        : 1;
  const componentScaleMethodFormula =
    componentScaleMethod === "typeScale"
      ? typeScaleMethod
      : componentScaleMethod === "spacingScale"
      ? spacingScaleMethod
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
    baseComponentSize
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
      radiusScaleMethod
    );

  /* Map size index array to calculate values and generate components */
  const sizedComponents = sizeArray.map((size, increment) => {
    return <ComponentSizeColumn
      size={size}
      increment={increment}
      baseSize={baseSize}
      componentPaddingScale={componentPaddingScale}
      paddingXIndexArray={paddingXIndexArray}
      componentPaddingMethodFormula={componentPaddingMethodFormula}
      paddingYIndexArray={paddingYIndexArray}
      typeScale={typeScale}
      textSizeIndexArray={textSizeIndexArray}
      typeScaleMethod={typeScaleMethod}
      iconScale={iconScale}
      iconSizeIndexArray={iconSizeIndexArray}
      iconScaleMethod={iconScaleMethod}
      componentScale={componentScale}
      componentMinHeightIndexArray={componentMinHeightIndexArray}
      componentScaleMethodFormula={componentScaleMethodFormula}
      baseRadiusSize={baseRadiusSize}
      radiusScaleFactor={radiusScaleFactor}
      componentRadiusIndexArray={componentRadiusIndexArray}
      radiusScaleMethod={radiusScaleMethod}
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
