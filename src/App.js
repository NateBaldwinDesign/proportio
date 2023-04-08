import React, { useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import baseSizeState from './states/base';

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';

import "./styles/app.css";
import "./styles/formElements.css";

import Foundations from "./views/foundations";
import Components from "./views/components";
import Header from "./components/header";
import Home from "./views/home";

function App() {
  const scaleMethods = ["linear", "power"];
  const spacingMethods = ["typeScale", "spacingScale"];

  // Spacing
  // const [spacingScale, setSpacingScale] = useState(1.5);
  const [spacingSmallQuantity, setSpacingSmallQuantity] = useState(2);
  const [spacingLargeQuantity, setSpacingLargeQuantity] = useState(6);
  const [spacingScaleMethod, setSpacingScaleMethod] = useState(scaleMethods[1]);

  // Typography
  const [typeScale, setTypeScale] = useState(1.125);
  const [typeSmallQuantity, setTypeSmallQuantity] = useState(2);
  const [typeLargeQuantity, setTypeLargeQuantity] = useState(10);
  const [typeScaleMethod, setTypeScaleMethod] = useState(scaleMethods[1]);

  // Iconography
  const [iconScale, setIconScale] = useState(1.125);
  const [iconPadding, setIconPadding] = useState(2);
  const [iconSmallQuantity, setIconSmallQuantity] = useState(2);
  const [iconLargeQuantity, setIconLargeQuantity] = useState(10);
  const [iconScaleMethod, setIconScaleMethod] = useState(scaleMethods[1]);

  // Type + icon gap
  const [textIconGapIndex, setTextIconGapIndex] = useState(-10);
  const [textIconGapScaleMethod, setTextIconGapScaleMethod] = useState(
    spacingMethods[0]
  );
  const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useState(0);

  // Radius
  const [baseRadiusSize, setBaseRadiusSize] = useState(4);
  const [radiusScaleFactor, setRadiusScaleFactor] = useState(2);
  const [radiusSmallQuantity, setRadiusSmallQuantity] = useState(1);
  const [radiusLargeQuantity, setRadiusLargeQuantity] = useState(3);
  const [radiusScaleMethod, setRadiusScaleMethod] = useState(scaleMethods[0]);

  // Elevation
  const [baseElevationSize, setBaseElevationSize] = useState(4);
  const [elevationScaleFactor, setElevationScaleFactor] = useState(2);
  const [elevationSmallQuantity, setElevationSmallQuantity] = useState(0);
  const [elevationLargeQuantity, setElevationLargeQuantity] = useState(3);
  const [elevationScaleMethod, setElevationScaleMethod] = useState(
    scaleMethods[1]
  );

  // Components
  const baseIconSizeIndex = textIconIconSizeIndex;
  const [baseComponentSize, setBaseComponentSize] = useState(1);
  const [componentLineHeight, setComponentLineHeight] = useState(1.2);
  const [componentSmallQuantity, setComponentSmallQuantity] = useState(2);
  const [componentLargeQuantity, setComponentLargeQuantity] = useState(4);
  const [componentScaleMethod, setComponentScaleMethod] = useState(
    spacingMethods[1]
  );
  const [componentPaddingMethod, setComponentPaddingMethod] = useState(
    spacingMethods[0]
  );
  const [baseComponentTextSizeIndex, setBaseComponentTextSizeIndex] =
    useState(0);
  const [baseComponentPaddingXIndex, setBaseComponentPaddingXIndex] =
    useState(0);
  const [baseComponentPaddingYIndex, setBaseComponentPaddingYIndex] =
    useState(0);
  const [scaleComponentRadius, setScaleComponentRadius] = useState(false);
  const [baseComponentRadius, setBaseComponentRadius] = useState(0);

  const iconLineHeight = 1.375; /* Just to align icon examples with typography */
  const spacerLineHeight = iconLineHeight;

  return (
    <RecoilRoot>
    <div className="App">
      <Tabs className="App_tabs">
        <Header>
          <TabList className="App_tabsList">
            <Tab className="App_tab">Home</Tab>
            <Tab className="App_tab">Foundations</Tab>
            <Tab className="App_tab">Components</Tab>
          </TabList>
        </Header>

        <TabPanel className="App_tabPanel">
          <Home />
        </TabPanel>

        <TabPanel className="App_tabPanel">
          <Foundations
            scaleMethods={scaleMethods}
            spacingMethods={spacingMethods}
            spacingSmallQuantity={spacingSmallQuantity}
            setSpacingSmallQuantity={setSpacingSmallQuantity}
            spacingLargeQuantity={spacingLargeQuantity}
            setSpacingLargeQuantity={setSpacingLargeQuantity}
            spacingScaleMethod={spacingScaleMethod}
            setSpacingScaleMethod={setSpacingScaleMethod}
            typeScale={typeScale}
            setTypeScale={setTypeScale}
            typeSmallQuantity={typeSmallQuantity}
            setTypeSmallQuantity={setTypeSmallQuantity}
            typeLargeQuantity={typeLargeQuantity}
            setTypeLargeQuantity={setTypeLargeQuantity}
            typeScaleMethod={typeScaleMethod}
            setTypeScaleMethod={setTypeScaleMethod}
            iconScale={iconScale}
            setIconScale={setIconScale}
            iconPadding={iconPadding}
            setIconPadding={setIconPadding}
            iconSmallQuantity={iconSmallQuantity}
            setIconSmallQuantity={setIconSmallQuantity}
            iconLargeQuantity={iconLargeQuantity}
            setIconLargeQuantity={setIconLargeQuantity}
            iconScaleMethod={iconScaleMethod}
            setIconScaleMethod={setIconScaleMethod}
            textIconGapIndex={textIconGapIndex}
            setTextIconGapIndex={setTextIconGapIndex}
            textIconGapScaleMethod={textIconGapScaleMethod}
            setTextIconGapScaleMethod={setTextIconGapScaleMethod}
            textIconIconSizeIndex={textIconIconSizeIndex}
            setTextIconIconSizeIndex={setTextIconIconSizeIndex}
            iconLineHeight={iconLineHeight}
            spacerLineHeight={spacerLineHeight}
            baseRadiusSize={baseRadiusSize}
            setBaseRadiusSize={setBaseRadiusSize}
            radiusScaleFactor={radiusScaleFactor}
            setRadiusScaleFactor={setRadiusScaleFactor}
            radiusSmallQuantity={radiusSmallQuantity}
            setRadiusSmallQuantity={setRadiusSmallQuantity}
            radiusLargeQuantity={radiusLargeQuantity}
            setRadiusLargeQuantity={setRadiusLargeQuantity}
            radiusScaleMethod={radiusScaleMethod}
            setRadiusScaleMethod={setRadiusScaleMethod}
            baseElevationSize={baseElevationSize}
            setBaseElevationSize={setBaseElevationSize}
            elevationScaleFactor={elevationScaleFactor}
            setElevationScaleFactor={setElevationScaleFactor}
            elevationSmallQuantity={elevationSmallQuantity}
            setElevationSmallQuantity={setElevationSmallQuantity}
            elevationLargeQuantity={elevationLargeQuantity}
            setElevationLargeQuantity={setElevationLargeQuantity}
            elevationScaleMethod={elevationScaleMethod}
            setElevationScaleMethod={setElevationScaleMethod}
          />
        </TabPanel>
        <TabPanel className="App_tabPanel">
          <Components
            
            iconPadding={iconPadding}
            scaleMethods={scaleMethods}
            baseIconSizeIndex={baseIconSizeIndex}
            baseComponentSize={baseComponentSize}
            setBaseComponentSize={setBaseComponentSize}
            componentLineHeight={componentLineHeight}
            setComponentLineHeight={setComponentLineHeight}
            componentSmallQuantity={componentSmallQuantity}
            setComponentSmallQuantity={setComponentSmallQuantity}
            componentLargeQuantity={componentLargeQuantity}
            setComponentLargeQuantity={setComponentLargeQuantity}
            componentScaleMethod={componentScaleMethod}
            setComponentScaleMethod={setComponentScaleMethod}
            componentPaddingMethod={componentPaddingMethod}
            setComponentPaddingMethod={setComponentPaddingMethod}
            typeScale={typeScale}
            iconScale={iconScale}
            spacingMethods={spacingMethods}
            typeScaleMethod={typeScaleMethod}
            spacingScaleMethod={spacingScaleMethod}
            iconScaleMethod={iconScaleMethod}
            baseComponentTextSizeIndex={baseComponentTextSizeIndex}
            setBaseComponentTextSizeIndex={setBaseComponentTextSizeIndex}
            baseComponentPaddingXIndex={baseComponentPaddingXIndex}
            setBaseComponentPaddingXIndex={setBaseComponentPaddingXIndex}
            baseComponentPaddingYIndex={baseComponentPaddingYIndex}
            setBaseComponentPaddingYIndex={setBaseComponentPaddingYIndex}
            textIconGapIndex={textIconGapIndex}
            setTextIconGapIndex={setTextIconGapIndex}
            textIconGapScaleMethod={textIconGapScaleMethod}
            setTextIconGapScaleMethod={setTextIconGapScaleMethod}
            textIconIconSizeIndex={textIconIconSizeIndex}
            setTextIconIconSizeIndex={setTextIconIconSizeIndex}
            iconSmallQuantity={iconSmallQuantity}
            iconLargeQuantity={iconLargeQuantity}
            iconLineHeight={iconLineHeight}
            typeSmallQuantity={typeSmallQuantity}
            typeLargeQuantity={typeLargeQuantity}
            scaleComponentRadius={scaleComponentRadius}
            setScaleComponentRadius={setScaleComponentRadius}
            baseComponentRadius={baseComponentRadius}
            setBaseComponentRadius={setBaseComponentRadius}
            baseRadiusSize={baseRadiusSize}
            radiusScaleFactor={radiusScaleFactor}
            radiusScaleMethod={radiusScaleMethod}
          />
        </TabPanel>
      </Tabs>
    </div>
    </RecoilRoot>
  );
}

export default App;
