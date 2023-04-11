import React from "react";
import { useRecoilState } from 'recoil';
import Panel from "../components/panel";

const Docs = (props) => {
  return (
    <>
      <div className="splitView">
        <Panel direction="column">
          <p>List of anchor links here</p>
        </Panel>
        <main>
            <article>
                Content
            </article>
        </main>
      </div>
    </>
  );
};

export default Docs;
