import React from "react";
import {
  useRecoilState
} from 'recoil';
import {
  baseSizeState,
  baseMobileScaleFactorState
} from '../states/base';

const BaseControls = (props) => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [baseMobileScaleFactor, setBaseMobileScaleFactor] = useRecoilState(baseMobileScaleFactorState)

  return (
    <fieldset style={{marginBottom: '0'}}>
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
        {/* <div className="formGroup">
          <label htmlFor="">Touch scale factor</label>
          <input
            type="number"
            onInput={(e) => setBaseMobileScaleFactor(Number(e.target.value))}
            step="0.01"
            min="1"
            defaultValue={baseMobileScaleFactor}
          />
        </div> */}
      </div>
    </fieldset>
  );
};

export default BaseControls;
