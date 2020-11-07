import React, { useState } from "react";
import { TextNormal } from "../texts";

const InputNormal = ({ label, onAddInput, ...props }) => {
  const handleKeyDown = ({ key, target }) => {
    const value = target.value;
    if (key === "Enter" && !!value.trim()) {
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
