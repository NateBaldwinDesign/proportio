import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import ComponentControls from "../components/componentControls";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ComponentSpecs from "../components/componentSpecs";
import "../styles/tabs.css";
import Panel from "../components/panel";

const Components = (props) => {
  const [showSpecs, setShowSpecs] = useState(true);

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <ComponentControls />
        </Panel>

        <main className="demoRow apply-font-main">
          {/* <Tabs>
            <TabList>
              <Tab>Desktop</Tab>
              <Tab>Mobile</Tab> */}
              <div className="tabs_action">
                <div className="checkboxGroup" >
                  <input
                    type="checkbox"
                    name="showComponentSpecs"
                    id="showComponentSpecs"
                    onClick={(e) => setShowSpecs(e.target.checked)}
                    defaultChecked={showSpecs}
                  />
                  <label htmlFor="showComponentSpecs">
                    Show component specs
                  </label>
                </div>
              </div>
            {/* </TabList> */}

            {/* <TabPanel> */}
              <ComponentSpecs
                showSpecs={showSpecs}
              />
            {/* </TabPanel>
            <TabPanel>
              <p>Component examples</p>
            </TabPanel>
          </Tabs> */}
        </main>
      </div>
    </>
  );
};

export default Components;
