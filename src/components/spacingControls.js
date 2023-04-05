import React from "react";
import capitalize from "../utilities/capitalize";
import calculateScale from "../utilities/calculateScale";

const SpacingControls = (props) => {
    // const baseSize = props.baseSize;
    const setSpacingScale = props.setSpacingScale;
    const spacingScale = props.spacingScale;
    const scaleMethods = props.scaleMethods;
    const setSpacingScaleMethod = props.setSpacingScaleMethod;
    const setSpacingLargeQuantity = props.setSpacingLargeQuantity;
    const setSpacingSmallQuantity = props.setSpacingSmallQuantity;
    const spacingSmallQuantity = props.spacingSmallQuantity;
    const spacingLargeQuantity = props.spacingLargeQuantity;
    // const spacingScaleMethod = props.spacingScaleMethod;
    // const setSpacingPadding = props.setSpacingPadding;
    // const spacingPadding = props.spacingPadding;

    
    const inputs = scaleMethods.map((method) => {
        return (
            <div key={`spacing${method}`}>
                <input 
                    type="radio" 
                    id={`Spacing${method}`} 
                    name="SpacingScale_method" 
                    value={method} 
                    onClick={(e) => setSpacingScaleMethod(e.target.value)}
                    defaultChecked={ (method==='power') ? true : false }
                />
                <label htmlFor={`Spacing${method}`} >{capitalize(method)}</label>
            </div>
        )
    })


    return (
        <fieldset>
            <legend>Spacing</legend>
            <div className="column">
                {inputs}
            </div>
            <div>
                <label htmlFor="">Spacing scale</label>
                <input
                    type="number"
                    onInput={(e) => setSpacingScale(Number(e.target.value))}
                    step="0.01"
                    min="0"
                    defaultValue={spacingScale}
                />
            </div>
            <div className="column">
                <div>
                    <label htmlFor="">Small sizes</label>
                    <input
                        type="number"
                        onInput={(e) => setSpacingSmallQuantity(Number(e.target.value))}
                        step="1"
                        min="0"
                        defaultValue={spacingSmallQuantity}
                    />
                </div>
                
                <div>
                    <label htmlFor="">Large sizes</label>
                    <input
                        type="number"
                        onInput={(e) => setSpacingLargeQuantity(Number(e.target.value))}
                        step="1"
                        min="0"
                        defaultValue={spacingLargeQuantity}
                    />
                </div>
            </div>
        </fieldset>

    )
}

export default SpacingControls;