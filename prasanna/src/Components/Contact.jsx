import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import img from "../assets/qr.jpeg"
import img1 from "../assets/a.png"

function Contact() {
    return (
        <div>
            <div className='w-10/12 mx-auto mt-14'>
                <p><span>Home /</span>Contact</p>
            </div>
            <div className=' flex  mt-14 w-10/12 mx-auto mb-20'>
                <div className='shadow-md p-5 w-80'>
                    <div className='border-b-2 border-black'>
                        <div className='flex '>
                            < IoCallOutline className='bg-red-500 w-7 h-6 rounded-full p-1 text-white' /> <p className='ml-2 font-semibold'>Call To Us</p>
                        </div>
                        <p className='mt-5 mb-5'>We are available 24/7,7 days a week. <br />Phone.:88016111122</p>
                    </div>
                    <div>
                        <div className='flex mt-7'>
                            <MdOutlineMailOutline className='bg-red-500 w-7 h-6 rounded-full p-1 text-white' /><p className='ml-2 font-semibold'>Write To Us</p>
                        </div>
                        <p className='mt-5'>Fill out our form and we will contact <br />you within 24 hours.</p>
                        <p className='mt-3'>Emails: customer@exclusive.com</p>
                        <p className='mt-3'>Emails: Support@exclusive.com</p>
                    </div>
                </div>
                <div className='grow shadow-md py-2 px-10'>
                    <div className='flex '>
                        <div>
                            <input type='text' placeholder='Your Name *' className='bg-gray-200 h-8 p-4 py-5 mt-2 w-48 '></input>
                        </div>
                        <div>
                            <input type='text' placeholder='Your Email *' className='bg-gray-200 h-8 p-4 py-5 mt-2 w-48 ml-5'></input>
                        </div>
                        <div>
                            <input type='text' placeholder='Your Phone *' className='bg-gray-200 h-8 p-4 py-5 mt-2 w-48 ml-5'></input>
                        </div>
                    </div>
                    <div className=' mt-7'>
                        <input type='text' placeholder='Your Message' className='bg-gray-200 w-[618px] h-48 p-4 pb-32'></input>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button className=' bg-red-600 px-4 py-1 text-white rounded '>Send Massage</button>
                    </div>
                </div>
            </div>

            {/* <div className='bg-black '>
                <div className=' grid grid-cols-5 grid-rows-1 w-10/12 mx-auto text-white py-9'>
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
            </div> */}

        </div>
    )
}

export default Contact;
