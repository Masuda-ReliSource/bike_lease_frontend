import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../lib/http_services';
import { toast } from 'react-toastify';

function AdminCreate() {
    const { register,
        handleSubmit,
        formState: {errors} } = useForm({
        defaultValues: {
          name: '',
          email: '',
          password: '',
          phone: ''
        },
      });

const submitForm = async (data) => {
  const params = {
    admin: {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
    }
  }
  const response = await postData('admin_users', params);
  if (response.status === 201){
    console.log('success');
    toast.success('Successfully created');
  } else {
    console.log(response);
    toast.error(response?.data?.message);
  }
}

return (
  <div className='h-screen flex flex-col justify-center'>
    <h1 className='my-2 text-lg text-center'>Create Admin</h1>
    <div className='mx-auto py-4 flex justify-center border-2 border-sky-500 w-1/3'>
      <form onSubmit={handleSubmit(submitForm)}>
        {/* Name */}
        <div className='mb-4'>
          <div className='mb-2'>
            <label>Name:<span className='text-red-500'>*</span></label>
          </div>
          <input {...register("name", { required: 'Name is required' })}
          type="text"
          placeholder='eg. John Doe'
          className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
          <p className='text-red-500'>
            {errors?.name?.message}
          </p>
        </div>

        {/* Email */}
        <div className='mb-4'>
          <div className='mb-2'>
            <label>Email:<span className='text-red-500'>*</span></label>
          </div>
          <input {...register("email", { required: 'Email is required' })}
          type="email"
          placeholder='eg. john@example.com'
          className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
          <p className='text-red-500'>
            {errors?.email?.message}
          </p>
        </div>
        
        {/* Password */}
        <div className='mb-4'>
        <div className='mb-2'>
            <label>Password:<span className='text-red-500'>*</span></label>
          </div>
          <input {...register("password", { required: 'Password is required' })}
          type="password"
          placeholder='Admin password'
          className='p-2 border-2 rounded hover:border-2 hover:border-sky-500 
           focus:outline-sky-500'/>
          <p className='text-red-500'>
            {errors?.password?.message}
          </p>
        </div>

        {/* Phone */}
        <div className='mb-4'>
        <div className='mb-2'>
            <label>Phone:<span className='text-red-500'>*</span></label>
          </div>
          <input {...register("phone", { required: 'Phone is required' })}
          type="text"
          placeholder='01928273'
          className='p-2 border-2 rounded hover:border-2 hover:border-sky-500 
           focus:outline-sky-500'/>
          <p className='text-red-500'>
            {errors?.password?.message}
          </p>
        </div>

        <div className='mt-2 flex justify-center'>
          <input
            type='submit'
            value='Sign In'
            className="rounded border-2 p-2 w-full
             hover:bg-sky-500 hover:border-sky-500 hover:cursor-pointer hover:text-white"/>
        </div>
      </form>
    </div>
  </div>
 )
}

export default AdminCreate;

