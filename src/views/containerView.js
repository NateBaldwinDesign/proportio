import React, { useState } from 'react';
import {
  containerSmallSizesState,
  containerLargeSizesState,
  containerBaseRadiusIndexState,
  containerBaseElevationIndexState,
  containerRadiusScaleFactorState,
} from '../states/containers';
import { useRecoilState } from 'recoil';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import '../styles/tabs.css';
import Panel from '../components/panel';
import ContainerControls from '../components/containerControls';
import Containers from '../components/containers';

const ContainerView = (props) => {
  const [showSpecs, setShowSpecs] = useState(true);
  const [containerElevation, setContainerElevation] = useState(true);

  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <ContainerControls
            containerElevation={containerElevation}
            setContainerElevation={setContainerElevation}
          />
        </Panel>

        <main className="demoRow demoRow--compact apply-font-main">
          <div className="tabs_action">
            <fieldset>
              <div className="checkboxGroup">
                <input
                  type="checkbox"
                  name="showComponentSpecs"
                  id="showComponentSpecs"
                  onClick={(e) => setShowSpecs(e.target.checked)}
                  defaultChecked={showSpecs}
                />
                <label htmlFor="showComponentSpecs">Show container specs</label>
              </div>
            </fieldset>
          </div>
          <Containers
            showSpecs={showSpecs}
            containerElevation={containerElevation}
          />
        </main>
      </div>
    </>
  );
};

export default ContainerView;
