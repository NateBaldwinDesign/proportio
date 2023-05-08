import React from 'react';
import { useRecoilState } from 'recoil';
import {
  baseSizeState,
  baseMobileScaleFactorState,
  baseScaleUnitState,
} from '../states/base';
import {
  baseComponentSizeIndexState,
  componentLineHeightState,
  componentSmallQuantityState,
  componentLargeQuantityState,
  componentMinHeightMethodOptionState,
  componentPaddingMethodOptionState,
  baseComponentTextSizeIndexState,
  baseComponentPaddingXIndexState,
  baseComponentPaddingYIndexState,
  componentDensitySmallQuantityState,
  componentDensityLargeQuantityState,
  componentDensityScaleFactorState,
  scaleComponentRadiusState,
  baseComponentRadiusState,
} from '../states/components';
import {
  containerSmallSizesState,
  containerLargeSizesState,
  containerBasePaddingXIndexState,
  containerBasePaddingYIndexState,
  containerBaseElevationIndexState,
  containerRadiusScaleFactorState,
  containerPaddingScaleFactorState,
  containerBaseRadiusIndexState,
  containerPaddingMethodOptionState,
} from '../states/containers';
import {
  baseElevationSizeState,
  elevationScaleFactorState,
  elevationSmallQuantityState,
  elevationLargeQuantityState,
  elevationScaleFormulaState,
  elevationOffsetYState,
} from '../states/elevation';
import {
  iconScaleState,
  iconSmallQuantityState,
  iconLargeQuantityState,
  iconScaleFormulaState,
  iconPaddingState,
  iconState,
  iconStrokeState,
  iconStrokeScaleState,
} from '../states/iconography';
import {
  baseRadiusSizeState,
  radiusScaleFactorState,
  radiusSmallQuantityState,
  radiusLargeQuantityState,
  radiusScaleFormulaState,
} from '../states/radius';
import {
  spacingScaleFactorState,
  spacingSmallQuantityState,
  spacingLargeQuantityState,
  spacingFormulaState,
} from '../states/spacing';
import {
  textIconGapIndexState,
  textIconIconSizeIndexState,
  textIconGapScaleFormulaState,
} from '../states/textIconPair';
import {
  typeScaleState,
  typeSmallQuantityState,
  typeLargeQuantityState,
  typeScaleFormulaState,
  typeFontFamilyState,
  typeFontWeightState,
} from '../states/typography';

import createCssVariables from './createCssVariables';

