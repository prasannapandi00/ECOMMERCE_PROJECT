import React from 'react'
import { IoSend } from "react-icons/io5";
import img from "../assets/qr.jpeg"
import img1 from "../assets/a.png"

function Footer() {
  return (
    <div className='bg-black '>
      <div className=' grid grid-cols-5 grid-rows-1 w-10/12 mx-auto text-white py-9 mt-7'>
        <div className='space-y-3'>
            <p className='text-xl font-semibold'>Exclusive</p>
            <p className='text-lg'>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className='flex bg-black w-48 border-2 border-white'>
                <input placeholder='Enter your email' type='email' className='bg-black px-3 py-1 w-40 '></input>
                <IoSend className=' mt-2' />
            </div>
        </div>
        <div className='space-y-3 ml-8'>
            <p className='text-xl font-semibold'>Support</p>
            <p>111 Bijoy sarani,Dhaka,<br />DH 1515,Bangaladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
        <div className='space-y-3 ml-12'>
            <p className='text-xl font-semibold'>Account</p>
            <p>My Account</p>
            <p>Login/Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div className='space-y-3 ml-6'>
            <p className='text-xl font-semibold'>Quick Link</p>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div className='space-y-3'>
            <p className='text-xl font-semibold'>Download App</p>
            <p className='text-sm'>save $3 with App New User Only</p>
            <img src={img} alt="" />
            <img className='h-12 ml-5' src={img1} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Footer;
