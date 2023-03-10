import { useState } from "react";
import { postData } from "../lib/http_services";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FieldLabel } from "../components/controls/FieldLabel";
import { FormInput } from "../components/controls/FormInput";

const loginDefaultValues = {
  email: "",
  password: "",
};

function Login() {
  const [data, setData] = useState(loginDefaultValues);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(data);
  };

  const onChangeValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (data) => {
    const params = {
      email: data.email,
      password: data.password,
    };
    const response = await postData("sign_in", params);
    if (response.status === 200) {
      console.log(response);
      toast.success("Successfully signed in.");
      Cookies.set("token", response?.data?.data?.attributes.token);
      Cookies.set("user_type", response?.data?.data?.attributes.user_type);
      Cookies.set("logged_in", true);
      navigate("/", { replace: true });
    } else {
      console.log(response);
      toast.error(response?.data?.message);
    }
  };

  return (
    <div className="h-3/4 flex flex-col justify-center">
      <h1 className="my-2 text-lg text-center">Admin/Dealer Login</h1>
      <div className="mx-auto py-4 flex justify-center border-2 border-sky-500 w-1/3">
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <FieldLabel labelName={"Email"} required={true} />
            <FormInput
              name={"email"}
              type={"email"}
              required={true}
              placeholder={"Your email..."}
              onChangeValue={onChangeValue}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <FieldLabel labelName={"Password"} required={true} />
            <FormInput
              name={"password"}
              type={"password"}
              required={true}
              placeholder={"Your password..."}
              onChangeValue={onChangeValue}
            />
          </div>
          <div className="mt-4 flex justify-center">
            <input
              type="submit"
              value="Sign In"
              className="rounded border-2 p-2 w-full
               hover:bg-sky-500 hover:border-sky-500 hover:cursor-pointer hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
