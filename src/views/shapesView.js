import React from 'react';
import SpacingControls from '../components/spacingControls';
import Spacing from '../components/spacing';
import '../styles/tabs.css';
import Radius from '../components/radius';
import RadiusControls from '../components/radiusControls';
import Panel from '../components/panel';
import ElevationControls from '../components/elevationControls';
import Elevation from '../components/elevation';
import '../styles/toolbar.css';

const ShapesView = (props) => {
  const spacerLineHeight = 8;

  return (
    <>
      <div className="splitView">
        <Panel direction="column"></Panel>
        <main className="demoRow apply-font-main"></main>
      </div>
    </>
  );
};

export default ShapesView;
