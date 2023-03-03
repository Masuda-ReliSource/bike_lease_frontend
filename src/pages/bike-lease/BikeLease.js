import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { postData, getAllData } from '../../lib/http_services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 

function BikeLease() {
    const [bikes, setBikes] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
      getAllBikes();
    }, []);

    const getAllBikes = async () => {
      const response = await getAllData('bikes');
      if (response.status === 200){
        setBikes(response.data);
      }
      else {
        console.log('Bike fetch error');
      }
    };
    const { register,
        handleSubmit,
        formState: {errors} } = useForm({
        defaultValues: {
          down_payment: '',
          bike_id: '',
          leasee_name: '',
          leasee_address: '',
          leasee_phone: '',
          leasee_monthly_income: '',
          leasee_dob: '',
          closee_name: '',
          closee_address: '',
          closee_phone: '',
          closee_monthly_income: '',
          closee_dob: '',
        },
      });

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
        }
    }
  }

  const response = await postData('bike_leases', params);
  if (response.status === 201){
    console.log('success');
    toast.success('Successfully bike lease application initiated');
    navigate('/', { replace: true});
  } else {
    console.log(response);
    toast.error(response?.data?.message);
  }
}

return (
  <div className='flex flex-col justify-center'>
    <h1 className='my-2 text-lg text-center'>Apply for Bike Lease</h1>
    <div className='mx-auto mb-4 p-4 flex justify-center border-2 border-sky-500'>
      <form onSubmit={handleSubmit(submitForm)}>
       <div className='flex space-x-4'>
         {/* downpayment */}
         <div className='mb-4'>
          <div>
            <label>Down Payment:<span className='text-red-500'>*</span></label>
          </div>
          <input {...register("down_payment", { required: 'Downpayment is required' })}
          type="text"
          placeholder='eg. 1000'
          className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
          <p className='text-red-500'>
            {errors?.down_payment?.message}
          </p>
        </div>

        {/* Bike */}
        <div className='mb-4 w-full'>
            <div>
                <label>Bikes:<span className='text-red-500'>*</span></label>
            </div>

           <select {...register("bike_id", { required: 'Bike selection is required' })}
           className='p-2 w-full border-2 rounded hover:border-2 hover:border-sky-500 
           focus:outline-sky-500'>
            <option value="" disabled>
                Select bikes
            </option>
            { bikes && bikes.map((option) => (
              <option key={option.id} value={option.id}>
                {`${option.make} ${option.model} ${option.year}`}
              </option>
            ))}
           </select>
        </div>
       </div>

        <div className='flex justify-center space-x-4'>
          <div>
            <hr className='h-px border-1.5 border-dashed'/>

            {/* ----------Leasee Information-------------- */}
            <div className='my-4 font-medium tracking-tight'>
                Fill Up Leasee Information
            </div>

            {/* Lease Name */}
            <div className='mb-4'>
              <div className='mb-2'>
                <label>Name:<span className='text-red-500'>*</span></label>
              </div>
              <input {...register("leasee_name", { required: 'Name is required' })}
              type="text"
              placeholder='eg. John Doe'
              className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
              <p className='text-red-500'>
                {errors?.leasee_name?.message}
              </p>
            </div>

            {/* Lease Address */}
            <div className='mb-4'>
              <div className='mb-2'>
                <label>Address:<span className='text-red-500'>*</span></label>
              </div>
              <input {...register("leasee_address", { required: 'Address is required' })}
              type="text"
              placeholder='eg. Dhaka'
              className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
              <p className='text-red-500'>
                {errors?.leasee_address?.message}
              </p>
            </div>

            {/* Lease phone */}
            <div className='mb-4'>
              <div className='mb-2'>
                <label>Phone:<span className='text-red-500'>*</span></label>
              </div>
              <input {...register("leasee_phone", { required: 'Phone is required' })}
              type="text"
              placeholder='eg. 95655425555'
              className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
              <p className='text-red-500'>
                {errors?.leasee_phone?.message}
              </p>
            </div>

            {/* Lease monthly income */}
            <div className='mb-4'>
              <div className='mb-2'>
                <label>Monthly Income:<span className='text-red-500'>*</span></label>
              </div>
              <input {...register("leasee_monthly_income", { required: 'Monthly income is required' })}
              type="text"
              placeholder='eg. 5265555'
              className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
              <p className='text-red-500'>
                {errors?.leasee_monthly_income?.message}
              </p>
            </div>

            {/* Lease dob */}
            <div className='mb-4'>
              <div className='mb-2'>
                <label>Date of Birth:</label>
              </div>
              <input {...register("leasee_dob")}
              type="text"
              placeholder='eg. YYYY-MM-DD'
              className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
              <p className='text-red-500'>
                {errors?.leasee_dob?.message}
              </p>
            </div>
            {/* ----------Leasee Information-------------- */}
          </div>

            <div>
            <hr className='h-px border-1.5 border-dashed'/>
            <div className='my-4 font-medium tracking-tight'>
                Fill Up Closee Information
            </div>

            {/* ----------Closee Information-------------- */}
            {/* Closee Name */}
            <div className='mb-4'>
              <div className='mb-2'>
                <label>Name:</label>
              </div>
              <input {...register("closee_name")}
              type="text"
              placeholder='eg. John Doe'
              className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
              <p className='text-red-500'>
                {errors?.closee_name?.message}
              </p>
            </div>

            {/* closee Address */}
            <div className='mb-4'>
              <div className='mb-2'>
                <label>Address:</label>
              </div>
              <input {...register("closee_address")}
              type="text"
              placeholder='eg. Dhaka'
              className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
              <p className='text-red-500'>
                {errors?.closee_address?.message}
              </p>
            </div>

            {/* closee phone */}
            <div className='mb-4'>
              <div className='mb-2'>
                <label>Phone:</label>
              </div>
              <input {...register("closee_phone")}
              type="text"
              placeholder='eg. 95655425555'
              className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
              <p className='text-red-500'>
                {errors?.closee_phone?.message}
              </p>
            </div>

            {/* closee monthly income */}
            <div className='mb-4'>
              <div className='mb-2'>
                <label>Monthly Income:</label>
              </div>
              <input {...register("closee_monthly_income")}
              type="text"
              placeholder='eg. 5265555'
              className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
              <p className='text-red-500'>
                {errors?.closee_monthly_income?.message}
              </p>
            </div>

            {/* closee dob */}
            <div className='mb-4'>
              <div className='mb-2'>
                <label>Date of Birth:</label>
              </div>
              <input {...register("closee_dob")}
              type="text"
              placeholder='eg. YYYY-MM-DD'
              className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
              <p className='text-red-500'>
                {errors?.closee_dob?.message}
              </p>
            </div>
            {/* ----------Closee Information-------------- */}
            </div>
        </div>

        <div className='mt-2 flex justify-center'>
          <input
            type='submit'
            value='Save'
            className="rounded border-2 p-2 w-1/2
             hover:bg-sky-500 hover:border-sky-500 hover:cursor-pointer hover:text-white"/>
        </div>
      </form>
    </div>
  </div>
 )
};

export default BikeLease;
