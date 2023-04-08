import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import BaseControls from "../components/baseControls";
import SpacingControls from "../components/spacingControls";
import TypeControls from "../components/typeControls";
import IconControls from "../components/iconControls";
import TypeIconPairingControls from "../components/typeIconPairingControls";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Spacing from "../components/spacing";
import Typography from "../components/typography";
import Iconography from "../components/iconography";
import TypeIconPairing from "../components/typeIconPairing";
import "../styles/tabs.css";
import Radius from "../components/radius";
import RadiusControls from "../components/radiusControls";
import Panel from "../components/panel";
import ElevationControls from "../components/elevationControls";
import Elevation from "../components/elevation";
import {baseSizeState} from '../states/base';

const Foundations = (props) => {
  const scaleMethods = props.scaleMethods;
  const spacingMethods = props.spacingMethods;
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const setSpacingScale = props.setSpacingScale;
  const spacingSmallQuantity = props.spacingSmallQuantity;
  const setSpacingSmallQuantity = props.setSpacingSmallQuantity;
  const spacingLargeQuantity = props.spacingLargeQuantity;
  const setSpacingLargeQuantity = props.setSpacingLargeQuantity;
  const spacingScaleMethod = props.spacingScaleMethod;
  const setSpacingScaleMethod = props.setSpacingScaleMethod;
  const typeScale = props.typeScale;
  const setTypeScale = props.setTypeScale;
  const typeSmallQuantity = props.typeSmallQuantity;
  const setTypeSmallQuantity = props.setTypeSmallQuantity;
  const typeLargeQuantity = props.typeLargeQuantity;
  const setTypeLargeQuantity = props.setTypeLargeQuantity;
  const typeScaleMethod = props.typeScaleMethod;
  const setTypeScaleMethod = props.setTypeScaleMethod;
  const iconScale = props.iconScale;
  const setIconScale = props.setIconScale;
  const iconPadding = props.iconPadding;
  const setIconPadding = props.setIconPadding;
  const iconSmallQuantity = props.iconSmallQuantity;
  const setIconSmallQuantity = props.setIconSmallQuantity;
  const iconLargeQuantity = props.iconLargeQuantity;
  const setIconLargeQuantity = props.setIconLargeQuantity;
  const iconScaleMethod = props.iconScaleMethod;
  const setIconScaleMethod = props.setIconScaleMethod;
  const textIconGapIndex = props.textIconGapIndex;
  const setTextIconGapIndex = props.setTextIconGapIndex;
  const textIconGapScaleMethod = props.textIconGapScaleMethod;
  const setTextIconGapScaleMethod = props.setTextIconGapScaleMethod;
  const textIconIconSizeIndex = props.textIconIconSizeIndex;
  const setTextIconIconSizeIndex = props.setTextIconIconSizeIndex;
  const iconLineHeight = props.iconLineHeight;
  const spacerLineHeight = props.spacerLineHeight;
  const baseRadiusSize = props.baseRadiusSize;
  const setBaseRadiusSize = props.setBaseRadiusSize;
  const radiusScaleFactor = props.radiusScaleFactor;
  const setRadiusScaleFactor = props.setRadiusScaleFactor;
  const radiusSmallQuantity = props.radiusSmallQuantity;
  const setRadiusSmallQuantity = props.setRadiusSmallQuantity;
  const radiusLargeQuantity = props.radiusLargeQuantity;
  const setRadiusLargeQuantity = props.setRadiusLargeQuantity;
  const radiusScaleMethod = props.radiusScaleMethod;
  const setRadiusScaleMethod = props.setRadiusScaleMethod;
  const baseElevationSize = props.baseElevationSize;
  const setBaseElevationSize = props.setBaseElevationSize;
  const elevationScaleFactor = props.elevationScaleFactor;
  const setElevationScaleFactor = props.setElevationScaleFactor;
  const elevationSmallQuantity = props.elevationSmallQuantity;
  const setElevationSmallQuantity = props.setElevationSmallQuantity;
  const elevationLargeQuantity = props.elevationLargeQuantity;
  const setElevationLargeQuantity = props.setElevationLargeQuantity;
  const elevationScaleMethod = props.elevationScaleMethod;
  const setElevationScaleMethod = props.setElevationScaleMethod;

  const [sampleText, setSampleText] = useState("Text");

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <BaseControls   />
          <SpacingControls
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
            typeScaleMethod={typeScaleMethod}
            scaleMethods={scaleMethods}
            setTypeScaleMethod={setTypeScaleMethod}
            setTypeLargeQuantity={setTypeLargeQuantity}
            setTypeSmallQuantity={setTypeSmallQuantity}
            sampleText={sampleText}
            setSampleText={setSampleText}
          />
          <IconControls
            iconScale={iconScale}
            iconSmallQuantity={iconSmallQuantity}
            iconLargeQuantity={iconLargeQuantity}
            setIconScale={setIconScale}
            scaleMethods={scaleMethods}
            iconScaleMethod={iconScaleMethod}
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
          <RadiusControls
            scaleMethods={scaleMethods}
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
          />
          <ElevationControls
            scaleMethods={scaleMethods}
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
        </Panel>
        <main>
          <Tabs>
            <TabList>
              <Tab>Desktop</Tab>
              <Tab>Mobile</Tab>
            </TabList>

            <TabPanel>
              {/* <div className="react-tabs__tab-panel"> */}
              <Spacing
                spacingSmallQuantity={spacingSmallQuantity}
                spacingLargeQuantity={spacingLargeQuantity}
                spacingScaleMethod={spacingScaleMethod}
                spacerLineHeight={spacerLineHeight}
              />
              <Typography
                
                typeScale={typeScale}
                typeSmallQuantity={typeSmallQuantity}
                typeLargeQuantity={typeLargeQuantity}
                typeScaleMethod={typeScaleMethod}
                sampleText={sampleText}
              />
              <Iconography
                iconScale={iconScale}
                iconSmallQuantity={iconSmallQuantity}
                iconLargeQuantity={iconLargeQuantity}
                iconScaleMethod={iconScaleMethod}
                iconLineHeight={iconLineHeight}
                iconPadding={iconPadding}
              />
              <TypeIconPairing
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
                spacingScaleMethod={spacingScaleMethod}
                textIconIconSizeIndex={textIconIconSizeIndex}
                sampleText={sampleText}
              />
              <Radius
                baseRadiusSize={baseRadiusSize}
                radiusScaleFactor={radiusScaleFactor}
                radiusSmallQuantity={radiusSmallQuantity}
                radiusLargeQuantity={radiusLargeQuantity}
                radiusScaleMethod={radiusScaleMethod}
              />
              <Elevation
                baseElevationSize={baseElevationSize}
                elevationScaleFactor={elevationScaleFactor}
                elevationSmallQuantity={elevationSmallQuantity}
                elevationLargeQuantity={elevationLargeQuantity}
                elevationScaleMethod={elevationScaleMethod}
              />
              {/* </div> */}
            </TabPanel>
            <TabPanel>
              <Spacing
                spacingSmallQuantity={spacingSmallQuantity}
                spacingLargeQuantity={spacingLargeQuantity}
                spacingScaleMethod={spacingScaleMethod}
                spacerLineHeight={spacerLineHeight}
              />
              <Typography
                
                typeScale={typeScale}
                typeSmallQuantity={typeSmallQuantity}
                typeLargeQuantity={typeLargeQuantity}
                typeScaleMethod={typeScaleMethod}
                sampleText={sampleText}
              />
              <Iconography
                
                iconScale={iconScale}
                iconSmallQuantity={iconSmallQuantity}
                iconLargeQuantity={iconLargeQuantity}
                iconScaleMethod={iconScaleMethod}
                iconLineHeight={iconLineHeight}
                iconPadding={iconPadding}
              />
              <TypeIconPairing
                
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
                spacingScaleMethod={spacingScaleMethod}
                textIconIconSizeIndex={textIconIconSizeIndex}
                sampleText={sampleText}
              />
              <Radius
                baseRadiusSize={baseRadiusSize}
                radiusScaleFactor={radiusScaleFactor}
                radiusSmallQuantity={radiusSmallQuantity}
                radiusLargeQuantity={radiusLargeQuantity}
                radiusScaleMethod={radiusScaleMethod}
              />
              <Elevation
                baseElevationSize={baseElevationSize}
                elevationScaleFactor={elevationScaleFactor}
                elevationSmallQuantity={elevationSmallQuantity}
                elevationLargeQuantity={elevationLargeQuantity}
                elevationScaleMethod={elevationScaleMethod}
              />
            </TabPanel>
          </Tabs>
        </main>
      </div>
    </>
  );
};

export default Foundations;
