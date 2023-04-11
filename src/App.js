import React from "react";
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

function App() {

  const iconLineHeight = 1.375; /* Just to align icon examples with typography */
  const spacerLineHeight = iconLineHeight;

  return (
    <RecoilRoot>
      <div className="App">
        <Tabs className="App_tabs">
          <Header>
            <TabList className="App_tabsList">
              <Tab className="App_tab">Home</Tab>
              <Tab className="App_tab">Foundations</Tab>
              <Tab className="App_tab">Components</Tab>
            </TabList>
          </Header>

          <TabPanel className="App_tabPanel">
            <Home />
          </TabPanel>

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
        </Tabs>
      </div>
    </RecoilRoot>
  );
}

export default App;
