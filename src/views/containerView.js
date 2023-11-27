import React, { useState } from 'react';
import Panel from '../components/panel';
import ContainerControls from '../components/containerControls';
import Containers from '../components/containers';

const ContainerView = (props) => {
  return (
    <>
      <div className="splitView">
        <Panel direction="column"></Panel>

        <main className="demoRow demoRow--compact apply-font-main"></main>
      </div>
    </>
  );
};

export default ContainerView;
