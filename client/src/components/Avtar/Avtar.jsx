import React from "react";

const Avtar = ({
  children,
  backgroundColor,
  px,
  py,
  color,
  borderRadius,
  fontSize,
  cursor,
}) => {
  const style = {
    backgroundColor: backgroundColor,
    padding: `${px} ${py}`,
    color: color || "black",
    borderRadius: borderRadius,
    fontSize: fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration:"none"
  };
  return <div style={style}>{children}</div>;
};

export default Avtar;
