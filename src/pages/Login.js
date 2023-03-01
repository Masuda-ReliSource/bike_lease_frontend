import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../lib/http_services';

function Login() {
  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    const params = {
      email: data.email,
      password: data.password,
    }
    const response = await postData('sign_in', params);
    console.log(response);
  }

  return (
    <>
    <h1 className='text-lg text-center'>Login</h1>
    <form onSubmit={handleSubmit(submitForm)}>
      <div className='mb-4'>
        <label>Email:</label>
        <input {...register("email")}
        type="email"
        placeholder='Your email...'
        className="mx-2 p-2 border-2 rounded"/>
      </div>
      <div className='mb-4'>
        <label>Password:</label>
        <input {...register("password")}
         type="password"
         placeholder='Your password...'
         className='mx-2 p-2 border-2 rounded'/>
      </div>
      <div>
        <input className="rounded border-2 p-2"
          type='submit'
          value='Sign In'/>
      </div>
    </form>
    </>
  )
}

export default Login;
