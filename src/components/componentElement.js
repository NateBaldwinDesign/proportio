import React from "react";
import createSvgIcon from "../utilities/createSvgIcon";
import "../styles/component.css"

const ComponentElement = (props) => {
    const componentSize = props.componentSize;
    const paddingX = props.paddingX;
    const paddingY = props.paddingY;
    const typeSize = props.typeSize;
    const iconSize = props.iconSize;
    const gapSize = props.gapSize;
    const minSizeScale = props.minSizeScale;
    const paddingScale = props.paddingScale;
    const spec = props.spec;
    const increment = props.increment;
    const typeScale = props.typeScale;
    const iconScale = props.iconScale;
    const componentLineHeight = props.componentLineHeight;

    const size = Math.round(componentSize * Math.pow(minSizeScale, increment));
    const newTypeSize = Math.round(typeSize * Math.pow(typeScale, increment));
    const newIconSize = Math.round(iconSize * Math.pow(iconScale, increment));
    const newPaddingX = Math.round(paddingX * Math.pow(paddingScale, increment));
    const newPaddingY = Math.round(paddingY * Math.pow(paddingScale, increment));
    const newGapSize = Math.round(gapSize * Math.pow(paddingScale, increment));
    const computedHeight = (newPaddingY * 2) + (Number(componentLineHeight) * typeSize);

    const specAnnotations = <>
        <div className="specHeight specs"> {`Height: ${Math.round(computedHeight)} \n (Min: ${size})`} </div>
        <div className="specType specs"> {`Font: ${newTypeSize}`} </div>
        <div className="specIcon specs"> {`Icon: ${newIconSize}`} </div>
        <div className="specPaddingX specs"> {`Pad-X: ${newPaddingX}`} </div>
        <div className="specPaddingY specs"> {`Pad-Y: ${newPaddingY}`} </div>
        <div className="specGap specs"> {`Gap: ${newGapSize}`} </div>
    </>;
    const showSpecs = (spec) ? specAnnotations : '';

    return (
        <div className={(spec) ? "componentSpecWrapper" : "componentWrapper"}>
            <div className={(spec) ? "componentSpecItemWrapper": "" }>
                <div style={{
                    minWidth: `${size}px`,
                    fontSize:`${newTypeSize}px`,
                    lineHeight: `${componentLineHeight}`
                }} className="component">
                    <div 
                        className={(spec) ? "paddingUnit padTop" : "padTop"}
                        style={{
                            height: `${newPaddingY}px`,
                            width:`${newPaddingY / 2}px`
                        }}
                    ></div>
                    <div 
                        className={(spec) ? "paddingUnit padBottom" : "padBottom"}
                        style={{
                            height: `${newPaddingY}px`,
                            width:`${newPaddingY / 2}px`
                        }}
                    ></div>
                    <div 
                        className={(spec) ? "paddingUnit padLeft" : "padLeft"}
                        style={{
                            height: `${newPaddingX / 2}px`,
                            width: `${newPaddingX}px`
                        }}
                    ></div>
                    <div 
                        className={(spec) ? "paddingUnit padRight" : "padRight"}
                        style={{
                            height: `${newPaddingX / 2}px`,
                            width: `${newPaddingX}px`
                        }}
                    ></div>
                    <div
                        className={(spec) ? "paddingUnit textIconGap" : "textIconGap"}
                        style={{
                            width: `${newGapSize}px`,
                            height: `${newGapSize / 2}px`
                        }}
                    ></div>
                    <div className={(spec) ? "componentIconSpec" : "componentIcon"} >
                        {createSvgIcon(newIconSize, newIconSize)}
                    </div>
                    <div className={(spec) ? "componentTextSpec" : "componentText"}>
                        Component text
                    </div>
                </div>
            </div>
            {showSpecs}
        </div>
    )
}

export default ComponentElement;