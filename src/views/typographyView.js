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

const TypographyView = (props) => {
  const [sampleText, setSampleText] = useState("Proportional");

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <BaseControls   />

          <TypeControls
                sampleText={sampleText}
                setSampleText={setSampleText}
              />
              <IconControls />
              <TypeIconPairingControls />
        </Panel>
        <main className="demoRow apply-font-main">
          <Typography
            sampleText={sampleText}
          />
          <Iconography />
          <TypeIconPairing
            sampleText={sampleText}
          />
        </main>
      </div>
    </>
  );
};

export default TypographyView;
