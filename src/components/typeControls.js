import React from "react";
import capitalize from "../utilities/capitalize";

const TypeControls = (props) => {
    const setTypeScale = props.setTypeScale;
    const typeScale = props.typeScale;
    const scaleMethods = props.scaleMethods;
    const setTypeScaleMethod = props.setTypeScaleMethod;
    const setTypeLargeQuantity = props.setTypeLargeQuantity;
    const setTypeSmallQuantity = props.setTypeSmallQuantity;
    const typeSmallQuantity = props.typeSmallQuantity;
    const typeLargeQuantity = props.typeLargeQuantity;

    const inputs = scaleMethods.map((method) => {
        return (
            <div key={`${method}`}>
                <input 
                    type="radio" 
                    id={`type${method}`} 
                    name="typeScale_method" 
                    value={method} 
                    onClick={(e) => setTypeScaleMethod(e.target.value)}
                    defaultChecked={ (method==='power') ? true : false }
                />
                <label htmlFor={`type${method}`} >{capitalize(method)}</label>
            </div>
        )
    })


    return (
        <fieldset>
            <legend>Typography</legend>
            <div className="column">
                {inputs}
            </div>
            <div>
                <label htmlFor="">Type scale</label>
                <input
                    type="number"
                    onInput={(e) => setTypeScale(Number(e.target.value))}
                    step="0.01"
                    min="0"
                    defaultValue={typeScale}
                />
            </div>
            
            <div className="column">
                <div>
                    <label htmlFor="">Small sizes</label>
                    <input
                        type="number"
                        onInput={(e) => setTypeSmallQuantity(Number(e.target.value))}
                        step="1"
                        min="0"
                        defaultValue={typeSmallQuantity}
                    />
                </div>
                
                <div>
                    <label htmlFor="">Large sizes</label>
                    <input
                        type="number"
                        onInput={(e) => setTypeLargeQuantity(Number(e.target.value))}
                        step="1"
                        min="0"
                        defaultValue={typeLargeQuantity}
                    />
                </div>
            </div>            
        </fieldset>

    )
}

export default TypeControls;