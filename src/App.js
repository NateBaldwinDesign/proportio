import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import './styles/app.css';
import Foundations from './views/foundations';
import Components from './views/components';

function App() {
  const scaleMethods = ['linear', 'power'];
  const spacingMethods = ['typeScale', 'spacingScale']

  const [baseSize, setBaseSize] = useState(16);

  // Spacing
  const [spacingScale, setSpacingScale] = useState(1.5);
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
  const [textIconGapScaleMethod, setTextIconGapScaleMethod] = useState(spacingMethods[0]);
  const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useState(0);

  // Components
  const [baseIconSizeIndex, setBaseIconSizeIndex] = useState(1);
  const [baseComponentSize, setBaseComponentSize] = useState(1);
  const [componentLineHeight, setComponentLineHeight] = useState(1.2);
  const [componentSmallQuantity, setComponentSmallQuantity] = useState(2);
  const [componentLargeQuantity, setComponentLargeQuantity] = useState(4);
  const [componentScaleMethod, setComponentScaleMethod] = useState(scaleMethods[2]);
  const [componentPaddingMethod, setComponentPaddingMethod] = useState(spacingMethods[0]);

  const iconLineHeight = 1.375; /* Just to align icon examples with typography */
  const spacerLineHeight = iconLineHeight;

  return (
    <div className="App">
      <Tabs className="App_tabs">
        <TabList className="App_tabsList">
          <Tab className="App_tab">Foundations</Tab>
          <Tab className="App_tab">Components</Tab>
        </TabList>
        <TabPanel className="App_tabPanel">
          <Foundations 
            scaleMethods = {scaleMethods}
            spacingMethods = {spacingMethods}
            baseSize = {baseSize}
            setBaseSize = {setBaseSize}
            spacingScale = {spacingScale}
            setSpacingScale = {setSpacingScale}
            spacingSmallQuantity = {spacingSmallQuantity}
            setSpacingSmallQuantity = {setSpacingSmallQuantity}
            spacingLargeQuantity = {spacingLargeQuantity}
            setSpacingLargeQuantity = {setSpacingLargeQuantity}
            spacingScaleMethod = {spacingScaleMethod}
            setSpacingScaleMethod = {setSpacingScaleMethod}
            typeScale = {typeScale}
            setTypeScale = {setTypeScale}
            typeSmallQuantity = {typeSmallQuantity}
            setTypeSmallQuantity = {setTypeSmallQuantity}
            typeLargeQuantity = {typeLargeQuantity}
            setTypeLargeQuantity = {setTypeLargeQuantity}
            typeScaleMethod = {typeScaleMethod}
            setTypeScaleMethod = {setTypeScaleMethod}
            iconScale = {iconScale}
            setIconScale = {setIconScale}
            iconPadding = {iconPadding}
            setIconPadding = {setIconPadding}
            iconSmallQuantity = {iconSmallQuantity}
            setIconSmallQuantity = {setIconSmallQuantity}
            iconLargeQuantity = {iconLargeQuantity}
            setIconLargeQuantity = {setIconLargeQuantity}
            iconScaleMethod = {iconScaleMethod}
            setIconScaleMethod = {setIconScaleMethod}
            textIconGapIndex = {textIconGapIndex}
            setTextIconGapIndex = {setTextIconGapIndex}
            textIconGapScaleMethod = {textIconGapScaleMethod}
            setTextIconGapScaleMethod = {setTextIconGapScaleMethod}
            textIconIconSizeIndex = {textIconIconSizeIndex}
            setTextIconIconSizeIndex = {setTextIconIconSizeIndex}
            iconLineHeight = {iconLineHeight}
            spacerLineHeight = {spacerLineHeight}
          />
        </TabPanel>
        <TabPanel className="App_tabPanel">
          <Components
            baseSize={baseSize}
            baseIconSizeIndex={baseIconSizeIndex}
            setBaseIconSizeIndex={setBaseIconSizeIndex}
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
          />
        </TabPanel>
      </Tabs>

    </div>
  );
}

export default App;
