import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../lib/http_services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 

function BikeLease() {
    const navigate = useNavigate();
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
        down_payment: data.downpayment,
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
  const response = await postData('bikes', params);
  if (response.status === 201){
    console.log('success');
    toast.success('Successfully bike lease application created');
    navigate('/', { replace: true});
  } else {
    console.log(response);
    toast.error(response?.data?.message);
  }
}

return (
  <div className='flex flex-col justify-center'>
    <h1 className='my-2 text-lg text-center'>Apply for Bike Lease</h1>
    <div className='mx-auto py-4 flex justify-center border-2 border-sky-500 w-1/3'>
      <form onSubmit={handleSubmit(submitForm)}>
        {/* downpayment */}
        <div className='mb-4'>
          <div className='mb-2'>
            <label>Down Payment:<span className='text-red-500'>*</span></label>
          </div>
          <input {...register("down_payment", { required: 'Make is required' })}
          type="text"
          placeholder='eg. 1000'
          className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
          <p className='text-red-500'>
            {errors?.down_payment?.message}
          </p>
        </div>

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
          <input {...register("leasee_name", { required: 'Model is required' })}
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

        <hr className='h-px border-1.5 border-dashed'/>
        <div className='my-4 font-medium tracking-tight'>
            Fill Up Closee Information
        </div>

        {/* ----------Closee Information-------------- */}
        {/* Lease Name */}
        <div className='mb-4'>
          <div className='mb-2'>
            <label>Name:<span className='text-red-500'>*</span></label>
          </div>
          <input {...register("leasee_name", { required: 'Model is required' })}
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
        {/* ----------Closee Information-------------- */}

        <div className='mt-2 flex justify-center'>
          <input
            type='submit'
            value='Save'
            className="rounded border-2 p-2 w-full
             hover:bg-sky-500 hover:border-sky-500 hover:cursor-pointer hover:text-white"/>
        </div>
      </form>
    </div>
  </div>
 )
};

export default BikeLease;

