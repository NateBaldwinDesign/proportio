import React from "react";
import capitalize from "../utilities/capitalize";

const ComponentControls = (props) => {
    const baseSize = props.baseSize;
    const setBaseSize = props.setBaseSize;
    const baseIconSizeIndex = props.baseIconSizeIndex;
    const setBaseIconSizeIndex = props.setBaseIconSizeIndex;
    const baseComponentSize = props.baseComponentSize;
    const setBaseComponentSize = props.setBaseComponentSize;
    const componentLineHeight = props.componentLineHeight;
    const setComponentLineHeight = props.setComponentLineHeight;
    const componentSmallQuantity = props.componentSmallQuantity;
    const setComponentSmallQuantity = props.setComponentSmallQuantity;
    const componentLargeQuantity = props.componentLargeQuantity;
    const setComponentLargeQuantity = props.setComponentLargeQuantity;
    const componentScaleMethod = props.componentScaleMethod;
    const setComponentScaleMethod = props.setComponentScaleMethod;

    const componentScalingMethods = ['typeScale', 'spacingScale', 'customScale']
    const inputs = componentScalingMethods.map((method) => {
        return (
            <div key={`${method}`}>
                <input 
                    type="radio" 
                    id={`component${method}`} 
                    name="componentScale_method" 
                    value={method} 
                    onClick={(e) => setComponentScaleMethod(e.target.value)}
                    defaultChecked={ (method==='typeScale') ? true : false }
                />
                <label htmlFor={`component${method}`} >{capitalize(method)}</label>
            </div>
        )
    })

    return (
        <>
        <fieldset>
            <legend>Component scale</legend>
                <h4>Default sizes</h4>
                <section>
                    <div>
                        <input type="radio" id="componentTypeBased" name="componentScale_method" value="type" checked />
                        <label for="componentTypeBased">Type-based</label>
                    </div>
                    <div>
                        <input type="radio" id="componentSpacingBased" name="componentScale_method" value="spacing" />
                        <label for="componentSpacingBased">Spacing-based</label>
                    </div>
                    <div>
                        <label>Min-height index</label>
                        <input type="number" value="2" id="baseComponentSize"/>
                        <span class="computedValue" id="componentComputedSize"></span>
                    </div>
                    <div>
                        <label>Icon size index</label>
                        <input type="number" value="0" step="1" id="baseComponentIconSize"/>
                        <span class="computedValue" id="componentComputedIconSize"></span>
                    </div>
                    <div>
                        <label>Font-size index</label>
                        <input type="number" value="0" step="1" id="baseComponentTypeSize"/>
                        <span class="computedValue" id="componentComputedTypeSize"></span>
                    </div>
                    <div>
                        <label>Line height</label>
                        <input type="number" id="componentLineHeight" value="1.2" step="0.1"/>
                    </div>
                </section>
                <h4>Padding</h4>
                <section>
                    <div>
                        <input type="radio" id="paddingType" name="componentPadding_method" value="type"/>
                        <label for="paddingType">Type-based</label>
                    </div>
                    <div>
                        <input type="radio" id="paddingSpacing" name="componentPadding_method" value="spacing" checked/>
                        <label for="paddingSpacing">Spacing-based</label>
                    </div>
                    <div>
                        <label>X padding index</label>
                        <input type="number" id="componentXPaddingScale" value="0" step="1"/>
                        <span class="computedValue" id="componentXPaddingComputedSize"></span>
                    </div>
                    <div>
                        <label>Y padding index</label>
                        <input type="number" id="componentYPaddingScale" value="-1" step="1"/>
                        <span class="computedValue" id="componentYPaddingComputedSize"></span>
                    </div>
                </section>
                
                <h4>Number of sizes</h4>
                <section>
                <div>
                    <label>Small sizes</label>
                    <input type="number" id="componentSmallQuantity" value="2" step="1"/>
                </div>
                <div>
                    <label>Large sizes</label>
                    <input type="number" id="componentLargeQuantity" value="3" step="1"/>
                </div>
                </section>
            </fieldset>
        </>
    )
}

export default ComponentControls;