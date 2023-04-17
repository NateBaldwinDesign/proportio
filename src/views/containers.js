import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ComponentSpecs from "../components/componentSpecs";
import "../styles/tabs.css";
import Panel from "../components/panel";
import ContainerControls from "../components/containerControls";
import ContainerSpecs from "../components/containerSpecs";

const Containers = (props) => {
  const [showSpecs, setShowSpecs] = useState(true);

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <ContainerControls />
        </Panel>

        <main className="demoRow">
              <div className="tabs_action">
                <div className="checkboxGroup" >
                  <input
                    type="checkbox"
                    name="showContainerSpecs"
                    id="showContainerSpecs"
                    onClick={(e) => setShowSpecs(e.target.checked)}
                    defaultChecked={showSpecs}
                  />
                  <label htmlFor="showContainerSpecs">
                    Show container specs
                  </label>
                </div>
              </div>

              <ContainerSpecs
                showSpecs={showSpecs}
              />

        </main>
      </div>
    </>
  );
};

export default Containers;
