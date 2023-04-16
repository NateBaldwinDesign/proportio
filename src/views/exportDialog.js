import React, {useState} from 'react';
import ReactModal from 'react-modal';
import tokens from '../utilities/tokens'
import JSONPretty from 'react-json-pretty';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import createCssVariables from '../utilities/createCssVariables';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../styles/modal.css'

const myTheme = {
    main: 'line-height:1.3;color:var(--Gray400);background:transparent;overflow:auto;',
    error: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
    key: 'color:#0896A3;',
    string: 'color:#4C3EAB;',
    value: 'color:#A34908;',
    boolean: 'color:#ac81fe;',
}

const ExportDialog = (props) => {
    const showModal = props.showModal
    const setShowModal = props.setShowModal;

    const [copied, setCopied] = useState(false);
    const ButtonText = (copied===true) ? "Copied!" : "Copy";

    const CssTokens = createCssVariables(tokens)

    return (
        <ReactModal
            isOpen={
                showModal
            }

            // onAfterOpen={
            //     handleAfterOpenFunc
            // /* Function that will be run after the modal has opened. */}
            // onAfterClose={
            //     handleAfterCloseFunc
            // /* Function that will be run after the modal has closed. */}
            // onRequestClose={
            //     handleRequestCloseFunc
            // /* Function that will be run when the modal is requested
            //     to be closed (either by clicking on overlay or pressing ESC).
            //     Note: It is not called if isOpen is changed by other means. */}

            // closeTimeoutMS={
            //     0
            // /* Number indicating the milliseconds to wait before closing
            //     the modal. */}
            // style={
            //     { overlay: {}, content: {} }
            // /* Object indicating styles to be used for the modal.
            //     It has two keys, `overlay` and `content`.
            //     See the `Styles` section for more details. */}
            // contentLabel={
            //     "Example Modal"
            // /* String indicating how the content container should be announced
            //     to screenreaders */}
            // portalClassName={
            //     "ReactModalPortal"
            // /* String className to be applied to the portal.
            //     See the `Styles` section for more details. */}
            // overlayClassName={
            //     "ReactModal__Overlay"
            // /* String className to be applied to the overlay.
            //     See the `Styles` section for more details. */}
            // id={
            //     "some-id"
            // /* String id to be applied to the content div. */}
            // className={
            //     "ReactModal__Content"
            // /* String className to be applied to the modal content.
            //     See the `Styles` section for more details. */}
            // bodyOpenClassName={
            //     "ReactModal__Body--open"
            // /* String className to be applied to the modal ownerDocument.body
            //     (must be a constant string).
            //     This attribute when set as `null` doesn't add any class
            //     to document.body.
            //     See the `Styles` section for more details. */}
            // htmlOpenClassName={
            //     "ReactModal__Html--open"
            // /* String className to be applied to the modal ownerDocument.html
            //     (must be a constant string).
            //     This attribute is `null` by default.
            //     See the `Styles` section for more details. */}
            // ariaHideApp={
            //     true
            // /* Boolean indicating if the appElement should be hidden */}
            // shouldFocusAfterRender={
            //     true
            // /* Boolean indicating if the modal should be focused after render. */}
            // shouldCloseOnOverlayClick={
            //     true
            // /* Boolean indicating if the overlay should close the modal */}
            // shouldCloseOnEsc={
            //     true
            // /* Boolean indicating if pressing the esc key should close the modal
            //     Note: By disabling the esc key from closing the modal
            //     you may introduce an accessibility issue. */}
            // shouldReturnFocusAfterClose={
            //     true
            // /* Boolean indicating if the modal should restore focus to the element
            //     that had focus prior to its display. */}
            // role={
            //     "dialog"
            // /* String indicating the role of the modal, allowing the 'dialog' role
            //     to be applied if desired.
            //     This attribute is `dialog` by default. */}
            // preventScroll={
            //     false
            // /* Boolean indicating if the modal should use the preventScroll flag when
            //     restoring focus to the element that had focus prior to its display. */}
            parentSelector={
                () => document.querySelector('#root')
            }
            // aria={
            //     {
            //     labelledby: "heading",
            //     describedby: "full_description"
            //     }
            // /* Additional aria attributes (optional). */}
            // data={
            //     { background: "green" }
            // /* Additional data attributes (optional). */}
            // testId={
            //     ""
            // /* String testId that renders a data-testid attribute in the DOM,
            //     useful for testing. */}
            // // overlayRef={
            // //     setOverlayRef
            // // /* Overlay ref callback. */}
            // // contentRef={
            // //     setContentRef
            // // /* Content ref callback. */}
            // overlayElement={
            //     (props, contentElement) => <div {...props}>{contentElement}</div>
            // /* Custom Overlay element. */}
            // contentElement={
            //     (props, children) => <div {...props}>{children}</div>
            // /* Custom Content element. */}
            >
                <div>
                    <button 
                        onClick={() => {setShowModal(false)}}
                    >Close</button>
                    <p>Modal Content</p>
                </div>
                <Tabs>
              <TabList> 
                <Tab>W3C tokens</Tab>
                <Tab>CSS variables</Tab>
              </TabList>
              <TabPanel className="codeOutput">
                  <CopyToClipboard text={JSON.stringify(tokens)}
                    onCopy={() => {
                      setCopied(true)
                      setTimeout(() => {
                        setCopied(false)
                      }, 3000)
                    }}>
                    <button>{ButtonText}</button>
                  </CopyToClipboard>
                  <JSONPretty data={tokens} theme={myTheme}/>
              </TabPanel>
              <TabPanel className="codeOutput">
                <CopyToClipboard text={`${CssTokens}`}
                  onCopy={() => {
                    setCopied(true)
                    setTimeout(() => {
                      setCopied(false)
                    }, 3000)
                  }}>
                  <button>{ButtonText}</button>
                </CopyToClipboard>
                <pre class="__json-pretty__">{CssTokens}</pre>
              </TabPanel>
            </Tabs>
        </ReactModal>
    )
}

export default ExportDialog;
