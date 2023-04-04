import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./styles/tabs.css";
// import 'react-tabs/style/react-tabs.css';

import './styles/app.css';
import TypeControls from './components/typeControls';
import Typography from './components/typography';
import IconControls from './components/iconControls';
import Iconography from './components/iconography';
import BaseControls from './components/baseControls';
import SpacingControls from './components/spacingControls';
import Spacing from './components/spacing';
import TypeIconPairing from './components/typeIconPairing';
import TypeIconPairingControls from './components/typeIconPairingControls';
import calculateScale from './utilities/calculateScale';

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
  const [minComponentHeightIndex, setMinComponentHeightIndex] = useState(1);
  const [componentLineHeight, setComponentLineHeight] = useState(1.2);
  const [componentSmallQuantity, setComponentSmallQuantity] = useState(2);
  const [componentLargeQuantity, setComponentLargeQuantity] = useState(3);
  const [componentScaleMethod, setComponentScaleMethod] = useState(scaleMethods[2]);

  const iconLineHeight = 1.375; /* Just to align icon examples with typography */
  const spacerLineHeight = iconLineHeight;

  return (
    <div className="App">
      <BaseControls
        baseSize={baseSize}
        setBaseSize={setBaseSize}
      />
      <SpacingControls 
        baseSize={baseSize}
        spacingScale={spacingScale}
        spacingSmallQuantity={spacingSmallQuantity}
        spacingLargeQuantity={spacingLargeQuantity}
        setSpacingScale={setSpacingScale}
        scaleMethods={scaleMethods}
        spacingScaleMethod={spacingScaleMethod}
        setSpacingScaleMethod={setSpacingScaleMethod}
        setSpacingLargeQuantity={setSpacingLargeQuantity}
        setSpacingSmallQuantity={setSpacingSmallQuantity}
      />
      <TypeControls 
        typeScale={typeScale}
        typeSmallQuantity={typeSmallQuantity}
        typeLargeQuantity={typeLargeQuantity}
        setTypeScale={setTypeScale}
        scaleMethods={scaleMethods}
        setTypeScaleMethod={setTypeScaleMethod}
        setTypeLargeQuantity={setTypeLargeQuantity}
        setTypeSmallQuantity={setTypeSmallQuantity}
      />
      <IconControls 
        iconScale={iconScale}
        iconSmallQuantity={iconSmallQuantity}
        iconLargeQuantity={iconLargeQuantity}
        setIconScale={setIconScale}
        scaleMethods={scaleMethods}
        iconPadding={iconPadding}
        setIconPadding={setIconPadding}
        setIconScaleMethod={setIconScaleMethod}
        setIconLargeQuantity={setIconLargeQuantity}
        setIconSmallQuantity={setIconSmallQuantity}
      />
      <TypeIconPairingControls
        scaleMethods={spacingMethods}
        textIconGapIndex={textIconGapIndex}
        setTextIconGapIndex={setTextIconGapIndex}
        textIconGapScaleMethod={textIconGapScaleMethod}
        setTextIconGapScaleMethod={setTextIconGapScaleMethod}
        textIconIconSizeIndex={textIconIconSizeIndex}
        setTextIconIconSizeIndex={setTextIconIconSizeIndex}
      />

      <main>
        <Tabs>
          <TabList>
            <Tab>Elements</Tab>
            <Tab>Typography</Tab>
            <Tab>Components</Tab>
          </TabList>

          <TabPanel>
            <Spacing
              baseSize={baseSize}
              spacingScale={spacingScale}
              spacingSmallQuantity={spacingSmallQuantity}
              spacingLargeQuantity={spacingLargeQuantity}
              spacingScaleMethod={spacingScaleMethod}
              spacerLineHeight={spacerLineHeight}
            />
            <Typography 
              baseSize={baseSize}
              typeScale={typeScale}
              typeSmallQuantity={typeSmallQuantity}
              typeLargeQuantity={typeLargeQuantity}
              typeScaleMethod={typeScaleMethod}
            />
            <Iconography 
              baseSize={baseSize}
              iconScale={iconScale}
              iconSmallQuantity={iconSmallQuantity}
              iconLargeQuantity={iconLargeQuantity}
              iconScaleMethod={iconScaleMethod}
              iconLineHeight={iconLineHeight}
              iconPadding={iconPadding}
            />
            <TypeIconPairing
              baseSize={baseSize}
              iconScale={iconScale}
              iconSmallQuantity={iconSmallQuantity}
              iconLargeQuantity={iconLargeQuantity}
              iconScaleMethod={iconScaleMethod}
              iconLineHeight={iconLineHeight}
              iconPadding={iconPadding}
              typeScale={typeScale}
              typeSmallQuantity={typeSmallQuantity}
              typeLargeQuantity={typeLargeQuantity}
              typeScaleMethod={typeScaleMethod}
              textIconGapIndex={textIconGapIndex}
              textIconGapScaleMethod={textIconGapScaleMethod}
              spacingScale={spacingScale}
              spacingScaleMethod={spacingScaleMethod}
              textIconIconSizeIndex={textIconIconSizeIndex}
              />
          </TabPanel>
          <TabPanel>
            <p>Typographic content, paragraphcs, headings margins using spacers, etc.</p>
          </TabPanel>
          <TabPanel>
            <p>Component and compoennt specs</p>
          </TabPanel>

        </Tabs>
        
      </main>

    </div>
  );
}

export default App;
