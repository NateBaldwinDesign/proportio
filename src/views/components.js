import React, { useState } from "react";
import ComponentControls from "../components/componentControls";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ComponentSpecs from "../components/componentSpecs";
import "../styles/tabs.css"

const Components = (props) => {
    const baseSize = props.baseSize;
    const baseIconSizeIndex = props.baseIconSizeIndex;
    const setBaseIconSizeIndex = props.setBaseIconSizeIndex;
    const baseComponentSize = props.baseComponentSize;
    const setBaseComponentSize = props.setBaseComponentSize;
    const componentLineHeight = props.componentLineHeight;
    const setComponentLineHeight = props.setComponentLineHeight;
    const componentScaleMethod = props.componentScaleMethod;
    const setComponentScaleMethod = props.setComponentScaleMethod;
    const componentPaddingMethod = props.componentPaddingMethod;
    const setComponentPaddingMethod = props.setComponentPaddingMethod;
    const typeScale = props.typeScale;
    const iconScale = props.iconScale;
    const componentSmallQuantity = props.componentSmallQuantity;
    const setComponentSmallQuantity = props.setComponentSmallQuantity;
    const componentLargeQuantity = props.componentLargeQuantity;
    const setComponentLargeQuantity = props.setComponentLargeQuantity;
   
    const paddingX = 8;
    const paddingY = 6;
    const typeSize = 16;
    const gapSize = 1;
    const minSizeScale = 1;

    const sizeNamesIncrement = [
    'large',
    'x-large',
    'xx-large',
    'xxx-large',
    'xiv-large'
    ];
    const sizeNamesDecrement = [
    'small',
    'x-small',
    'xx-small',
    'xxx-small',
    'xiv-small'
    ];
    const defaultSizeName = 'medium (default)';
    
    return (
        <>
        <ComponentControls
            baseSize={baseSize}
            baseIconSizeIndex={baseIconSizeIndex}
            setBaseIconSizeIndex={setBaseIconSizeIndex}
            baseComponentSize={baseComponentSize}
            setBaseComponentSize={setBaseComponentSize}
            componentLineHeight={componentLineHeight}
            setComponentLineHeight={setComponentLineHeight}
            componentSmallQuantity={componentSmallQuantity}
            setComponentSmallQuantity={setComponentSmallQuantity}
            componentLargeQuantity={componentLargeQuantity}
            setComponentLargeQuantity={setComponentLargeQuantity}
            componentScaleMethod={componentScaleMethod}
            setComponentScaleMethod={setComponentScaleMethod}
            componentPaddingMethod={componentPaddingMethod}
            setComponentPaddingMethod={setComponentPaddingMethod}
        />

        <main>
            <Tabs>
            <TabList>
                <Tab>Specs</Tab>
                <Tab>Examples</Tab>
            </TabList>

            <TabPanel>
                <ComponentSpecs
                    componentScaleMethod={componentScaleMethod}
                    componentLineHeight={componentLineHeight}
                    componentSize={baseComponentSize}
                    paddingX={paddingX}
                    paddingY={paddingY}
                    typeSize={typeSize}
                    iconSize={baseIconSizeIndex}
                    gapSize={gapSize}
                    minSizeScale={minSizeScale}
                    paddingScale ={componentPaddingMethod}
                    componentSmallQuantity={componentSmallQuantity}
                    componentLargeQuantity={componentLargeQuantity}
                    typeScale={typeScale}
                    iconScale={iconScale}
                    sizeNamesIncrement={sizeNamesIncrement}
                    sizeNamesDecrement={sizeNamesDecrement}
                    defaultSizeName={defaultSizeName}
                />
            </TabPanel>
            <TabPanel>
                <p>Component examples</p>
            </TabPanel>

            </Tabs>
            
        </main>
        </>
    )
}

export default Components;