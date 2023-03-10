import React from "react";

export const FieldLabel = ({ labelName, required }) => {
  return (
    <div className="mb-2">
      <label>
        {labelName}:{required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
};
