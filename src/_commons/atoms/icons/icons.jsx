import React from "react";
import { getTextColor } from "../../../styles/colors";
import { sizes } from "../../../styles/fonts";
import { iconsGuide } from "../../../styles/icons";

const Icons = ({ name, color = "black", size = "medium" }) => {
  return React.createElement(iconsGuide[name], {
    className: `${getTextColor(color)} ${sizes[size]}`,
  });
};

export default Icons;
