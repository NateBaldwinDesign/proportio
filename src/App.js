import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './styles/app.css';
import './styles/formElements.css';

import TypographyView from './views/typographyView';
import ShapesView from './views/shapesView';
import Components from './views/components';
import Header from './components/header';
import ExportDialog from './views/exportDialog';
import ContainerView from './views/containerView';
import Panel from './components/panel';
import BaseControls from './components/baseControls';
import TypeControls from './components/typeControls';
import IconControls from './components/iconControls';
import TypeIconPairing from './components/typeIconPairing';
import TypeIconPairingControls from './components/typeIconPairingControls';
import SpacingControls from './components/spacingControls';
import RadiusControls from './components/radiusControls';
import ElevationControls from './components/elevationControls';
import ComponentControls from './components/componentControls';
import ContainerControls from './components/containerControls';
import Typography from './components/typography';
import Iconography from './components/iconography';
import Spacing from './components/spacing';
import Radius from './components/radius';
import Elevation from './components/elevation';
import ComponentSpecs from './components/componentSpecs';
import Containers from './components/containers';

function App() {
  const iconLineHeight = 1.375; /* Just to align icon examples with typography */
  const spacerLineHeight = iconLineHeight; // 8?

  const [showModal, setShowModal] = useState(false);
  const [sampleText, setSampleText] = useState('Proportio');
  const [showSpecs, setShowSpecs] = useState(true);
  const [containerElevation, setContainerElevation] = useState(true);
  const [showComponentIcon, setShowComponentIcon] = useState(true);
  const [showComponentText, setShowComponentText] = useState(true);

  return (
    <RecoilRoot>
      <div className="App">
        <ExportDialog showModal={showModal} setShowModal={setShowModal} />

        <div className="splitView">
          <Panel direction="column">
            <Header showModal={showModal} setShowModal={setShowModal}></Header>
            <BaseControls />

            <TypeControls
              sampleText={sampleText}
              setSampleText={setSampleText}
            />
            <IconControls />
            <TypeIconPairingControls />

            <SpacingControls />
            <RadiusControls />
            <ElevationControls />

            <ComponentControls
              showComponentIcon={showComponentIcon}
              setShowComponentIcon={setShowComponentIcon}
              showComponentText={showComponentText}
              setShowComponentText={setShowComponentText}
            />

            <ContainerControls
              containerElevation={containerElevation}
              setContainerElevation={setContainerElevation}
            />
          </Panel>
          <main className="apply-font-main">
            <div className="demoRow">
              <Typography sampleText={sampleText} />
              <Iconography />
              <TypeIconPairing sampleText={sampleText} />
            </div>

            <div className="demoRow">
              <Spacing spacerLineHeight={spacerLineHeight} />
              <Radius />
              <Elevation />
            </div>

            <div className="demoRow">
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
                    <label htmlFor="showComponentSpecs">
                      Show component specs
                    </label>
                  </div>
                </fieldset>
              </div>

              <ComponentSpecs
                showSpecs={showSpecs}
                showComponentIcon={showComponentIcon}
                showComponentText={showComponentText}
              />
            </div>

            <div className="demoRow">
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
                    <label htmlFor="showComponentSpecs">
                      Show container specs
                    </label>
                  </div>
                </fieldset>
              </div>
              <Containers
                showSpecs={showSpecs}
                containerElevation={containerElevation}
              />
            </div>
          </main>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
