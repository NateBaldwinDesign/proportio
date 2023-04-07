import React from "react";
import "../styles/iconography.css";
import buildArray from "../utilities/buildArray";
import buildShiftedArray from "../utilities/buildShiftedArray";
import calculateScale from "../utilities/calculateScale";
import capitalize from "../utilities/capitalize";
import ComponentElement from "./componentElement";

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

  /* Map size index array to calculate values and generate components */
  const sizedComponents = sizeArray.map((v, i) => {
    const paddingX = calculateScale(
      baseSize,
      componentPaddingScale,
      paddingXIndexArray[i],
      componentPaddingMethodFormula
    );
    const paddingY = calculateScale(
      baseSize,
      componentPaddingScale,
      paddingYIndexArray[i],
      componentPaddingMethodFormula
    );

    const typeSize = calculateScale(
      baseSize,
      typeScale,
      textSizeIndexArray[i],
      typeScaleMethod
    );
    const gapSize = props.gapSize;
    const iconSize = calculateScale(
      baseSize,
      iconScale,
      iconSizeIndexArray[i],
      iconScaleMethod
    );
    const componentLineHeight = props.componentLineHeight;

    const componentMinHeight = calculateScale(
      baseSize,
      componentScale,
      componentMinHeightIndexArray[i],
      componentScaleMethodFormula
    );
    // const computedHeight =
    //   paddingY * 2 + Number(componentLineHeight) * typeSize;

    const sizeName = v < 0 ? sizeNamesDecrement[i] : sizeNamesIncrement[v];

    return (
      <div className="specRowItem"  key={`componenSpecItem${sizeName}${componentMinHeight}`}>
        <h5> {capitalize(sizeName)} </h5>
        <ComponentElement
          key={`component${sizeName}${componentMinHeight}`}
          componentMinHeight={componentMinHeight}
          paddingX={paddingX}
          paddingY={paddingY}
          typeSize={typeSize}
          iconSize={iconSize}
          iconPadding={iconPadding}
          gapSize={gapSize}
          componentLineHeight={componentLineHeight}
          spec
        />
      </div>
    );
  });

  return (
    <div className="column">
      <h3>Component size & density</h3>
      {sizedComponents}
    </div>
  );
};

export default ComponentSpecs;
