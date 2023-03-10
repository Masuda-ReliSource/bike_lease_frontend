import { FieldLabel, FormInput, FormSelect } from "../controls";

const ApplicationForm = ({ type, required, handleChange }) => {
  return (
    <>
      {/* Name */}
      <div className="mb-4">
        <FieldLabel labelName={"Name"} required={required} />
        <FormInput
          name={`${type}_name`}
          type={"text"}
          required={required}
          placeholder={"eg. John Doe"}
          onChangeValue={handleChange}
        />
      </div>

      {/* Address */}
      <div className="mb-4">
        <FieldLabel labelName={"Address"} required={required} />
        <FormInput
          name={`${type}_address`}
          type={"text"}
          required={required}
          placeholder={"eg. Dhaka"}
          onChangeValue={handleChange}
        />
      </div>

      {/* phone */}
      <div className="mb-4">
        <FieldLabel labelName={"Phone"} required={required} />
        <FormInput
          name={`${type}_phone`}
          type={"text"}
          required={required}
          placeholder={"eg. 95655425555"}
          onChangeValue={handleChange}
        />
      </div>

      {/* monthly income */}
      <div className="mb-4">
        <FieldLabel labelName={"Monthly Income"} required={required} />
        <FormInput
          name={`${type}_monthly_income`}
          type={"text"}
          required={required}
          placeholder={"eg. 5265555"}
          onChangeValue={handleChange}
        />
      </div>

      {/* dob */}
      <div className="mb-4">
        <FieldLabel labelName={"Date of Birth"} />
        <FormInput
          name={`${type}_dob`}
          type={"text"}
          placeholder={"eg. YYYY-MM-DD"}
          onChangeValue={handleChange}
        />
      </div>
    </>
  );
};

export default ApplicationForm;
