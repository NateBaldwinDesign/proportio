import React from "react";
import '../styles/iconography.css'
import ComponentElement from "./componentElement";

const ComponentSpecs = (props) => {
    const componentScaleMethod = props.componentScaleMethod;
    const baseIconSizeIndex = props.baseIconSizeIndex;
    const baseComponentSize = props.baseComponentSize;
    const componentLineHeight = props.componentLineHeight;
    const componentSize = props.componentSize
    const paddingX = props.paddingX
    const paddingY = props.paddingY
    const typeSize = props.typeSize
    const iconSize = props.iconSize
    const gapSize = props.gapSize
    const minSizeScale = props.minSizeScale
    const paddingScale = props.paddingScale
    const componentSmallQuantity = props.componentSmallQuantity
    const componentLargeQuantity = props.componentLargeQuantity
    const typeScale = props.typeScale;
    const iconScale = props.iconScale;
    const sizeNamesIncrement = props.sizeNamesIncrement;
    const sizeNamesDecrement = props.sizeNamesDecrement;
    const defaultSizeName = props.defaultSizeName;

    let smallSizeArray = new Array(componentSmallQuantity).fill(0);
    let largeSizeArray = new Array(componentLargeQuantity).fill(0);

    console.log(componentSmallQuantity, componentLargeQuantity)

    const smallSizes = smallSizeArray.map((e, i) => {
        return <>
            <h5> {sizeNamesDecrement[i]} </h5>
            <ComponentElement
                key={`${sizeNamesDecrement[i]-i}`}
                componentSize={baseComponentSize}
                paddingX={paddingX}
                paddingY={paddingY}
                typeSize={typeSize}
                iconSize={iconSize}
                gapSize={gapSize}
                minSizeScale={minSizeScale}
                paddingScale={paddingScale}
                componentLineHeight={componentLineHeight}
                spec
                increment={(i+1) * -1}
                typeScale={typeScale}
                iconScale={iconScale}
            />
        </>
    })
    const orderedSmallSizes = smallSizes.reverse();

    const largeSizes = largeSizeArray.map((e, i) => {
        return <>
            <h5> {(i===0) ? defaultSizeName : sizeNamesIncrement[i]} </h5>
            <ComponentElement
                key={`${sizeNamesIncrement[i]-i}`}
                componentSize={baseComponentSize}
                paddingX={paddingX}
                paddingY={paddingY}
                typeSize={typeSize}
                iconSize={iconSize}
                gapSize={gapSize}
                minSizeScale={minSizeScale}
                paddingScale={paddingScale}
                componentLineHeight={componentLineHeight}
                spec
                increment={i}
                typeScale={typeScale}
                iconScale={iconScale}
            />
        </>
    })

    
    return (
        <div className="column">
            {orderedSmallSizes}
            {largeSizes}
        </div>
    )
}

export default ComponentSpecs;
