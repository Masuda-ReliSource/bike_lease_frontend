import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../lib/http_services';
import { toast } from 'react-toastify';

function Login() {
  const { register,
          handleSubmit,
          formState: {errors} } = useForm({
          defaultValues: {
            email: '',
            password: '',
          },
        });

  const submitForm = async (data) => {
    const params = {
      email: data.email,
      password: data.password,
    }
    const response = await postData('sign_in', params);
    if (response.status === 200){
      console.log('success');
      toast.success('Successfully signed in.');
    } else {
      console.log(response);
      toast.error(response?.data?.message);
    }
  }

  return (
    <div className='h-96 flex flex-col justify-center'>
      <h1 className='text-lg text-center'>Login</h1>
      <div className='mx-auto py-4 flex items-center justify-center border-2 border-blue-300 w-1/3'>
        <form onSubmit={handleSubmit(submitForm)}>
          {/* Email */}
          <div className='mb-4'>
            <div className='mb-2'>
              <label>Email:</label>
            </div>
            <input {...register("email", { required: 'This is required' })}
            type="email"
            placeholder='Your email...'
            className="p-2 border-2 rounded"/>
            <p>
              {errors?.password?.message}
            </p>
          </div>
          
          {/* Password */}
          <div className='mb-4'>
          <div className='mb-2'>
              <label>Password:</label>
            </div>
            <input {...register("password", { required: 'This is required.' })}
            type="password"
            placeholder='Your password...'
            className='p-2 border-2 rounded'/>
            <p>
              {errors?.password?.message}
            </p>
          </div>
          <div className='mt-2 flex justify-center'>
            <input
              type='submit'
              value='Sign In'
              className="rounded border-2 p-2 w-full hover:bg-blue-400 hover:border-blue-400 hover:cursor-pointer"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
