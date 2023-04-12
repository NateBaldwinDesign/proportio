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
import '../styles/toolbar.css';
import ShapeHexagon from '../icons/shapeHexagon';
import ShapeText from '../icons/shapeText';
import ShapeSpacing from '../icons/shapeSpacing';
import ShapeElevation from '../icons/shapeElevation';
import ShapeCircle from '../icons/shapeCircle';

const Foundations = (props) => {
  const [sampleText, setSampleText] = useState("Text");
  const spacerLineHeight = 8;

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <Tabs className="toolbar">
            <TabList>
              <Tab>
                <ShapeHexagon size="24" color="currentColor"/>
              </Tab>
              <Tab>
                <ShapeSpacing size="24" color="currentColor"/>
              </Tab>
              <Tab>
                <ShapeText size="24" color="currentColor"/>
              </Tab>
              <Tab>
                <ShapeCircle size="24" color="currentColor"/>
              </Tab>
              <Tab>
                <ShapeElevation size="24" color="currentColor"/>
              </Tab>
            </TabList>
            <TabPanel>
              <BaseControls   />
            </TabPanel>
            <TabPanel>
              <SpacingControls />
            </TabPanel>
            <TabPanel>
              <TypeControls
                sampleText={sampleText}
                setSampleText={setSampleText}
              />
              <IconControls />
              <TypeIconPairingControls />
            </TabPanel>
            <TabPanel> 
              <RadiusControls />
            </TabPanel>
            <TabPanel>
              <ElevationControls />
            </TabPanel>
          </Tabs>
        </Panel>
        <main className="demoRow">
          <Spacing
            spacerLineHeight={spacerLineHeight}
          />
          <Typography
            sampleText={sampleText}
          />
          <Iconography />
          <TypeIconPairing
            sampleText={sampleText}
          />
          <Radius />
          <Elevation />
        </main>
      </div>
    </>
  );
};

export default Foundations;
