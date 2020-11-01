import React from "react";
import { getTextColor } from "../../../styles/colors";
import { sizes, weights } from "../../../styles/fonts";

const TextNormal = ({ color = "black", size = "base", weight, children }) => {
  return (
    <span
      className={`${getTextColor(color)} ${sizes[size]} ${
        weight ? weights.bold : ""
      }`}
    >
      {children}
    </span>
  );
};

export default TextNormal;
