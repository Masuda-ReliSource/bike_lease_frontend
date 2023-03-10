import { useState } from "react";
import { postData } from "../lib/http_services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FieldLabel, FormInput } from "../components/controls";

const formDefaultValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

function DealerCreate() {
  const [data, setData] = useState(formDefaultValues);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(data);
  };

  const submitForm = async (data) => {
    const params = {
      dealer: {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
      },
    };
    const response = await postData("dealers", params);
    if (response.status === 201) {
      console.log("success");
      toast.success("Successfully created");
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
    <div className="h-3/4 flex flex-col justify-center">
      <h1 className="my-2 text-lg text-center">Create Dealer</h1>
      <div className="mx-auto py-4 flex justify-center border-2 border-sky-500 w-1/3">
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <FieldLabel labelName={"Name"} required={true} />
            <FormInput
              name={"name"}
              type={"text"}
              required={true}
              placeholder={"eg. John Doe"}
              onChangeValue={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <FieldLabel labelName={"Email"} required={true} />
            <FormInput
              name={"email"}
              type={"email"}
              required={true}
              placeholder={"eg. john@example.com"}
              onChangeValue={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <FieldLabel labelName={"Password"} required={true} />
            <FormInput
              name={"password"}
              type={"password"}
              required={true}
              placeholder={"Dealer password"}
              onChangeValue={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <FieldLabel labelName={"Phone"} required={true} />
            <FormInput
              name={"phone"}
              type={"text"}
              required={true}
              placeholder={"01928273..."}
              onChangeValue={handleChange}
            />
          </div>

          <div className="mt-2 flex justify-center">
            <input
              type="submit"
              value="Save"
              className="rounded border-2 p-2 w-full
             hover:bg-sky-500 hover:border-sky-500
              hover:cursor-pointer hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default DealerCreate;
