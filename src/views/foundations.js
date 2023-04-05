import React from "react";
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

const Foundations = (props) => {
    const scaleMethods = props.scaleMethods;
    const spacingMethods = props.spacingMethods;
    const baseSize = props.baseSize;
    const setBaseSize = props.setBaseSize;
    const spacingScale = props.spacingScale;
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

    return (
        <> 
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
            </Tabs>
          </main>
        </>
    )
}

export default Foundations;