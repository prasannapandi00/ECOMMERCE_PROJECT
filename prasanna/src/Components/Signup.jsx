import React from 'react';
import images from '../assets/sign.jpeg';
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='grid grid-cols-8 mt-10' >
      <div className='col-span-5'>
         <img src={images} className='h-[600px] w-11/12'/>
        </div>
      <div className='p-0 col-span-3 py-20 w-[390px]'>
         <h3 className='text-5xl'>Create an account</h3>
         <h6 className='mt-5 text-sm'>Enter Your Details Below</h6>
         <form className='gap-y-10 mt-6 flex flex-col'>
            <input type='text' id='Name' placeholder='Name' className='border-b outline-none'/>
            <input type='text' placeholder='Email or Phone Number' className='border-b outline-none'/>
            <input type='text' placeholder='Password' className='border-b outline-none'/>
            <button className='py-2 rounded-md w-auto bg-red-500 text-zinc-100' >Create Account</button>
            <button className='btn flex w-auto justify-center py-1 border-[1px] border-gray-400 ' ><FcGoogle className='m-1 text-2xl'/><span className='m-1 '> SignUp with Google</span> </button>
         </form>
            <h6 className='text-center mt-3 text-sm'>Already have an account<span className='underline ms-3'> <Link to="/Login">Login</Link></span></h6>
      </div>
    </div>
  );

};

export default Signup;