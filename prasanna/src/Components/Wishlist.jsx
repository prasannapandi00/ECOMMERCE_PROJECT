import React from 'react'
import lap from '../assets/2.jpeg'
import game from '../assets/3.jpeg'
import handbag from '../assets/1.jpeg'
import shirt from '../assets/4.jpeg'
import key from '../assets/8.jpeg'
import laptop from '../assets/5.jpeg'
import joy from '../assets/7.jpeg'
import desk from '../assets/6.jpeg'
import { FiShoppingCart } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

function Wishlist() {
  return (
    <div className='w-10/12 mx-auto'>
      <div className='flex justify-between mt-6'>
        <p className='text-xl font-semibold' >Wishlist(4)</p>
        <button className='border-2  px-3 py-1 rounded-md font-medium border-slate-500'>Move All To Bag</button>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4  mt-6  gap-x-10'>
        
        {/* 1st grid */} 
        <div className=''>
          <div className='flex justify-between'>
            <button className='bg-red-600 rounded-md px-3 text-white'>-35%</button>
            <RiDeleteBin6Line className='text-2xl' />
          </div>
          <div>
            <img src={handbag} alt="" />
            <button className='bg-black text-white w-full py-2 rounded-md flex justify-center '><IoCartOutline className='text-2xl mx-2' />Add To Cart</button>
            <p className='py-2 text-lg font-bold'>Gucci duffle bag</p>
            <p className='text-red-600 text-xl'>$ 960 <del className='text-gray-500'>$1160</del></p>
          </div>
        </div>

        {/* 2nd grid */}
        <div className=''>
          <div className='flex justify-between'>
            <button className='bg-red-600 rounded-md  text-white'></button>
            <RiDeleteBin6Line className='text-2xl' />
          </div>
          <div>
            <img src={lap} alt="" />
            <button className='bg-black text-white w-full py-2 rounded-md flex justify-center '><IoCartOutline className='text-2xl mx-2' />Add To Cart</button>
            <p className='py-2 text-lg font-bold'>RGB liquid CPU Cooler</p>
            <p className='text-red-600 text-xl'>$ 1960</p>
          </div>
        </div>
        {/* 3rd grid */}
        <div className=''>
          <div className='flex justify-between'>
            <button className='bg-red-600 rounded-md text-white'></button>
            <RiDeleteBin6Line className='text-2xl' />
          </div>
          <div>
            <img src={game} alt="" />
            <button className='bg-black text-white w-full py-2 rounded-md flex justify-center '><IoCartOutline className='text-2xl mx-2' />Add To Cart</button>
            <p className='py-2 text-lg font-bold'>Gp11 shooter USB Gamepad</p>
            <p className='text-red-600 text-xl'>$ 550</p>
          </div>
        </div>
        {/* 4th grid */}
        <div className=''>
          <div className='flex justify-between'>
            <button className='bg-red-600 rounded-md text-white'></button>
            <RiDeleteBin6Line className='text-2xl' />
          </div>
          <div>
            <img src={shirt} alt="" />
            <button className='bg-black text-white w-full py-2 rounded-md flex justify-center '><IoCartOutline className='text-2xl mx-2' />Add To Cart</button>
            <p className='py-2 text-lg font-bold'>Guilted satin Jacket</p>
            <p className='text-red-600 text-xl'>$ 960 <del className='text-gray-500'>$750</del></p>
          </div>
        </div>




      </div>

      <div className='flex justify-between mt-10'>
        <div className='flex '>
          <button className='bg-red-500 py-6 px-2 '></button>
          <p className='p-3 text-2xl font-medium'> Just For You</p>
        </div>
        <div>
          <button className='border-[1px] border-black py-3 px-10 font-medium rounded-md'>See All</button>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4  mt-10  gap-x-10 '>
        {/* 1st grid */}
        <div className=''>
          <div className='flex justify-between'>
            <button className='bg-red-600 rounded-md px-3 text-white'>-35%</button>
            <RiDeleteBin6Line className='text-2xl' />
          </div>
          <div>
            <img src={laptop} className='w-56' />
            <button className='bg-black text-white w-full py-2 rounded-md flex justify-center '><IoCartOutline className='text-2xl mx-2' />Add To Cart</button>
            <p className='py-2 text-lg font-bold'>ASUS FHD Gaming Laptop</p>
            <p className='text-red-600 text-xl'>$ 960 <del className='text-gray-500'>$1160</del></p>
            <p className='flex text-xl mt-2'><CiStar className='mt-1'/><CiStar className='mt-1'/><CiStar className='mt-1' /><CiStar className='mt-1'/><CiStar className='mt-1' />(65)</p>
          </div>
        </div>
        {/* 2nd grid */}
        <div className=''>
          <div className='flex justify-between'>
            <button className='bg-red-600 rounded-md  text-white'></button>
            <RiDeleteBin6Line className='text-2xl' />
          </div>
          <div>
            <img src={desk} alt="" />
            <button className='bg-black text-white w-full py-2 rounded-md flex justify-center '><IoCartOutline className='text-2xl mx-2' />Add To Cart</button>
            <p className='py-2 text-lg font-bold'>IPS LCD Gaming Moniter </p>
            <p className='text-red-600 text-xl'>$ 1160</p>
            <p className='flex text-xl mt-2'><CiStar className='mt-1'/><CiStar className='mt-1'/><CiStar className='mt-1' /><CiStar className='mt-1'/><CiStar className='mt-1' />(65)</p>
          </div>
        </div>
        {/* 3rd grid */}
        <div className=''>
          <div className='flex justify-between'>
            <button className='bg-red-600 rounded-md text-white'></button>
            <RiDeleteBin6Line className='text-2xl' />
          </div>
          <div>
            <img src={joy} alt="" />
            <button className='bg-black text-white w-full py-2 rounded-md flex justify-center '><IoCartOutline className='text-2xl mx-2' />Add To Cart</button>
            <p className='py-2 text-lg font-bold'>HAVIT HV-G92 Gamepad</p>
            <p className='text-red-600 text-xl'>$ 560</p>
            <p className='flex text-xl mt-2'><CiStar className='mt-1'/><CiStar className='mt-1'/><CiStar className='mt-1' /><CiStar className='mt-1'/><CiStar className='mt-1' />(65)</p>
          </div>
        </div>
        {/* 4th grid */}
        <div className=''>
          <div className='flex justify-between'>
            <button className='bg-red-600 rounded-md text-white'></button>
            <RiDeleteBin6Line className='text-2xl' />
          </div>
          <div>
            <img src={key} alt="" />
            <button className='bg-black text-white w-full py-2 rounded-md flex justify-center '><IoCartOutline className='text-2xl mx-2' />Add To Cart</button>
            <p className='py-2 text-lg font-bold'>AK-900 Wired Keyboard</p>
            <p className='text-red-600 text-xl'>$ 960 <del className='text-gray-500'>$750</del></p>
            <p className='flex text-xl mt-2'><CiStar className='mt-1'/><CiStar className='mt-1'/><CiStar className='mt-1' /><CiStar className='mt-1'/><CiStar className='mt-1' />(65)</p>
          </div>
        </div>
      </div>





    </div>
  )
}

export default Wishlist;