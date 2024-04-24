import React from 'react'
import images from '../assets/sign.jpeg';
// import {FcGoogle} from 'react-icons/fc'

function Login() {
  return (
    <div className='grid grid-cols-8 mt-10' >
      <div className='col-span-5'>
         <img src={images} className='h-[600px] w-11/12'/>
      </div>
      <div className='p-0 col-span-3 py-20 w-[390px]'>
         <h3 className='text-5xl'>Login to Exclusive</h3>
         <h6 className='mt-5 text-sm'>Enter Your Details Below</h6>
      <form className='gap-y-14 mt-8 flex flex-col'>
            <input type='text' placeholder='Email or Phone Number' className='border-b outline-none'/>
            <input type='text' placeholder='Password' className='border-b outline-none'/>
      </form>
      <div className='flex justify-between mt-12'>
        <div>
            <p className='border rounded bg-red-700 text-white p-4 w-36 text-center'>Login</p>
        </div>
        <div>
            <h6 className='flex  align-center p-4 text-red-500'>Forgot Password?</h6>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login;