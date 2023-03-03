import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../lib/http_services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 

const mileageOptions = [
    {
        id: 1,
        value: '60-70',
        label: '60-70',
    },
    {
        id: 2,
        value: '70-80',
        label: '70-80',
    },
    {
        id: 3,
        value: '80-90',
        label: '80-90',
    },
]

export default function BikeCreate() {
    const navigate = useNavigate();
    const { register,
        handleSubmit,
        formState: {errors} } = useForm({
        defaultValues: {
          make: '',
          model: '',
          year: '',
          mileage: ''
        },
      });

const submitForm = async (data) => {
  const params = {
    bike: {
        make: data.make,
        model: data.model,
        year: data.year,
        mileage: data.mileage,
    }
  }
  const response = await postData('bikes', params);
  if (response.status === 201){
    console.log('success');
    toast.success('Successfully bike created');
    navigate('/', { replace: true});
  }
  else if (response.status === 401){
    navigate('/sign-in', { replace: true});
  }
  else {
    console.log(response);
    toast.error(response?.data?.message);
  }
}

return (
  <div className='h-screen flex flex-col justify-center'>
    <h1 className='my-2 text-lg text-center'>Create Bike</h1>
    <div className='mx-auto py-4 flex justify-center border-2 border-sky-500 w-1/3'>
      <form onSubmit={handleSubmit(submitForm)}>
        {/* Make */}
        <div className='mb-4'>
          <div className='mb-2'>
            <label>Make:<span className='text-red-500'>*</span></label>
          </div>
          <input {...register("make", { required: 'Make is required' })}
          type="text"
          placeholder='eg. Honda'
          className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
          <p className='text-red-500'>
            {errors?.make?.message}
          </p>
        </div>

        {/* Model */}
        <div className='mb-4'>
          <div className='mb-2'>
            <label>Model:<span className='text-red-500'>*</span></label>
          </div>
          <input {...register("model", { required: 'Model is required' })}
          type="text"
          placeholder='eg. XL'
          className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
          <p className='text-red-500'>
            {errors?.model?.message}
          </p>
        </div>
        
        {/* Year */}
        <div className='mb-4'>
        <div className='mb-2'>
            <label>Year:<span className='text-red-500'>*</span></label>
          </div>
          <input {...register("year", { required: 'Year is required' })}
          type="text"
          placeholder='eg. 2015'
          className='p-2 border-2 rounded hover:border-2 hover:border-sky-500 
           focus:outline-sky-500'/>
          <p className='text-red-500'>
            {errors?.year?.message}
          </p>
        </div>

        {/* Mileage */}
        <div className='mb-4'>
            <div className='mb-2'>
                <label>Mileage:<span className='text-red-500'>*</span></label>
            </div>

           <select {...register("mileage", { required: 'Mileage is required' })}
           className='p-2 w-full border-2 rounded hover:border-2 hover:border-sky-500 
           focus:outline-sky-500'>
            <option value="" selected disabled>
                Select Mileage Option
            </option>
            {mileageOptions.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
           </select>

          <p className='text-red-500'>
            {errors?.mileage?.message}
          </p>
        </div>

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
}
