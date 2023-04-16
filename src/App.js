import React, { useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';

import "./styles/app.css";
import "./styles/formElements.css";

import Foundations from "./views/foundations";
import Components from "./views/components";
import Header from "./components/header";
import Home from "./views/home";
// import Docs from './views/docs';
// import Tokens from "./views/tokens";
import ExportDialog from "./views/exportDialog"

function App() {

  const iconLineHeight = 1.375; /* Just to align icon examples with typography */
  const spacerLineHeight = iconLineHeight;

  const [showModal, setShowModal] = useState(false)


  return (
    <RecoilRoot>
      <div className="App">
        <ExportDialog
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Tabs className="App_tabs">
          <Header
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <TabList className="App_tabsList">
              {/* <Tab className="App_tab">Home</Tab> */}
              <Tab className="App_tab">Foundations</Tab>
              <Tab className="App_tab">Components</Tab>
              {/* <Tab className="App_tab">Tokens</Tab> */}
              {/* <Tab className="App_tab">Docs</Tab> */}
            </TabList>
          </Header>

          {/* <TabPanel className="App_tabPanel">
            <Home />
          </TabPanel> */}

          <TabPanel className="App_tabPanel">
            <Foundations
              iconLineHeight={iconLineHeight}
              spacerLineHeight={spacerLineHeight}
            />
          </TabPanel>
          <TabPanel className="App_tabPanel">
            <Components
              iconLineHeight={iconLineHeight}
            />
          </TabPanel>
          {/* <TabPanel className="App_tabPanel">
            <Tokens />
          </TabPanel> */}
          {/* <TabPanel className="App_tabPanel">
            <Docs/>
          </TabPanel> */}
        </Tabs>
      </div>
    </RecoilRoot>
  );
}

export default App;
