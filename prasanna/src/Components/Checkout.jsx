import React from 'react'
import tv1 from "../assets/tv.png"
import game1 from "../assets/game.png"
import bk1 from "../assets/bk.png"
import visa1 from "../assets/visa.png"
import mastercard1 from "../assets/mastercard.png"
import n from "../assets/n.png"

function Checkout() {
  return (
    <div className='w-10/12 mx-auto mt-12'>
      <p className='text-gray-400'>Account 
      <span className='text-gray-400'> / My Account</span>
      <span className='text-gray-400'> / Product</span>
      <span className='text-gray-400'> / View cart</span>
      <span className='text-black font-semibold'> / Checkout</span>
      </p><br />

      <p className='font-semibold text-3xl '>Billing Details</p><br />

      <div className='flex'>
      <div  className=''>
        <form className='' action="">
            <label className='text-gray-400'>First Name*</label><br />
            <input type="text" className='bg-gray-100 w-80 h-10'  /><br /><br />
            <label className='text-gray-400'>Company Name</label><br />
            <input type="text" className='bg-gray-100 w-80 h-10' /><br /><br />
            <label className='text-gray-400'>Street Address*</label><br />
            <input type="text" className='bg-gray-100 w-80 h-10' /><br /><br />
            <label className='text-gray-400'>Apartment,floor,etc.(optional)</label><br />
            <input type="text" className='bg-gray-100 w-80 h-10' /><br /><br />
            <label className='text-gray-400'>Town / City*</label><br />
            <input type="text" className='bg-gray-100 w-80 h-10' /><br /><br />
            <label className='text-gray-400'>Phone Number*</label><br />
            <input type="text" className='bg-gray-100 w-80 h-10' /><br /><br />
            <label className='text-gray-400'>Email Address*</label><br />
            <input type="text" className='bg-gray-100 w-80 h-10' /><br /><br />
        </form>
        <div className='flex'>
        <input type="checkbox" name="" id="" />&nbsp;
        <p> Save this information for faster check-out next time</p>
        </div>
      </div>
      <div className=''>
        <div className=' flex  '>
      <div className= 'flex ml-7'>
        <img className='w-12 h-12' src={tv1}/>
        <p className='font-semibold mt-2 ml-10'>LCD monitor</p></div>
        <p className='font-semibold mt-2 ml-96'>$650</p></div><br />
        <div className=' flex '>
      <div className= 'flex ml-7'>
        <img className='w-12 h-12' src={game1}/>
        <p className='font-semibold mt-2 ml-10'>H1 Gamepad</p></div>
        <p className='font-semibold mt-2 ml-auto'>$1100</p></div><br />
        <hr className='border-1 border-solid border-black ml-8' />
        <div className='flex mt-3'>
            <p className='font-semibold ml-8'>Subtotal:</p>
            <p className='font-semibold ml-auto'>$1750</p>
        </div>
        <hr className='border-1 mt-3 border-solid border-black ml-8'  />
        <div className='flex mt-3'>
            <p className='font-semibold ml-8'>Shipping:</p>
            <p className='font-semibold ml-auto'>Free</p>
        </div><br />
        <div className='flex'>
            <p className='font-semibold ml-8'>Total:</p>
            <p className='font-semibold ml-auto'>$1750</p>
        </div><br />
        <div className='flex'>
            <input className='ml-8' type="radio" />
            <p className='ml-2 mt-3'>Bank</p>
            <div className='flex ml-auto '>
                <img className='w-12 h-12 ' src={bk1} alt="" />
                <img className='w-8 h-3 mt-4 ml-2' src={visa1} alt="" />
                <img className='w-10 h-5 mt-3 ml-2' src={mastercard1} alt="" />
                <img className='w-8 h-8 mt-2 ml-2' src={n} alt="" />
            </div>
        </div><br />
        <div className='flex'> 
            <input className='ml-8' type="radio" />
            <p className='ml-2'>Cash on Delivery</p>
        </div ><br />
        <div className='flex'>
        <input className='bg-gray-100 p-2 ml-8' type="text" placeholder='Coupon code' />
        <button className='bg-red-500 p-2 rounded-sm ml-10 w-36 text-white'>Apply Coupon</button>
        </div>
        <button className='bg-red-500 p-2 rounded-sm ml-10 mt-5 w-36 text-white'>Place Order</button>

      </div>
      </div>
    </div>
  )
}

export default Checkout;