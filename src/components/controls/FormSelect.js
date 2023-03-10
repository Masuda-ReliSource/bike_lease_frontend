import React from "react";

export const FormSelect = ({
  name,
  required,
  dataOptions,
  initialOption,
  onChangeValue,
}) => {
  return (
    <select
      name={name}
      required={required}
      onChange={onChangeValue}
      className="p-2 w-full border-2 rounded hover:border-2 hover:border-sky-500 
           focus:outline-sky-500"
    >
      <option value="" selected disabled>
        {initialOption}
      </option>
      {dataOptions.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
