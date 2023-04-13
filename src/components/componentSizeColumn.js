import React from 'react';
import calculateScale from '../utilities/calculateScale';
import capitalize from '../utilities/capitalize';
import ComponentElement from './componentElement';
import {
    useRecoilState
} from 'recoil';
import {baseSizeState} from '../states/base';
import { componentPaddingMethodOptionState } from '../states/components';
import {
    typeScaleFormulaState,
    typeScaleState
} from '../states/typography'
import {
    iconScaleState
} from '../states/iconography'
import {
    textIconGapIndexState,
    textIconIconSizeIndexState,
    textIconGapScaleFormulaState
} from '../states/textIconPair'
import tokens from '../utilities/tokens';
import findReferenceToken from '../utilities/findReferenceToken';

const ComponentSizeColumn = (props) => {
    const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
    const [componentPaddingMethodOption, setComponentPaddingMethodOption] = useRecoilState(componentPaddingMethodOptionState)
    const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(typeScaleFormulaState)
    const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
    const [iconScale, setIconScale] = useRecoilState(iconScaleState)
    const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(textIconGapIndexState);
    const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(textIconIconSizeIndexState);
    const [textIconGapScaleFormula, setTextIconGapScaleFormula] = useRecoilState(textIconGapScaleFormulaState);
    
    const sizeName = props.sizeName;
    const newTokenNamePrefix = props.newTokenNamePrefix;
    const componentPaddingScale = props.componentPaddingScale;
    const paddingXIndexArray = props.paddingXIndexArray;
    const increment = props.increment;
    const paddingYIndexArray = props.paddingYIndexArray;
    const componentPaddingMethodFormula = props.componentPaddingMethodFormula;
    const textSizeIndexArray = props.textSizeIndexArray;
    const iconSizeIndexArray = props.iconSizeIndexArray;
    const iconScaleFormula = props.iconScaleFormula;

    const componentScale = props.componentScale;
    const componentMinHeightIndexArray = props.componentMinHeightIndexArray;
    const componentScaleMethodFormula = props.componentScaleMethodFormula;
    const baseRadiusSize = props.baseRadiusSize;
    const radiusScaleFactor = props.radiusScaleFactor;
    const componentRadiusIndexArray = props.componentRadiusIndexArray;
    const radiusScaleFormula = props.radiusScaleFormula;

    const componentLineHeight = props.componentLineHeight;
    const componentRadiusNewIndexValue = props.componentRadiusNewIndexValue;
    const scaleComponentRadius = props.scaleComponentRadius;
    const iconPadding = props.iconPadding;
    const showSpecs = props.showSpecs;
    const size = props.size;
    
    const componentGapScale = props.componentGapScale;
    const componentGapMethod = props.componentGapMethod;
    const gapIndexArray = props.gapIndexArray;
    
    const gapSize = calculateScale(
        baseSize,
        componentGapScale,
        gapIndexArray[increment],
        componentGapMethod
    );

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
        typeScaleFormula
    );
    
    const iconSize = calculateScale(
        baseSize,
        iconScale,
        iconSizeIndexArray[increment],
        iconScaleFormula
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
        radiusScaleFormula
    );

    // const computedHeight =
    //   paddingY * 2 + Number(componentLineHeight) * typeSize;

    const radius = (scaleComponentRadius) ? scaledComponentRadius : componentRadiusNewIndexValue ;


    tokens.component.push({[`${newTokenNamePrefix}-gap`]: {
        'value': findReferenceToken(`${Math.round(gapSize)}px`, textIconGapScaleFormula),
        'type': "dimension"
    }})
    tokens.component.push({[`${newTokenNamePrefix}-padding-left`]: {
        'value': `${Math.round(paddingX)}px`,
        'type': "dimension"
    }})
    tokens.component.push({[`${newTokenNamePrefix}-padding-right`]: {
        'value': `${Math.round(paddingX)}px`,
        'type': "dimension"
    }})
    tokens.component.push({[`${newTokenNamePrefix}-top`]: {
        'value': `${Math.round(paddingY)}px`,
        'type': "dimension"
    }})
    tokens.component.push({[`${newTokenNamePrefix}-bottom`]: {
        'value': `${Math.round(paddingY)}px`,
        'type': "dimension"
    }})
    tokens.component.push({[`${newTokenNamePrefix}-text-size`]: {
        'value': `${Math.round(typeSize)}px`,
        'type': "dimension"
    }})
    tokens.component.push({[`${newTokenNamePrefix}-icon-size`]: {
        'value': `${Math.round(iconSize)}px`,
        'type': "dimension"
    }})
    tokens.component.push({[`${newTokenNamePrefix}-min-height`]: {
        'value': `${Math.round(componentMinHeight)}px`,
        'type': "dimension"
    }})
    tokens.component.push({[`${newTokenNamePrefix}-radius`]: {
        'value': `${Math.round(scaledComponentRadius)}px`,
        'type': "dimension"
    }})

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