const createTokens = () => {
  const [baseSize, setBaseSize] = useRecoilState(baseSizeState);
  const [baseMobileScaleFactor, setBaseMobileScaleFactor] = useRecoilState(
    baseMobileScaleFactorState,
  );
  const [baseScaleUnit, setBaseScaleUnit] = useRecoilState(baseScaleUnitState);
  const [baseComponentSizeIndex, setBaseComponentSizeIndex] = useRecoilState(
    baseComponentSizeIndexState,
  );
  const [componentLineHeight, setComponentLineHeight] = useRecoilState(
    componentLineHeightState,
  );
  const [componentSmallQuantity, setComponentSmallQuantity] = useRecoilState(
    componentSmallQuantityState,
  );
  const [componentLargeQuantity, setComponentLargeQuantity] = useRecoilState(
    componentLargeQuantityState,
  );
  const [componentMinHeightMethodOption, setComponentMinHeightMethodOption] =
    useRecoilState(componentMinHeightMethodOptionState);
  const [componentPaddingMethodOption, setComponentPaddingMethodOption] =
    useRecoilState(componentPaddingMethodOptionState);
  const [baseComponentTextSizeIndex, setBaseComponentTextSizeIndex] =
    useRecoilState(baseComponentTextSizeIndexState);
  const [baseComponentPaddingXIndex, setBaseComponentPaddingXIndex] =
    useRecoilState(baseComponentPaddingXIndexState);
  const [baseComponentPaddingYIndex, setBaseComponentPaddingYIndex] =
    useRecoilState(baseComponentPaddingYIndexState);
  const [componentDensitySmallQuantity, setComponentDensitySmallQuantity] =
    useRecoilState(componentDensitySmallQuantityState);
  const [componentDensityLargeQuantity, setComponentDensityLargeQuantity] =
    useRecoilState(componentDensityLargeQuantityState);
  const [componentDensityScaleFactor, setComponentDensityScaleFactor] =
    useRecoilState(componentDensityScaleFactorState);
  const [scaleComponentRadius, setScaleComponentRadius] = useRecoilState(
    scaleComponentRadiusState,
  );
  const [baseComponentRadius, setBaseComponentRadius] = useRecoilState(
    baseComponentRadiusState,
  );
  const [containerSmallSizes, setContainerSmallSizes] = useRecoilState(
    containerSmallSizesState,
  );
  const [containerLargeSizes, setContainerLargeSizes] = useRecoilState(
    containerLargeSizesState,
  );
  const [containerBasePaddingXIndex, setContainerBasePaddingXIndex] =
    useRecoilState(containerBasePaddingXIndexState);
  const [containerBasePaddingYIndex, setContainerBasePaddingYIndex] =
    useRecoilState(containerBasePaddingYIndexState);
  const [containerBaseElevationIndex, setContainerBaseElevationIndex] =
    useRecoilState(containerBaseElevationIndexState);
  const [containerRadiusScaleFactor, setContainerRadiusScaleFactor] =
    useRecoilState(containerRadiusScaleFactorState);
  const [containerPaddingScaleFactor, setContainerPaddingScaleFactor] =
    useRecoilState(containerPaddingScaleFactorState);
  const [containerBaseRadiusIndex, setContainerBaseRadiusIndex] =
    useRecoilState(containerBaseRadiusIndexState);
  const [containerPaddingMethodOption, setContainerPaddingMethodOption] =
    useRecoilState(containerPaddingMethodOptionState);
  const [baseElevationSize, setBaseElevationSize] = useRecoilState(
    baseElevationSizeState,
  );
  const [elevationScaleFactor, setElevationScaleFactor] = useRecoilState(
    elevationScaleFactorState,
  );
  const [elevationSmallQuantity, setElevationSmallQuantity] = useRecoilState(
    elevationSmallQuantityState,
  );
  const [elevationLargeQuantity, setElevationLargeQuantity] = useRecoilState(
    elevationLargeQuantityState,
  );
  const [elevationScaleFormula, setElevationScaleFormula] = useRecoilState(
    elevationScaleFormulaState,
  );
  const [elevationOffsetY, setElevationOffsetY] = useRecoilState(
    elevationOffsetYState,
  );
  const [iconScale, setIconScale] = useRecoilState(iconScaleState);
  const [iconSmallQuantity, setIconSmallQuantity] = useRecoilState(
    iconSmallQuantityState,
  );
  const [iconLargeQuantity, setIconLargeQuantity] = useRecoilState(
    iconLargeQuantityState,
  );
  const [iconScaleFormula, setIconScaleFormula] = useRecoilState(
    iconScaleFormulaState,
  );
  const [iconPadding, setIconPadding] = useRecoilState(iconPaddingState);
  const [icon, setIcon] = useRecoilState(iconState);
  const [iconStroke, setIconStroke] = useRecoilState(iconStrokeState);
  const [iconStrokeScale, setIconStrokeScale] =
    useRecoilState(iconStrokeScaleState);
  const [baseRadiusSize, setBaseRadiusSize] =
    useRecoilState(baseRadiusSizeState);
  const [radiusScaleFactor, setRadiusScaleFactor] = useRecoilState(
    radiusScaleFactorState,
  );
  const [radiusSmallQuantity, setRadiusSmallQuantity] = useRecoilState(
    radiusSmallQuantityState,
  );
  const [radiusLargeQuantity, setRadiusLargeQuantity] = useRecoilState(
    radiusLargeQuantityState,
  );
  const [radiusScaleFormula, setRadiusScaleFormula] = useRecoilState(
    radiusScaleFormulaState,
  );
  const [spacingScaleFactor, setSpacingScaleFactor] = useRecoilState(
    spacingScaleFactorState,
  );
  const [spacingSmallQuantity, setSpacingSmallQuantity] = useRecoilState(
    spacingSmallQuantityState,
  );
  const [spacingLargeQuantity, setSpacingLargeQuantity] = useRecoilState(
    spacingLargeQuantityState,
  );
  const [spacingFormula, setSpacingFormula] =
    useRecoilState(spacingFormulaState);
  const [textIconGapIndex, setTextIconGapIndex] = useRecoilState(
    textIconGapIndexState,
  );
  const [textIconIconSizeIndex, setTextIconIconSizeIndex] = useRecoilState(
    textIconIconSizeIndexState,
  );
  const [textIconGapScaleFormula, setTextIconGapScaleFormula] = useRecoilState(
    textIconGapScaleFormulaState,
  );
  const [typeScale, setTypeScale] = useRecoilState(typeScaleState);
  const [typeSmallQuantity, setTypeSmallQuantity] = useRecoilState(
    typeSmallQuantityState,
  );
  const [typeLargeQuantity, setTypeLargeQuantity] = useRecoilState(
    typeLargeQuantityState,
  );
  const [typeScaleFormula, setTypeScaleFormula] = useRecoilState(
    typeScaleFormulaState,
  );
  const [typeFontFamily, setTypeFontFamily] =
    useRecoilState(typeFontFamilyState);
  const [typeFontWeight, setTypeFontWeight] =
    useRecoilState(typeFontWeightState);
};

export default createTokens;
