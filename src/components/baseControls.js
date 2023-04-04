import React from "react";

const BaseControls = (props) => {
    const baseSize = props.baseSize;
    const setBaseSize = props.setBaseSize;
    
    return (
        <fieldset>
            <legend>Base values</legend>
            <div>
                <label htmlFor="">Base size</label>
                <input
                    type="number"
                    onInput={(e) => setBaseSize(Number(e.target.value))}
                    step="1"
                    min="0"
                    defaultValue={baseSize}
                />
            </div>
        </fieldset>
    )
}

export default BaseControls;