import React, { useState } from 'react';
import BaseControls from '../components/baseControls';
import TypeControls from '../components/typeControls';
import IconControls from '../components/iconControls';
import TypeIconPairingControls from '../components/typeIconPairingControls';
import Typography from '../components/typography';
import Iconography from '../components/iconography';
import TypeIconPairing from '../components/typeIconPairing';
import '../styles/tabs.css';
import Panel from '../components/panel';
import '../styles/toolbar.css';

const TypographyView = (props) => {
  const [sampleText, setSampleText] = useState('Proportio');

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <BaseControls />

          <TypeControls sampleText={sampleText} setSampleText={setSampleText} />
          <IconControls />
          <TypeIconPairingControls />
        </Panel>
        <main className="demoRow apply-font-main">
          <Typography sampleText={sampleText} />
          <Iconography />
          <TypeIconPairing sampleText={sampleText} />
        </main>
      </div>
    </>
  );
};

export default TypographyView;
