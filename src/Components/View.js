import React from "react";
import Colors from "./Colors";

const View = ({ style, children, reference, ...props }) => {
  let tempStyle = { ...style };

  const paddingLeft = style?.paddingHorizontal || 0;
  const paddingRight = style?.paddingHorizontal || 0;
  const marginLeft = style?.marginHorizontal || 0;
  const marginRight = style?.marginHorizontal || 0;

  const paddingTop = style?.paddingVertical || 0;
  const paddingBottom = style?.paddingVertical || 0;
  const marginTop = style?.marginVertical || 0;
  const marginBottom = style?.marginVertical || 0;

  const tempColor =
    Colors[style?.bgColor || style?.backgroundColor]?.["light"] ||
    style?.bgColor ||
    style?.backgroundColor ||
    "transparent";

  const fontColor = Colors[style?.color]?.["light"] || "black";

  const tempBorderColor =
    Colors[style?.borderColor]?.["light"] || "transparent";

  delete tempStyle.backgroundColor;
  delete tempStyle.color;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingLeft,
        paddingRight,
        marginLeft,
        marginRight,
        paddingTop,
        paddingBottom,
        marginTop,
        marginBottom,
        backgroundColor: tempColor,
        color: fontColor,
        borderColor: tempBorderColor,
        ...tempStyle,
      }}
      ref={reference}
      {...props}
    >
      {children}
    </div>
  );
};

export default View;

// Things to do here

// By giving the thme in View it automatically take the colors which we need according to drak and lightmode
