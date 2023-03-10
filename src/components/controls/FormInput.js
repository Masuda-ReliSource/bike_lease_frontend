import React from "react";

export const FormInput = ({
  name,
  type,
  required,
  placeholder,
  onChangeValue,
}) => {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChangeValue}
        className="p-2 border-2 rounded hover:border-2
         hover:border-sky-500 focus:outline-sky-500"
      />
    </>
  );
};
