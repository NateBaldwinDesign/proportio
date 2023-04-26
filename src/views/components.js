import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import ComponentControls from '../components/componentControls';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ComponentSpecs from '../components/componentSpecs';
import '../styles/tabs.css';
import Panel from '../components/panel';

const Components = (props) => {
  const [showSpecs, setShowSpecs] = useState(false);
  const [showComponentIcon, setShowComponentIcon] = useState(true);
  const [showComponentText, setShowComponentText] = useState(true);

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <ComponentControls
            showComponentIcon={showComponentIcon}
            setShowComponentIcon={setShowComponentIcon}
            showComponentText={showComponentText}
            setShowComponentText={setShowComponentText}
          />
        </Panel>

        <main className="demoRow apply-font-main">
          {/* <Tabs>
            <TabList>
              <Tab>Desktop</Tab>
              <Tab>Mobile</Tab> */}
          <div className="tabs_action">
            <fieldset>
              <div className="checkboxGroup">
                <input
                  type="checkbox"
                  name="showComponentText"
                  id="showComponentText"
                  onClick={(e) => setShowComponentText(e.target.checked)}
                  defaultChecked={showComponentText ? true : false}
                />
                <label htmlFor="showComponentText">Show label</label>
              </div>
              <div className="checkboxGroup">
                <input
                  type="checkbox"
                  name="showComponentIcon"
                  id="showComponentIcon"
                  onClick={(e) => setShowComponentIcon(e.target.checked)}
                  defaultChecked={showComponentIcon ? true : false}
                />
                <label htmlFor="showComponentIcon">Show icon</label>
              </div>
              <div className="checkboxGroup">
                <input
                  type="checkbox"
                  name="showComponentSpecs"
                  id="showComponentSpecs"
                  onClick={(e) => setShowSpecs(e.target.checked)}
                  defaultChecked={showSpecs}
                />
                <label htmlFor="showComponentSpecs">Show component specs</label>
              </div>
            </fieldset>
          </div>
          {/* </TabList> */}

          {/* <TabPanel> */}
          <ComponentSpecs
            showSpecs={showSpecs}
            showComponentIcon={showComponentIcon}
            showComponentText={showComponentText}
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
