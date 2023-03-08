import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../lib/http_services';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const navigate = useNavigate();
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
      console.log(response);
      toast.success('Successfully signed in.');
      Cookies.set('token', response?.data?.data?.attributes.token);
      Cookies.set('user_type', response?.data?.data?.attributes.user_type);
      Cookies.set("logged_in", true);
      navigate('/', { replace: true });
    } else {
      console.log(response);
      toast.error(response?.data?.message);
    }
  }

  return (
    <div className='h-3/4 flex flex-col justify-center'>
      <h1 className='my-2 text-lg text-center'>Admin/Dealer Login</h1>
      <div className='mx-auto py-4 flex justify-center border-2 border-sky-500 w-1/3'>
        <form onSubmit={handleSubmit(submitForm)}>
          {/* Email */}
          <div className='mb-4'>
            <div className='mb-2'>
              <label>Email:<span className='text-red-500'>*</span></label>
            </div>
            <input {...register("email", { required: 'This is required' })}
            type="email"
            placeholder='Your email...'
            className="p-2 border-2 rounded hover:border-2 hover:border-sky-500 focus:outline-sky-500"/>
            <p className='text-red-500'>
              {errors?.password?.message}
            </p>
          </div>
          
          {/* Password */}
          <div className='mb-4'>
          <div className='mb-2'>
              <label>Password:<span className='text-red-500'>*</span></label>
            </div>
            <input {...register("password", { required: 'This is required.' })}
            type="password"
            placeholder='Your password...'
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

export default Login;
