import React, { useState } from "react";
import { TextNormal } from "../texts";

const InputNormal = ({ label, onAddInput, ...props }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const value = event.target.value;
      onAddInput((_) => [value, ..._]);
    }
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
