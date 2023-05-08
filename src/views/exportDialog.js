import React, { useState } from 'react';
import ReactModal from 'react-modal';
import JSONPretty from 'react-json-pretty';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import createCssVariables from '../utilities/createCssVariables';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../styles/modal.css';

const myTheme = {
  main: 'line-height:1.3;color:var(--Gray400);background:transparent;overflow:auto;',
  error: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
  key: 'color:#0896A3;',
  string: 'color:#4C3EAB;',
  value: 'color:#A34908;',
  boolean: 'color:#ac81fe;',
};

const ExportDialog = (props) => {
  const showModal = props.showModal;
  const setShowModal = props.setShowModal;

  const [copiedTokens, setCopiedTokens] = useState(false);
  const ButtonTextTokens = copiedTokens === true ? 'Copied!' : 'Copy';
  const [copiedCssVars, setCopiedCssVars] = useState(false);
  const ButtonTextCssVars = copiedCssVars === true ? 'Copied!' : 'Copy';

  return (
    <ReactModal
      isOpen={showModal}
      closeTimeoutMS={300}
      parentSelector={() => document.querySelector('#root')}
    >
      <div className="Modal__Header">
        <h2 style={{ marginBottom: 0, marginTop: 0 }}>Export</h2>
        <button
          className="clearButton"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </button>
      </div>
      <Tabs>
        <TabList>
          <Tab>W3C tokens</Tab>
          <Tab>CSS variables</Tab>
        </TabList>
        <TabPanel className="codeOutput">
          <div style={{ overflow: 'auto' }}>
            {/* <JSONPretty data={tokens} theme={myTheme} /> */}
          </div>
          <CopyToClipboard
            // text={JSON.stringify(tokens)}
            onCopy={() => {
              setCopiedTokens(true);
              setTimeout(() => {
                setCopiedTokens(false);
              }, 2000);
            }}
          >
            <button>{ButtonTextTokens}</button>
          </CopyToClipboard>
        </TabPanel>
        <TabPanel className="codeOutput">
          <div style={{ overflow: 'auto' }}>
            {/* <pre class="__json-pretty__">{CssTokens}</pre> */}
          </div>
          <CopyToClipboard
            // text={`${CssTokens}`}
            onCopy={() => {
              setCopiedCssVars(true);
              setTimeout(() => {
                setCopiedCssVars(false);
              }, 2000);
            }}
          >
            <button>{ButtonTextCssVars}</button>
          </CopyToClipboard>
        </TabPanel>
      </Tabs>
    </ReactModal>
  );
};

export default ExportDialog;
