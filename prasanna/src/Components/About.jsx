import React from 'react'
import about from '../assets/about.jpg'
import { AiOutlineShop } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";
import { CiBag1 } from "react-icons/ci";
import human1 from '../assets/boy1.png';
import human2 from '../assets/girl1.png';
import human3 from '../assets/boy2.png';
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { PiTruckDuotone } from "react-icons/pi";

function About() {
  return (
    <div>
      <p className=' mt-20 w-10/12 mx-auto'><span className=' text-gray-400'>Home /</span> cart</p>

      <div className=' flex mt-10 w-10/12 mx-auto justify-between'>
        <div className='mt-16'>
          <p className=' font-bold text-4xl tracking-widest '>Our Story</p>
          <p className=' w-96  text-justify mt-6 text-sm '>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
            presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.<br></br> <br></br>
            Exclusive has more than 1 Million products to offer, growing at a very fast.
            Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>


        <div>
          <img src={about} className=' w-96 h-96' />
        </div>
      </div>


      {/* box */}
      <div className=' flex justify-between mt-10 w-10/12 mx-auto '>

        <div className=' bg-white  w-48 h-40   text-center pt-7 border-2  border-gray-400 border-solid rounded-md'>
          <button className=' border-4  border-gray-400 border-solid  rounded-full'><AiOutlineShop className=' bg-black text-white fill-current  rounded-full p-1 text-4xl' /></button>
          <p className=' font-bold text-xl mt-1'>10.5K</p>
          <p className=' text-sm'>Sallers active our site</p>
        </div>

        <div className=' bg-red-500  w-48 h-40   text-center pt-7 border-2  border-red-500 border-solid rounded-md'>
          <button className=' border-4  border-gray-400 border-solid  rounded-full'><RiMoneyDollarCircleLine className=' text-black bg-white fill-current  rounded-full p-1 text-4xl' /></button>
          <p className=' font-bold text-xl mt-1'>33K</p>
          <p className=' text-sm'>Mopnthly Produduct Sale</p>
        </div>

        <div className=' bg-white  w-48 h-40   text-center pt-7 border-2  border-gray-400 border-solid rounded-md'>
          <button className=' border-4  border-gray-400 border-solid  rounded-full'><BiShoppingBag className=' bg-black text-white fill-current  rounded-full p-1 text-4xl' /></button>
          <p className=' font-bold text-xl mt-1'>45.5K</p>
          <p className=' text-sm'>Customer active in our site</p>
        </div>

        <div className=' bg-white  w-48 h-40   text-center pt-7 border-2  border-gray-400 border-solid rounded-md'>
          <button className=' border-4  border-gray-400 border-solid  rounded-full'><CiBag1 className=' bg-black text-white fill-current  rounded-full p-1 text-4xl' /></button>
          <p className=' font-bold text-xl mt-1'>25K</p>
          <p className=' text-sm'>Anual gross sale in our site</p>
        </div>


      </div>



      {/* 3 image  */}
      <div className=' flex justify-between  mt-20 w-10/12 mx-auto'>
        <div className='  w-52   '>
          <img src={human1} className=' w-52 h-60 bg-gray-100 p-6 pb-0 pt-4  border-gray-400 border-solid rounded-md' />
          <p className=' font-semibold text-xl tracking-widest mt-3'>Tom Cruise</p>
          <p className=' text-sm'>Founder & Chairman</p>
          <p className=' flex mt-2  '><FiTwitter />
            <FaInstagram className=' ml-3' />
            <RiLinkedinLine className=' ml-3' /></p>
        </div>

        <div className='  w-52'>
          <img src={human2} className=' w-52 h-60 bg-gray-100 p-6 pb-0 pt-4  border-gray-400 border-solid rounded-md' />
          <p className=' font-semibold text-xl tracking-widest mt-3'>Emma Watson</p>
          <p className=' text-sm'>Managing Director</p>
          <p className=' flex mt-2  '><FiTwitter />
            <FaInstagram className=' ml-3' />
            <RiLinkedinLine className=' ml-3' /></p>
        </div>

        <div className='  w-52'>
          <img src={human3} className=' w-52 h-60 bg-gray-100 p-6 pb-0 pt-4  border-gray-400 border-solid rounded-md' />
          <p className=' font-semibold text-xl tracking-widest mt-3'>Will Smith</p>
          <p className=' text-sm'>Product Designer</p>
          <p className=' flex mt-2  '><FiTwitter />
            <FaInstagram className=' ml-3' />
            <RiLinkedinLine className=' ml-3' /></p>
        </div>
      </div>

      {/* dot    */}
      <div className='  text-gray-400 text-xl flex justify-center mt-6'>
        <GoDotFill />
        <GoDotFill />
        <GoDotFill />
        <GoDotFill />
        <GoDotFill />
      </div>

      <div className='flex justify-between mt-20 w-8/12 mx-auto mb-16'>

        <div className=' bg-white  w-64 h-40   text-center pt-7   '>
          <button className=' border-4  border-gray-400 border-solid  rounded-full'><PiTruckDuotone className=' bg-black text-white fill-current  rounded-full p-1 text-4xl' /></button>
          <p className=' font-bold text-lg mt-3'>FREE AND FAST DELIVERY</p>
          <p className=' text-sm'>Free delivery for all orders over $140</p>
        </div>

        <div className=' bg-white  w-64 h-40   text-center pt-7   '>
          <button className=' border-4  border-gray-400 border-solid  rounded-full'><RiCustomerService2Line className=' bg-black text-white fill-current  rounded-full p-1 text-4xl' /></button>
          <p className=' font-bold text-lg mt-3'>24/7 CUSTOMER SERVICE</p>
          <p className=' text-sm'>Friendly 24/7 customer support</p>
        </div>

        <div className=' bg-white  w-64 h-40   text-center pt-7   '>
          <button className=' border-4  border-gray-400 border-solid  rounded-full'><GoShieldCheck className=' bg-black text-white fill-current  rounded-full p-1 text-4xl' /></button>
          <p className=' font-bold text-lg mt-3'>MONEY BACK GUARANTEE</p>
          <p className=' text-sm'>We reurn money within 30 days</p>
        </div>

      </div>



    </div>
  )
}
export default About;