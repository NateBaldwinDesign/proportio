import React, { useState } from "react";
import ComponentControls from "../components/componentControls";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ComponentSpecs from "../components/componentSpecs";
import "../styles/tabs.css";
import Panel from "../components/panel";

const Components = (props) => {
  const baseSize = props.baseSize;
  const scaleMethods = props.scaleMethods;

  const baseIconSizeIndex = props.baseIconSizeIndex;
  const iconPadding = props.iconPadding;

  const baseComponentTextSizeIndex = props.baseComponentTextSizeIndex;
  const setBaseComponentTextSizeIndex = props.setBaseComponentTextSizeIndex;

  const baseComponentSize = props.baseComponentSize;
  const setBaseComponentSize = props.setBaseComponentSize;

  const componentLineHeight = props.componentLineHeight;
  const setComponentLineHeight = props.setComponentLineHeight;

  const componentScaleMethod = props.componentScaleMethod;
  const setComponentScaleMethod = props.setComponentScaleMethod;

  const componentPaddingMethod = props.componentPaddingMethod;
  const setComponentPaddingMethod = props.setComponentPaddingMethod;
  const baseComponentPaddingXIndex = props.baseComponentPaddingXIndex;
  const setBaseComponentPaddingXIndex = props.setBaseComponentPaddingXIndex;
  const baseComponentPaddingYIndex = props.baseComponentPaddingYIndex;
  const setBaseComponentPaddingYIndex = props.setBaseComponentPaddingYIndex;

  const typeScale = props.typeScale;
  const iconScale = props.iconScale;
  const spacingScale = props.spacingScale;
  const spacingMethods = props.spacingMethods;
  const typeScaleMethod = props.typeScaleMethod;
  const spacingScaleMethod = props.spacingScaleMethod;
  const iconScaleMethod = props.iconScaleMethod;

  const componentSmallQuantity = props.componentSmallQuantity;
  const setComponentSmallQuantity = props.setComponentSmallQuantity;
  const componentLargeQuantity = props.componentLargeQuantity;
  const setComponentLargeQuantity = props.setComponentLargeQuantity;

  const paddingX = 8;
  const paddingY = 6;
  const gapSize = 1;
  const minSizeScale = 1;

  const sizeNamesIncrement = [
    "medium (default)",
    "large",
    "x-large",
    "xx-large",
    "xxx-large",
    "xiv-large",
  ];
  const sizeNamesDecrement = [
    "small",
    "x-small",
    "xx-small",
    "xxx-small",
    "xiv-small",
  ];

  return (
    <>
    <Panel direction="column">
      <ComponentControls
          baseSize={baseSize}
          baseComponentSize={baseComponentSize}
          setBaseComponentSize={setBaseComponentSize}
          componentLineHeight={componentLineHeight}
          setComponentLineHeight={setComponentLineHeight}
          componentSmallQuantity={componentSmallQuantity}
          setComponentSmallQuantity={setComponentSmallQuantity}
          componentLargeQuantity={componentLargeQuantity}
          setComponentLargeQuantity={setComponentLargeQuantity}
          componentScaleMethod={componentScaleMethod}
          scaleMethods={scaleMethods}
          spacingMethods={spacingMethods}
          setComponentScaleMethod={setComponentScaleMethod}
          componentPaddingMethod={componentPaddingMethod}
          setComponentPaddingMethod={setComponentPaddingMethod}
          baseComponentTextSizeIndex={baseComponentTextSizeIndex}
          setBaseComponentTextSizeIndex={setBaseComponentTextSizeIndex}
          baseComponentPaddingXIndex={baseComponentPaddingXIndex}
          setBaseComponentPaddingXIndex={setBaseComponentPaddingXIndex}
          baseComponentPaddingYIndex={baseComponentPaddingYIndex}
          setBaseComponentPaddingYIndex={setBaseComponentPaddingYIndex}
        />
    </Panel>
      

      <main>
        <Tabs>
          <TabList>
            <Tab>Specs</Tab>
            <Tab>Examples</Tab>
          </TabList>

          <TabPanel>
            <ComponentSpecs
              baseSize={baseSize}
              componentScaleMethod={componentScaleMethod}
              componentLineHeight={componentLineHeight}
              componentSize={baseComponentSize}
              paddingX={paddingX}
              paddingY={paddingY}
              typeSize={baseComponentTextSizeIndex}
              baseIconSizeIndex={baseIconSizeIndex}
              iconPadding={iconPadding}
              gapSize={gapSize}
              minSizeScale={minSizeScale}
              componentPaddingMethod={componentPaddingMethod}
              componentSmallQuantity={componentSmallQuantity}
              componentLargeQuantity={componentLargeQuantity}
              typeScale={typeScale}
              iconScale={iconScale}
              spacingScale={spacingScale}
              typeScaleMethod={typeScaleMethod}
              iconScaleMethod={iconScaleMethod}
              spacingScaleMethod={spacingScaleMethod}
              sizeNamesIncrement={sizeNamesIncrement}
              sizeNamesDecrement={sizeNamesDecrement}
              baseComponentPaddingXIndex={baseComponentPaddingXIndex}
              baseComponentPaddingYIndex={baseComponentPaddingYIndex}
              baseComponentTextSizeIndex={baseComponentTextSizeIndex}
            />
          </TabPanel>
          <TabPanel>
            <p>Component examples</p>
          </TabPanel>
        </Tabs>
      </main>
    </>
  );
};

export default Components;
