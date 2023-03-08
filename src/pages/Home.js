import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import humanizeString from 'humanize-string';

function Home() {
  const userType = Cookies.get('user_type') || "";

  return (
    <div className='h-screen flex flex-col justify-center'>
      <h1 className='my-2 text-lg text-center'>{humanizeString(userType)} Dashboard</h1>

      {
        userType === 'admin_user' ? 
          (
            <div className='mx-auto p-4 flex justify-center space-x-2 border-2 border-sky-500'>
              <div className='border-2 p-2 rounded hover:bg-sky-500 hover:border-sky-500 hover:text-white'>
                <Link to='/admin/create'>Admin Create</Link>
              </div>
              <div className='border-2 p-2 rounded hover:bg-sky-500 hover:border-sky-500 hover:text-white'>
                <Link to='/dealer/create'>Dealer Create</Link>
              </div>
              <div className='border-2 p-2 rounded hover:bg-sky-500 hover:border-sky-500 hover:text-white'>
                <Link to='/lease-application/list'>Bike Lease Applications</Link>
              </div>
            </div>
          )
        : (
          <div className='mx-auto p-4 flex justify-center space-x-2 border-2 border-sky-500'>
              {/* <div className='border-2 p-2 rounded hover:bg-sky-500 hover:border-sky-500 hover:text-white'>
                <Link to='/dealer/edit'>Update Profile</Link>
              </div> */}
              <div className='border-2 p-2 rounded hover:bg-sky-500 hover:border-sky-500 hover:text-white'>
                <Link to='/bike/create'>Bike Create</Link>
              </div>
              <div className='border-2 p-2 rounded hover:bg-sky-500 hover:border-sky-500 hover:text-white'>
                <Link to='/lease-application/create'>Bile Lease Application Create</Link>
              </div>
            </div>
        )
      }
    </div>
  )
}

export default Home;
