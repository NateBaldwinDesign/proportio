import React from 'react';
import {
    containerSmallSizesState,
    containerLargeSizesState,
    containerBaseRadiusIndexState,
    containerBaseElevationIndexState,
    containerRadiusScaleFactorState
} from '../states/containers';
import { useRecoilState } from 'recoil';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "../styles/tabs.css";
import Panel from "../components/panel";
import ContainerControls from '../components/containerControls';
import Containers from '../components/containers';

const ContainerView = (props) => {


  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <ContainerControls />
        </Panel>

        <main className="demoRow apply-font-main">
          <Containers />
        </main>
      </div>
    </>
  );
};

export default ContainerView;
