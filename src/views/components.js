import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import ComponentControls from "../components/componentControls";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ComponentSpecs from "../components/componentSpecs";
import "../styles/tabs.css";
import Panel from "../components/panel";
import TypeIconPairingControls from "../components/typeIconPairingControls";
import TypeIconPairing from "../components/typeIconPairing";
import {baseSizeState} from '../states/base';

const Components = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
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
  const spacingMethods = props.spacingMethods;
  const typeScaleMethod = props.typeScaleMethod;
  const spacingScaleMethod = props.spacingScaleMethod;
  const iconScaleMethod = props.iconScaleMethod;

  // const textIconGapIndex = props.textIconGapIndex;
  // const setTextIconGapIndex = props.setTextIconGapIndex;
  // const textIconGapScaleMethod = props.textIconGapScaleMethod;
  // const setTextIconGapScaleMethod = props.setTextIconGapScaleMethod;
  // const textIconIconSizeIndex = props.textIconIconSizeIndex;
  // const setTextIconIconSizeIndex = props.setTextIconIconSizeIndex;
  // const iconSmallQuantity = props.iconSmallQuantity;
  // const iconLargeQuantity = props.iconLargeQuantity;
  // const iconLineHeight = props.iconLineHeight;
  // const typeSmallQuantity = props.typeSmallQuantity;
  // const typeLargeQuantity = props.typeLargeQuantity;

  const componentSmallQuantity = props.componentSmallQuantity;
  const setComponentSmallQuantity = props.setComponentSmallQuantity;
  const componentLargeQuantity = props.componentLargeQuantity;
  const setComponentLargeQuantity = props.setComponentLargeQuantity;
  
  const scaleComponentRadius = props.scaleComponentRadius;
  const setScaleComponentRadius = props.setScaleComponentRadius;
  const baseComponentRadius = props.baseComponentRadius;
  const setBaseComponentRadius = props.setBaseComponentRadius;
  const baseRadiusSize = props.baseRadiusSize;
  const radiusScaleFactor = props.radiusScaleFactor;
  const radiusScaleMethod = props.radiusScaleMethod;
  
  const [showSpecs, setShowSpecs] = useState(false);

  const paddingX = 8;
  const paddingY = 6;
  const gapSize = 1;
  const minSizeScale = 1;
  /* These need to be named ascending, starting with default medium */
  const sizeNamesIncrement = [
    "medium (default)",
    "large",
    "x-large",
    "xx-large",
    "xxx-large",
    "xiv-large",
    "xv-large",
    "xvi-large",
    "xvii-large",
    "xviii-large"
  ];
  /* These need to be named descending */
  const sizeNamesDecrement = [
    "small",
    "x-small",
    "xx-small",
    "xxx-small",
    "xiv-small",
    "xv-small",
    "xvi-small",
    "xvii-small",
    "xviii-small"
  ];

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <ComponentControls
            
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
            scaleComponentRadius={scaleComponentRadius}
            setScaleComponentRadius={setScaleComponentRadius}
            baseComponentRadius={baseComponentRadius}
            setBaseComponentRadius={setBaseComponentRadius}
          />
        </Panel>

        <main>
          <Tabs>
            <TabList>
              <Tab>Desktop</Tab>
              <Tab>Mobile</Tab>
              <div className="tabs_action">
                <div className="checkboxGroup" >
                  <input
                    type="checkbox"
                    name="showComponentSpecs"
                    id="showComponentSpecs"
                    onClick={(e) => setShowSpecs(e.target.checked)}
                    defaultChecked={showSpecs}
                  />
                  <label htmlFor="showComponentSpecs">
                    Show component specs
                  </label>
                </div>
              </div>
            </TabList>

            <TabPanel>
              <ComponentSpecs
                showSpecs={showSpecs}
                
                componentScaleMethod={componentScaleMethod}
                componentLineHeight={componentLineHeight}
                baseComponentSize={baseComponentSize}
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
                typeScaleMethod={typeScaleMethod}
                iconScaleMethod={iconScaleMethod}
                spacingScaleMethod={spacingScaleMethod}
                sizeNamesIncrement={sizeNamesIncrement}
                sizeNamesDecrement={sizeNamesDecrement}
                baseComponentPaddingXIndex={baseComponentPaddingXIndex}
                baseComponentPaddingYIndex={baseComponentPaddingYIndex}
                baseComponentTextSizeIndex={baseComponentTextSizeIndex}
                scaleComponentRadius={scaleComponentRadius}
                baseComponentRadius={baseComponentRadius}
                baseRadiusSize={baseRadiusSize}
                radiusScaleFactor={radiusScaleFactor}
                radiusScaleMethod={radiusScaleMethod}
              />
            </TabPanel>
            <TabPanel>
              <p>Component examples</p>
            </TabPanel>
          </Tabs>
        </main>
      </div>
    </>
  );
};

export default Components;
