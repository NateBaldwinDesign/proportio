import React from "react";
import capitalize from "../utilities/capitalize";

const IconControls = (props) => {
    const setIconScale = props.setIconScale;
    const iconScale = props.iconScale;
    const scaleMethods = props.scaleMethods;
    const setIconScaleMethod = props.setIconScaleMethod;
    const setIconLargeQuantity = props.setIconLargeQuantity;
    const setIconSmallQuantity = props.setIconSmallQuantity;
    const iconSmallQuantity = props.iconSmallQuantity;
    const iconLargeQuantity = props.iconLargeQuantity;
    const setIconPadding = props.setIconPadding;
    const iconPadding = props.iconPadding;

    const inputs = scaleMethods.map((method) => {
        return (
            <div key={`iconography${method}`}>
                <input 
                    type="radio" 
                    id={`Icon${method}`} 
                    name="IconScale_method" 
                    value={method} 
                    onClick={(e) => setIconScaleMethod(e.target.value)}
                    defaultChecked={ (method==='power') ? true : false }
                />
                <label htmlFor={`Icon${method}`} >{capitalize(method)}</label>
            </div>
        )
    })


    return (
        <fieldset>
            <legend>Iconography</legend>
            {inputs}
            <div>
                <label htmlFor="">Icon scale</label>
                <input
                    type="number"
                    onInput={(e) => setIconScale(Number(e.target.value))}
                    step="0.01"
                    min="0"
                    defaultValue={iconScale}
                />
            </div>
            
            <div>
                <label htmlFor="">Small sizes</label>
                <input
                    type="number"
                    onInput={(e) => setIconSmallQuantity(Number(e.target.value))}
                    step="1"
                    min="0"
                    defaultValue={iconSmallQuantity}
                />
            </div>
            
            <div>
                <label htmlFor="">Large sizes</label>
                <input
                    type="number"
                    onInput={(e) => setIconLargeQuantity(Number(e.target.value))}
                    step="1"
                    min="0"
                    defaultValue={iconLargeQuantity}
                />
            </div>

            <div>
                <label htmlFor="">Icon padding</label>
                <input
                    type="number"
                    onInput={(e) => setIconPadding(Number(e.target.value))}
                    step="1"
                    min="0"
                    defaultValue={iconPadding}
                />
            </div>
            
        </fieldset>

    )
}

export default IconControls;