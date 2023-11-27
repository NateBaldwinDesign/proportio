import React, { useState } from 'react';
import ComponentControls from '../components/componentControls';
import ComponentSpecs from '../components/componentSpecs';
import '../styles/tabs.css';
import Panel from '../components/panel';

const Components = (props) => {
  return (
    <>
      <div className="splitView">
        <Panel direction="column"></Panel>

        <main className="demoRow apply-font-main"></main>
      </div>
    </>
  );
};

export default Components;
