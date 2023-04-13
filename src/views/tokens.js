import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import ComponentControls from "../components/componentControls";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ComponentSpecs from "../components/componentSpecs";
import "../styles/tabs.css";
import Panel from "../components/panel";
import tokens from '../utilities/tokens'

const Tokens = (props) => {
    const tokenCode = JSON.stringify(tokens, null, 2)

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          Token controls...
        </Panel>

        <main className="demoRow">
            <pre>{tokenCode}</pre>
        </main>
    </div>
    </>
  )
}

export default Tokens;
