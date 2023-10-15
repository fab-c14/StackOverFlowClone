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
    backgroundColor: "blue",
    padding: `${px} ${py}`,
    color: color || "black",
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none",
  };
  return <div style={style}>{children}</div>;
};

export default Avtar;
