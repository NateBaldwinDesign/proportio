import React from "react";
import {
  useRecoilState
} from 'recoil';
import {baseSizeState} from '../states/base';

const BaseControls = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  
  const baseTouchScaleFactor = 1.5;

  return (
    <fieldset>
      <legend>Base values</legend>
      <div className="column">
        <div className="formGroup">
          <label htmlFor="">Unit size</label>
          <input
            type="number"
            onInput={(e) => setBaseSize(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={baseSize}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Touch scale factor</label>
          <input
            type="number"
            // onInput={(e) => setBaseSize(Number(e.target.value))}
            step="1"
            min="0"
            defaultValue={baseTouchScaleFactor}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default BaseControls;
