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
import BuyMeCoffee from './components/buyMeCoffee';

function App() {
  const iconLineHeight = 1.375; /* Just to align icon examples with typography */
  const spacerLineHeight = iconLineHeight;

  const [showModal, setShowModal] = useState(false);

  return (
    <RecoilRoot>
      <div className="App">
        <ExportDialog showModal={showModal} setShowModal={setShowModal} />
        <Tabs className="App_tabs">
          <Header showModal={showModal} setShowModal={setShowModal}>
            <TabList className="App_tabsList">
              <Tab className="App_tab">Typography</Tab>
              <Tab className="App_tab">Shape</Tab>
              <Tab className="App_tab">Components</Tab>
              <Tab className="App_tab">Containers</Tab>
            </TabList>
          </Header>

          <TabPanel className="App_tabPanel">
            <TypographyView iconLineHeight={iconLineHeight} />
          </TabPanel>
          <TabPanel className="App_tabPanel">
            <ShapesView spacerLineHeight={spacerLineHeight} />
          </TabPanel>
          <TabPanel className="App_tabPanel">
            <Components iconLineHeight={iconLineHeight} />
          </TabPanel>
          <TabPanel className="App_tabPanel">
            <ContainerView />
          </TabPanel>

          <BuyMeCoffee />
        </Tabs>
      </div>
    </RecoilRoot>
  );
}

export default App;
