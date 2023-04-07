import React from 'react';
import calculateScale from '../utilities/calculateScale';
import capitalize from '../utilities/capitalize';
import ComponentElement from './componentElement';

const ComponentSizeColumn = (props) => {
    const baseSize = props.baseSize;
    const componentPaddingScale = props.componentPaddingScale;
    const paddingXIndexArray = props.paddingXIndexArray;
    const componentPaddingMethodFormula = props.componentPaddingMethodFormula;
    const paddingYIndexArray = props.paddingYIndexArray;
    const typeScale = props.typeScale;
    const textSizeIndexArray = props.textSizeIndexArray;
    const typeScaleMethod = props.typeScaleMethod;
    const iconScale = props.iconScale;
    const iconSizeIndexArray = props.iconSizeIndexArray;
    const iconScaleMethod = props.iconScaleMethod;
    const componentScale = props.componentScale;
    const componentMinHeightIndexArray = props.componentMinHeightIndexArray;
    const componentScaleMethodFormula = props.componentScaleMethodFormula;
    const baseRadiusSize = props.baseRadiusSize;
    const radiusScaleFactor = props.radiusScaleFactor;
    const componentRadiusIndexArray = props.componentRadiusIndexArray;
    const radiusScaleMethod = props.radiusScaleMethod;
    const sizeNamesDecrement = props.sizeNamesDecrement;
    const sizeNamesIncrement = props.sizeNamesIncrement;
    const componentLineHeight = props.componentLineHeight;
    const componentRadiusNewIndexValue = props.componentRadiusNewIndexValue;
    const scaleComponentRadius = props.scaleComponentRadius;
    const iconPadding = props.iconPadding;
    const showSpecs = props.showSpecs;
    const size = props.size;
    const increment = props.increment;

    const paddingX = calculateScale(
        baseSize,
        componentPaddingScale,
        paddingXIndexArray[increment],
        componentPaddingMethodFormula
    );
    const paddingY = calculateScale(
        baseSize,
        componentPaddingScale,
        paddingYIndexArray[increment],
        componentPaddingMethodFormula
    );

    const typeSize = calculateScale(
        baseSize,
        typeScale,
        textSizeIndexArray[increment],
        typeScaleMethod
    );
    const gapSize = props.gapSize;
    const iconSize = calculateScale(
        baseSize,
        iconScale,
        iconSizeIndexArray[increment],
        iconScaleMethod
    );

    const componentMinHeight = calculateScale(
        baseSize,
        componentScale,
        componentMinHeightIndexArray[increment],
        componentScaleMethodFormula
    );
    const scaledComponentRadius = calculateScale(
        baseRadiusSize,
        radiusScaleFactor,
        componentRadiusIndexArray[increment],
        radiusScaleMethod
    );

    // const computedHeight =
    //   paddingY * 2 + Number(componentLineHeight) * typeSize;
    const decrementIndex = (size * -1) - 1;
    let sizeName = size < 0 ? sizeNamesDecrement[decrementIndex] : sizeNamesIncrement[size];
    if(sizeName===undefined) sizeName = "undefined"

    const radius = (scaleComponentRadius) ? scaledComponentRadius : componentRadiusNewIndexValue ;

    return (
        <div className="specRowItem"  key={`componenSpecItem${sizeName}${componentMinHeight}`}>
            <h5> {capitalize(sizeName)} </h5>
            <ComponentElement
                key={`component${sizeName}${componentMinHeight}`}
                componentMinHeight={componentMinHeight}
                paddingX={paddingX}
                paddingY={paddingY}
                typeSize={typeSize}
                iconSize={iconSize}
                iconPadding={iconPadding}
                gapSize={gapSize}
                componentLineHeight={componentLineHeight}
                spec={showSpecs}
                radius={radius}
            />
        </div>
    );
}

export default ComponentSizeColumn;