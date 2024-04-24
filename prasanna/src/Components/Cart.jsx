import React from 'react'
import tv1 from "../assets/tv.png"
import game1 from "../assets/game.png"
import { Link } from 'react-router-dom';


function Cart() {
    return (
        <div >
            <p className=' mt-20 w-10/12 mx-auto'><span className=' text-gray-400'>Home /</span> cart</p>
            {/* py-3 */}
            <div className=' bg-white w-10/12 mx-auto flex justify-between  p-4  rounded shadow mt-16'>
                <p className=''> Product</p>
                {/* ml-12 */}
                <p className='-mr-8'>Price</p>
                <p className='-mr-8'>Quantity</p>
                <p className='-ml-8'>Subtotal</p>
            </div>

            {/* tv image */}

            <div className=' bg-white w-10/12 mx-auto flex justify-between p-3 rounded  mt-6'>
                <div className=' flex'>
                    <img src={tv1} className=' w-12 h-12' /><br />
                    <p className=' mt-2  -mr-12'>LCD Monitor</p>
                    {/* -mr-12   */}
                </div>
                <p className='mt-2 '>$650</p>
                <input type='number' className=' w-12 h-8 border-2 border-gray-400 border-solid rounded bor mt-2' />
                <p className='mt-2'>$650</p>
            </div>

            {/* tv image */}

            <div className=' bg-white w-10/12 mx-auto flex justify-between p-3 rounded  mt-6'>
                <div className=' flex'>
                    <img src={game1} className=' w-12 h-12' /><br />
                    <p className=' mt-2 -mr-10'>LCD Monitor</p>
                </div>
                <p className='mt-2'>$550</p>
                <input type='number' className=' w-12 h-8 border-2 border-gray-400 border-solid rounded bor mt-2' />
                <p className='mt-2'>$1100</p>
            </div>


            <div className='w-10/12 mx-auto flex justify-between mt-6'>
                <button className='w-48 border-2 border-gray-400 border-solid rounded p-2 font-semibold'>Return To Shop</button>
                <button className='w-48 border-2 border-gray-400 border-solid rounded p-2 font-semibold'>Update Cart</button>
            </div>


{/* coupon */}
         <div className=' flex justify-between w-10/12 mx-auto mt-14 mb-28'>
            <div className=' '>
                <button className=' w-64 border-2 border-black border-solid rounded p-2 text-start text-gray-400'>Coupon Code</button>
                <button className=' ml-5 w-48 border-2 border-red-600 border-solid rounded p-2 font-semibold bg-red-600 text-white'>Apply Coupon</button>
            </div>


{/* square box */}
           <div className=' bg-white w-82  border-2 border-black border-solid rounded  p-6'>
            <p className='font-semibold '>Cart Total</p>
            <div className=' flex justify-between w-80 text-xs mt-3 '>
                <p>Subtotal:</p>
                <p>$1750</p>
            </div>
            <hr className='border-1 mt-3 border-solid border-black  w-80'  />

            <div className=' flex justify-between w-80 text-xs mt-3 '>
                <p>Shipping:</p>
                <p>Free</p>
            </div>
            
            <hr className='border-1 mt-3 border-solid border-black w-80'  />

            <div className=' flex justify-between w-80 text-xs mt-3 '>
                <p>Total:</p>
                <p>$1750</p>
            </div>
             
             <div className=' text-center'>
            <button className=' mt-3 w-52 border-2 border-red-600 border-solid rounded p-2 font-semibold bg-red-600 text-white'><Link to="/Checkout">Process to checkout</Link></button>
            </div>
            
            </div>
            </div>     





            {/* <input type='number' className='  w-40 h-8 border-2 border-gray-500 border-solid rounded bor mt-2' /> */}








        </div>
    )
}

export default Cart;