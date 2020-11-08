import React from "react";
import { TextNormal } from "../atoms/texts";

const Card = ({ src, title }) => {
  return (
    <div className="overflow-hidden rounded-md shadow pb-2">
      <img src={src} className="mb-2 mx-auto" alt={src} />
      <div className="text-center">
        <TextNormal size="small">{title}</TextNormal>
      </div>
    </div>
  );
};

export default Card;
