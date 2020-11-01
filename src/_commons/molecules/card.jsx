import React from "react";
import { TextNormal } from "../atoms/texts";

const Card = ({ src, title }) => {
  return (
    <div className="w-3/12 overflow-hidden rounded-md shadow pb-2">
      <img src={src} className="mb-2" />
      <div className="text-center">
        <TextNormal>{title}</TextNormal>
      </div>
    </div>
  );
};

export default Card;
