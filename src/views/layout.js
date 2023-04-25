import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "../styles/tabs.css";
import Panel from "../components/panel";

const Layout = (props) => {
  const [showSpecs, setShowSpecs] = useState(false);
  const [showComponentIcon, setShowComponentIcon] = useState(true)
  const [showComponentText, setShowComponentText] = useState(true)

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          Hi
        </Panel>

        <main className="demoRow apply-font-main">
          Ghost blocks for demonstrating layouts...
        </main>
      </div>
    </>
  );
};

export default Layout;
