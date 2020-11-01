import React, { useState } from "react";
import { TextNormal } from "../texts";

const InputNormal = ({ onChange, label, ...props }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") onChange(event.target.value);
  };
  return (
    <>
      <TextNormal size="small">{label}</TextNormal>
      <input
        onKeyDown={(event) => handleKeyDown(event)}
        {...props}
        className={`block border-gray-400 border-b py-1 w-full`}
      />
    </>
  );
};

export default InputNormal;
