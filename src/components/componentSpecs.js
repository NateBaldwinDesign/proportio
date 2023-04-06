import React from "react";
import "../styles/iconography.css";
import buildArray from "../utilities/buildArray";
import buildShiftedArray from "../utilities/buildShiftedArray";
import calculateScale from "../utilities/calculateScale";
import ComponentElement from "./componentElement";

const ComponentSpecs = (props) => {
  const baseSize = props.baseSize;
  const componentScaleMethod = props.componentScaleMethod;
  const baseIconSizeIndex = props.baseIconSizeIndex;
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

  const baseComponentPaddingXIndex = props.baseComponentPaddingXIndex;
  const baseComponentPaddingYIndex = props.baseComponentPaddingYIndex;

  /* Create array of size indexes to generate components */
  let sizeArray = buildArray(componentSmallQuantity, componentLargeQuantity);

  /* Create array of padding indexes */
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

  console.log("Map to component sizes...");
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
    const iconSize = 16;
    const componentLineHeight = props.componentLineHeight;

    const computedHeight =
      paddingY * 2 + Number(componentLineHeight) * typeSize;

    return (
      <>
        <h5>{v < 0 ? sizeNamesDecrement[i] : sizeNamesIncrement[v]} </h5>
        <ComponentElement
          key={`${sizeNamesDecrement[i] - i}`}
          componentSize={computedHeight}
          paddingX={paddingX}
          paddingY={paddingY}
          typeSize={typeSize}
          iconSize={iconSize}
          gapSize={gapSize}
          componentLineHeight={componentLineHeight}
          spec
        />
      </>
    );
  });

  return (
    <div className="column">
      {/* {baseSize}
      <br />
      {componentPaddingScale}
      <br /> */}
      {sizeArray}
      <br />
      {paddingXIndexArray.toString()}
      <br />
      {calculateScale(
        baseSize,
        componentPaddingScale,
        paddingXIndexArray[0],
        componentPaddingMethodFormula
      )}
      <br />
      {sizedComponents}
    </div>
  );
};

export default ComponentSpecs;
