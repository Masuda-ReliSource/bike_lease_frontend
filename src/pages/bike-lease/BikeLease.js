import { useState, useEffect } from "react";
import { postData, getAllData } from "../../lib/http_services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FieldLabel, FormInput, FormSelect } from "../../components/controls";
import ApplicationForm from "../../components/bike-lease/ApplicationForm";

const formDefaultValues = {
  down_payment: "",
  bike_id: "",
  leasee_name: "",
  leasee_address: "",
  leasee_phone: "",
  leasee_monthly_income: "",
  leasee_dob: "",
  closee_name: "",
  closee_address: "",
  closee_phone: "",
  closee_monthly_income: "",
  closee_dob: "",
};

function BikeLease() {
  const [data, setData] = useState(formDefaultValues);
  const [bikes, setBikes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBikes();
  }, []);

  const getAllBikes = async () => {
    const response = await getAllData("bikes");
    if (response.status === 200) {
      setBikes(response.data);
    } else if (response.status === 401) {
      navigate("/sign-in", { replace: true });
    } else {
      console.log("Bike fetch error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(data);
  };

  const submitForm = async (data) => {
    const params = {
      bike_lease: {
        down_payment: data.down_payment,
        bike_id: data.bike_id,
        leese: {
          name: data.leasee_name,
          address: data.leasee_address,
          phone: data.leasee_phone,
          monthly_income: data.leasee_monthly_income,
          dob: data.leasee_dob,
        },
        closee: {
          name: data.closee_name,
          address: data.closee_address,
          phone: data.closee_phone,
          monthly_income: data.closee_monthly_income,
          dob: data.closee_dob,
        },
      },
    };

    const response = await postData("bike_leases", params);
    if (response.status === 201) {
      console.log("success");
      toast.success("Successfully bike lease application initiated");
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
    <div className="flex flex-col justify-center">
      <h1 className="my-2 text-lg text-center">Apply for Bike Lease</h1>
      <div className="mx-auto mb-4 p-4 flex justify-center border-2 border-sky-500">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            {/* downpayment */}
            <div className="mb-4">
              <FieldLabel labelName={"Down Payment"} required={true} />
              <FormInput
                name={"down_payment"}
                type={"text"}
                required={true}
                placeholder={"eg. 1000"}
                onChangeValue={handleChange}
              />
            </div>

            {/* Bike */}
            <div className="mb-4 w-full">
              <FieldLabel labelName={"Bike"} required={true} />
              <FormSelect
                name={"bike_id"}
                required={true}
                dataOptions={bikes}
                initialOption={"Please select a bike"}
                onChangeValue={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <div>
              <hr className="h-px border-1.5 border-dashed" />

              {/* ----------Leasee Information-------------- */}
              <div className="my-4 font-medium tracking-tight">
                Fill Up Leasee Information
              </div>

              <ApplicationForm
                type={"leasee"}
                required={true}
                handleChange={handleChange}
              />
            </div>

            <div>
              <hr className="h-px border-1.5 border-dashed" />
              <div className="my-4 font-medium tracking-tight">
                Fill Up Closee Information
              </div>

              {/* ----------Closee Information-------------- */}
              <ApplicationForm
                type={"closee"}
                required={false}
                handleChange={handleChange}
              />
              {/* ----------Closee Information-------------- */}
            </div>
          </div>

          <div className="mt-2 flex justify-center">
            <input
              type="submit"
              value="Save"
              className="rounded border-2 p-2 w-1/2
             hover:bg-sky-500 hover:border-sky-500 hover:cursor-pointer hover:text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BikeLease;
