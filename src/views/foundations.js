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

const Foundations = (props) => {
  const [sampleText, setSampleText] = useState("Text");
  const spacerLineHeight = 8;

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <BaseControls   />
          <SpacingControls />
          <TypeControls
            sampleText={sampleText}
            setSampleText={setSampleText}
          />
          <IconControls />
          <TypeIconPairingControls />
          <RadiusControls />
          <ElevationControls />
        </Panel>
        <main className="demoRow">
          {/* <Tabs> */}
            {/* <TabList>
              <Tab>Desktop</Tab>
              <Tab>Mobile</Tab>
            </TabList> */}

            {/* <TabPanel> */}
              {/* <div className="react-tabs__tab-panel"> */}
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
              {/* </div> */}
            {/* </TabPanel> */}

          {/* </Tabs> */}
        </main>
      </div>
    </>
  );
};

export default Foundations;
