import React from "react";
import Icons from "../atoms/icons/icons";
import { TextNormal } from "../atoms/texts";

const Loading = ({ text, color }) => {
  return (
    <div className="flex">
      <div className="animate-spin mr-2">
        <Icons name="refresh" color={color} />
      </div>
      <TextNormal color={color}>{text}</TextNormal>
    </div>
  );
};

export default Loading;
