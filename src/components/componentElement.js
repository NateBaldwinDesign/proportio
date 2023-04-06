import React from "react";
import createSvgIcon from "../utilities/createSvgIcon";
import "../styles/component.css";

const ComponentElement = (props) => {
  const componentSize = props.componentSize;
  const paddingX = props.paddingX;
  const paddingY = props.paddingY;
  const typeSize = props.typeSize;
  const iconSize = props.iconSize;
  const gapSize = props.gapSize;
  const spec = props.spec;
  const componentLineHeight = props.componentLineHeight;

  const computedHeight = paddingY * 2 + Number(componentLineHeight) * typeSize;

  const specAnnotations = (
    <>
      <div className="specHeight specs">
        {" "}
        {`Height: ${Math.round(
          computedHeight
        )} \n (Min: ${componentSize})`}{" "}
      </div>
      <div className="specType specs"> {`Font: ${typeSize}`} </div>
      <div className="specIcon specs"> {`Icon: ${iconSize}`} </div>
      <div className="specPaddingX specs"> {`Pad-X: ${paddingX}`} </div>
      <div className="specPaddingY specs"> {`Pad-Y: ${paddingY}`} </div>
      <div className="specGap specs"> {`Gap: ${gapSize}`} </div>
    </>
  );
  const showSpecs = spec ? specAnnotations : "";

  return (
    <div className={spec ? "componentSpecWrapper" : "componentWrapper"}>
      <div className={spec ? "componentSpecItemWrapper" : ""}>
        <div
          style={{
            minWidth: `${componentSize}px`,
            fontSize: `${typeSize}px`,
            lineHeight: `${componentLineHeight}`,
          }}
          className="component"
        >
          <div
            className={spec ? "paddingUnit padTop" : "padTop"}
            style={{
              height: `${paddingY}px`,
              width: `${paddingY / 2}px`,
            }}
          ></div>
          <div
            className={spec ? "paddingUnit padBottom" : "padBottom"}
            style={{
              height: `${paddingY}px`,
              width: `${paddingY / 2}px`,
            }}
          ></div>
          <div
            className={spec ? "paddingUnit padLeft" : "padLeft"}
            style={{
              height: `${paddingX / 2}px`,
              width: `${paddingX}px`,
            }}
          ></div>
          <div
            className={spec ? "paddingUnit padRight" : "padRight"}
            style={{
              height: `${paddingX / 2}px`,
              width: `${paddingX}px`,
            }}
          ></div>
          <div
            className={spec ? "paddingUnit textIconGap" : "textIconGap"}
            style={{
              width: `${gapSize}px`,
              height: `${gapSize / 2}px`,
            }}
          ></div>
          <div className={spec ? "componentIconSpec" : "componentIcon"}>
            {createSvgIcon(iconSize, iconSize)}
          </div>
          <div className={spec ? "componentTextSpec" : "componentText"}>
            Component text
          </div>
        </div>
      </div>
      {showSpecs}
    </div>
  );
};

export default ComponentElement;
