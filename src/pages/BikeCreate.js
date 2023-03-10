import { useState } from "react";
import { postData } from "../lib/http_services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FieldLabel, FormInput, FormSelect } from "../components/controls";

const mileageOptions = [
  {
    id: 1,
    value: "60-70",
    label: "60-70",
  },
  {
    id: 2,
    value: "70-80",
    label: "70-80",
  },
  {
    id: 3,
    value: "80-90",
    label: "80-90",
  },
];

const formDefaultValues = {
  make: "",
  model: "",
  year: "",
  mileage: "",
};

export default function BikeCreate() {
  const [data, setData] = useState(formDefaultValues);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(data);
  };

  const submitForm = async (data) => {
    const params = {
      bike: {
        make: data.make,
        model: data.model,
        year: data.year,
        mileage: data.mileage,
      },
    };
    const response = await postData("bikes", params);
    if (response.status === 201) {
      console.log("success");
      toast.success("Successfully bike created");
      navigate("/", { replace: true });
    } else if (response.status === 401) {
      navigate("/sign-in", { replace: true });
    } else {
      console.log(response);
      toast.error(response?.data?.message);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className="my-2 text-lg text-center">Create Bike</h1>
      <div className="mx-auto py-4 flex justify-center border-2 border-sky-500 w-1/3">
        <form onSubmit={handleSubmit}>
          {/* Make */}
          <div className="mb-4">
            <FieldLabel labelName={"Make"} required={true} />
            <FormInput
              name={"make"}
              type={"text"}
              required={true}
              placeholder={"eg. Honda"}
              onChangeValue={handleChange}
            />
          </div>

          {/* Model */}
          <div className="mb-4">
            <FieldLabel labelName={"Model"} required={true} />
            <FormInput
              name={"model"}
              type={"text"}
              required={true}
              placeholder={"eg. XL"}
              onChangeValue={handleChange}
            />
          </div>

          {/* Year */}
          <div className="mb-4">
            <FieldLabel labelName={"Year"} required={true} />
            <FormInput
              name={"year"}
              type={"text"}
              required={true}
              placeholder={"eg. 2019"}
              onChangeValue={handleChange}
            />
          </div>

          {/* Mileage */}
          <div className="mb-4">
            <FieldLabel labelName={"Mileage"} required={true} />
            <FormSelect
              name={"mileage"}
              required={true}
              dataOptions={mileageOptions}
              initialOption={"Select Mileage Option"}
              onChangeValue={handleChange}
            />
          </div>

          <div className="mt-2 flex justify-center">
            <input
              type="submit"
              value="Save"
              className="rounded border-2 p-2 w-full
             hover:bg-sky-500 hover:border-sky-500 hover:cursor-pointer hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
