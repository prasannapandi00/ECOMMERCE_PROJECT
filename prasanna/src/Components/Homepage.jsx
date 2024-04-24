import React from 'react'
import { FaStar } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
import hoodie from '../assets/hoodie.png'
import handbag from '../assets/handbag.png'
import speaker from '../assets/speaker.png'
import table from '../assets/table.png'
import speaker2 from '../assets/speaker2.png'
import bk from '../assets/bk.png'
import bluetooth from '../assets/bluetooth.png'
import camera from '../assets/camera.png'
import car from '../assets/car.png'
import cesar from '../assets/cesar.jpeg'
import curology from '../assets/curology.png'
import game from '../assets/game.png'
import girl from '../assets/girl.jpeg'
import hoodie1 from '../assets/hoodie1.png'
import joystick from '../assets/joystick.png'
import laptop from '../assets/laptop.png'
import mastercard from '../assets/mastercard.png'
import ps5 from '../assets/ps5.png'
import shoe from '../assets/shoe.png'
import spray from '../assets/spray.png'
import tv from '../assets/tv.png'
import visa from '../assets/visa.png'

// import { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import { MdOutlineShoppingCart } from "react-icons/md";
import img from "../assets/phone.jpeg";
import { PiAppleLogoThin } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa";

// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import { GrFavorite } from "react-icons/gr";
// import { IoEyeOutline } from "react-icons/io5";
import game1 from "../assets/game.png"
// import { FaStar } from "react-icons/fa";
import key from "../assets/keyboard.jpeg";
import tv1 from "../assets/tv.jpeg"
import chair from "../assets/chair.jpeg"
import { MdPhoneAndroid } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";

function Homepage() {

  //   const [open, setOpen]= useState(false);
  // const menuClicked = () => {
  //   setOpen(!open)
  // };
  // const ulClick = () => {
  //   setOpen(false);
  // }
  return (
    <div>

      {/* Navbar */}

      {/* <div className="w-10/12 mx-auto lg:flex justify-between border-b-2 border-b-gray-300 py-3">
      <div className="flex justify-between">
        <h1 className="flex text-4xl">Exclusive</h1>
        <div className=" lg:hidden mt-3 mr-4">
            <button onClick={menuClicked} className="  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            </div>
      </div>
      <div className={` flex  text-xl place-items-center lg:flex justify-end ${open? "block" : "hidden"} `}>
          <div onClick={ulClick} className="block lg:flex space-x-10 ">
          <p className="ml-10 sm:ml-10 md:ml-10">Home</p>
          <p>Contact</p>
          <p>About</p>
          <p>sign Up</p>
          </div>
      </div>
      <div className="">
      <label class=" flex">
            <input
              type="text"
              name="search"
              class="mt-1 px-3 py-3 sm:w-56 flex w-11/12 mx-auto md:w-96 lg:w-56 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none relative rounded-md sm:text-sm focus:ring-1"
              placeholder="what are looking for?"
              
            />
            <CiSearch className="text-3xl mt-3 absolute max-sm:left-64 lg:ml-40 md:ml-[56%]  text-gray-500" />
            <CiHeart className="text-3xl mt-3 ml-2 "/>
            <MdOutlineShoppingCart className="text-3xl mt-3 ml-2" />
          </label>
      </div>
    </div> */}

      {/* Menu */}

      <div>
        <div className="grid ml-10 lg:ml-28 md:grid-cols-4 md:mt-16 lg:mt-10 lg:w-10/12 mx-auto">
          <div className="text-lg col-span-1 border-r-2 border-gray-400 mr-5">
            <ul className="space-y-3">
              <li className="flex">
                Women's Fashion{" "}
                <FaChevronRight className="my-2 mx-6 opacity-45" />
              </li>
              <li className="flex">
                {" "}
                Men's Fashion <FaChevronRight className="my-2 mx-12 opacity-45" />
              </li>
              <li>Electronics</li>
              <li>Home & Life style</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby's & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className=" col-span-3 bg-black ">
            <div className="grid md:grid-cols-2">
              <div className=" text-white p-14 font-medium">
                <p className="flex">
                  <PiAppleLogoThin className="text-6xl md:text-4xl lg:text-6xl" />
                  <span className="py-4 md:py-2 lg:py-4">I Phone 14 Series</span>
                </p>
                <p className="text-5xl md:text-2xl lg:text-5xl  mt-2">
                  Up to 10%
                </p>
                <p className="text-5xl md:text-2xl lg:text-5xl mt-2 tracking-wider">
                  {" "}
                  off Voucher
                </p>
                <p className="text-xl mt-5 flex underline">
                  Shop Now <FaArrowRight className="mx-2 my-1.5" />
                </p>
              </div>
              <div className="">
                <img src={img} alt="iphone" className="mt-10 md:mt-20 lg:mt-10" />
              </div>
            </div>
          </div>
        </div>
      </div><br />

      {/* Flash */}

      <div>
        <div className=' mt-20 w-10/12 mx-auto flex '>
        <p className=' w-5 h-9 bg-red-500 border-4  border-red-500 border-solid  rounded-md'></p>
        <p className=' text-red-500 font-semibold ml-5 mt-1'>Today's</p>
      </div> 


         <div className=' w-10/12 mx-auto flex justify-between mt-5  '>
        <div className='flex  '>
          <div>
            <p className=' font-semibold text-2xl tracking-wide '>Flash Sales</p></div>
          <div className=' ml-14 -my-2 '>
            <div className='flex'>
              <p className=' text-xs' >Days</p>
              <p className=' text-xs ml-14' >Hours</p>
              <p className=' text-xs ml-11' >Minutes</p>
              <p className=' text-xs ml-9' >Seconds</p>
            </div>
            <div className='flex'>
              <p className=' font-semibold text-2xl'>03</p>
              <p className=' text-2xl text-red-500 ml-6 -my-1'>:</p>
              <p className=' font-semibold text-2xl ml-6'>23</p>
              <p className=' text-2xl text-red-500 ml-6 -my-1'>:</p>
              <p className=' font-semibold text-2xl ml-6'>19</p>
              <p className=' text-2xl text-red-500 ml-6 -my-1'>:</p>
              <p className=' font-semibold text-2xl ml-6 mr-72'>56</p>
            </div>
          </div>


          <div className=' flex  ml-96 '>
            <FaArrowLeft className=' bg-gray-300  border-4  border-gray-300 border-solid  rounded-full text-3xl p-1 mr-3' /><br />
            <FaArrowRight className=' bg-gray-300  border-4  border-gray-300 border-solid  rounded-full text-3xl p-1' />
          </div>
        </div>
      </div>  <br />


        {/* image  */}
        <div className='flex justify-evenly  ml-20 mt-5'>

          <div className='  w-48'>
            <div className='bg-gray-200  w-54 h-48 p-3 border-1  border-orange-500 border-solid  rounded-md'>
              <div className=' flex justify-between'>
                <div>
                  <p className=' w-10 h-6 bg-red-500 border-4  border-red-500 border-solid  rounded-md text-xs text-center text-white'>-40%</p>
                </div>
                <div className='flex'>
                  <GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1' />
                </div>


              </div>
              <div className='flex justify-center mt-4'> <img src={game1} className=' w-24 h-24 ml-8' />
                <IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-3' />
              </div>
            </div>

            <p className=' font-semibold mt-2'>HAVIT HV-G92 Gamepad</p>
            <div className='flex mt-2'>
              <p className=' text-red-500 font-semibold '>$120</p>
              <del className=' text-gray-400 font-semibold ml-5'>$160</del>
            </div>
            <div className='flex mt-2'>
              <FaStar className=' text-yellow-500' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <p className=' text-gray-400 font-semibold ml-3 -mt-1'>(88)</p>
            </div>
          </div>


          {/* image  */}
          <div className='  w-48'>
            <div className=' bg-gray-200 border-1   border-solid  rounded-md'>
              <div className=' w-54 h-40 p-3 border-1   border-solid  rounded-md'>
                <div className=' flex justify-between'>
                  <div>
                    <p className=' w-10 h-6 bg-red-500 border-4  border-red-500 border-solid  rounded-md text-xs text-center text-white'>-36%</p>
                  </div>
                  <div className='flex'>
                    <GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1' />
                  </div>


                </div>
                <div className='flex justify-center mt-4'> <img src={key} className=' w-32 h-32 ml-2 -mt-8' />
                  <IoEyeOutline className=' bg-white  border-1  border-white border-solid  rounded-2xl text-3xl p-1 ml-1 ' />
                </div>
              </div>
              <p className=' text-white bg-black pt-1  text-center h-8 border-1  border-solid rounded-br-sm rounded-bl-sm text-sm '>Add to Cart</p>

            </div>



            <p className=' font-semibold mt-2'>AK-900 Wired Keyboard</p>
            <div className='flex mt-2'>
              <p className=' text-red-500 font-semibold '>$960</p>
              <del className=' text-gray-400 font-semibold ml-5'>$1160</del>
            </div>
            <div className='flex mt-2'>
              <FaStar className=' text-yellow-500' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-gray-400 ml-1' />
              <p className=' text-gray-400 font-semibold ml-3 -mt-1'>(75)</p>
            </div>
          </div>


          {/* image  */}
          <div className='  w-48'>
            <div className='bg-gray-200  w-54 h-48 p-3 border-1  border-orange-500 border-solid  rounded-md'>
              <div className=' flex justify-between'>
                <div>
                  <p className=' w-10 h-6 bg-red-500 border-4  border-red-500 border-solid  rounded-md text-xs text-center text-white'>-30%</p>
                </div>
                <div className='flex'>
                  <GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1' />
                </div>


              </div>
              <div className='flex justify-center mt-4'> <img src={tv1} className=' w-32 h-32 ml-4 -mt-2 ' />
                <IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 -ml-1' />
              </div>
            </div>

            <p className=' font-semibold mt-2'>IPS LCD Gaming Monitor</p>
            <div className='flex mt-2'>
              <p className=' text-red-500 font-semibold '>$370</p>
              <del className=' text-gray-400 font-semibold ml-5'>$400</del>
            </div>
            <div className='flex mt-2'>
              <FaStar className=' text-yellow-500' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <p className=' text-gray-400 font-semibold ml-3 -mt-1'>(99)</p>
            </div>
          </div>

          {/* image  */}
          <div className='  w-48'>
            <div className='bg-gray-200  w-54 h-48 p-3 border-1  border-orange-500 border-solid  rounded-md'>
              <div className=' flex justify-between'>
                <div>
                  <p className=' w-10 h-6 bg-red-500 border-4  border-red-500 border-solid  rounded-md text-xs text-center text-white'>-25%</p>
                </div>
                <div className='flex'>
                  <GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1' />
                </div>


              </div>
              <div className='flex justify-center mt-4'> <img src={chair} className=' w-32 h-40 ml-4 -mt-6 ' />
                <IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 -ml-1' />
              </div>
            </div>

            <p className=' font-semibold mt-2'>S-Series Comfort Chair</p>
            <div className='flex mt-2'>
              <p className=' text-red-500 font-semibold '>$375</p>
              <del className=' text-gray-400 font-semibold ml-5'>$400</del>
            </div>
            <div className='flex mt-2'>
              <FaStar className=' text-yellow-500' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <p className=' text-gray-400 font-semibold ml-3 -mt-1'>(99)</p>
            </div>
          </div>

          {/* image  */}
          <div className='  w-48'>
            <div className='bg-gray-200  w-54 h-48 p-3 border-1  border-orange-500 border-solid  rounded-md'>
              <div className=' flex justify-between'>
                <div>
                  <p className=' w-10 h-6 bg-red-500 border-4  border-red-500 border-solid  rounded-md text-xs text-center text-white'>-25%</p>
                </div>
                <div className='flex'>
                  <GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1' />
                </div>


              </div>
              <div className='flex justify-center mt-4'> <img src={chair} className=' w-32 h-40 ml-4 -mt-6 ' />
                <IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 -ml-1' />
              </div>
            </div>

            <p className=' font-semibold mt-2'>S-Series Comfort Chair</p>
            <div className='flex mt-2'>
              <p className=' text-red-500 font-semibold '>$375</p>
              <del className=' text-gray-400 font-semibold ml-5'>$400</del>
            </div>
            <div className='flex mt-2'>
              <FaStar className=' text-yellow-500' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <p className=' text-gray-400 font-semibold ml-3 -mt-1'>(99)</p>
            </div>
          </div>

          {/* image  */}
          <div className='  w-48 cursor-pointer'>
            <div className='bg-gray-200  w-54 h-48 p-3 border-1  border-orange-500 border-solid  rounded-md'>
              <div className=' flex justify-between'>
                <div>
                  <p className=' w-10 h-6 bg-red-500 border-4  border-red-500 border-solid  rounded-md text-xs text-center text-white'>-25%</p>
                </div>
                <div className='flex'>
                  <GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1' />
                </div>


              </div >
              <div className='flex justify-center mt-4'> <img src={chair} className=' w-32 h-40 ml-4 -mt-6 ' alt='' />
                <IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 -ml-1' />
              </div>
            </div>

            <p className=' font-semibold mt-2'>S-Series Comfort Chair</p>
            <div className='flex mt-2'>
              <p className=' text-red-500 font-semibold '>$375</p>
              <del className=' text-gray-400 font-semibold ml-5'>$400</del>
            </div>
            <div className='flex mt-2'>
              <FaStar className=' text-yellow-500' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <FaStar className=' text-yellow-500 ml-1' />
              <p className=' text-gray-400 font-semibold ml-3 -mt-1'>(99)</p>
            </div>
          </div>

        </div>

        <div className=' text-center'>
          <button className='  mt-11 mb-11 w-48 border-2 border-red-500 border-solid rounded p-2 font-semibold bg-red-500 text-white'>Vist All Products</button>
        </div>

        <hr className='border-1  border-solid border-black  ' />



        {/* category  */}
        <div className=' mt-14 w-10/12 mx-auto flex '>
          <p className=' w-5 h-9 bg-red-500 border-4  border-red-500 border-solid  rounded-md'></p>
          <p className=' text-red-500 font-semibold ml-5 mt-1'>Categories</p>
        </div>


        <div className='flex  justify-between w-10/12 mx-auto mt-3'>
          <div>
            <p className=' font-semibold text-2xl tracking-wide '>Browse By Category</p></div>

          <div className='flex  mr-5'>
            <FaArrowLeft className=' bg-gray-300  border-4  border-gray-300 border-solid  rounded-full text-3xl p-1 mr-3' /><br />
            <FaArrowRight className=' bg-gray-300  border-4  border-gray-300 border-solid  rounded-full text-3xl p-1' />
          </div>
        </div>
        <br />



        <div className='w-10/12 mx-auto flex justify-between mt-9'>
          <div className='   w-40 h-36  pt-9 border-2  border-black border-solid  rounded-md   hover:bg-red-500  hover:text-white text-center'>
            <p className=' '><MdPhoneAndroid className=' text-4xl mb-2  ml-14' /></p>
            <p className=' text-sm -ml-2'>Phones</p>
          </div>

          <div className='  w-40 h-36  pt-9 border-2  border-black border-solid  rounded-md   hover:bg-red-500 hover:text-white  text-center'>
            <p className=' '><RiComputerLine className=' text-4xl mb-2  ml-14' /></p>
            <p className=' text-sm -ml-2'>Computers</p>
          </div>

          <div className='  w-40 h-36  pt-9 border-2  border-black border-solid  rounded-md   hover:bg-red-500 hover:text-white  text-center'>
            <p className=' '><BsSmartwatch className=' text-4xl mb-2  ml-14' /></p>
            <p className=' text-sm -ml-2'>Smartwatch</p>
          </div>

          <div className='  w-40 h-36  pt-9 border-2  border-black border-solid  rounded-md   hover:bg-red-500 hover:text-white  text-center'>
            <p className=' '><MdOutlineCameraAlt className=' text-4xl mb-2  ml-14' /></p>
            <p className=' text-sm -ml-2'>Camera</p>
          </div>


          <div className='  w-40 h-36  pt-9 border-2  border-black border-solid  rounded-md    text-center  hover:bg-red-500 hover:text-white'>
            <p className=' '><LuHeadphones className=' text-4xl mb-2  ml-14' /></p>
            <p className=' text-sm -ml-2'>HeadPhones</p>
          </div>


          <div className='  w-40 h-36  pt-9 border-2  border-black border-solid  rounded-md  hover:bg-red-500  hover:text-white  text-center'>
            <p className=' '><TbDeviceGamepad className=' text-4xl mb-2  ml-14  ' /></p>
            <p className=' text-sm -ml-2'>Gaming</p>
          </div>
        </div>



        {/* our products  */}
        <div className=' mt-14 w-10/12 mx-auto flex '>
          <p className=' w-5 h-9 bg-red-500 border-4  border-red-500 border-solid  rounded-md'></p>
          <p className=' text-red-500 font-semibold ml-5 mt-1'>Out Products</p>
        </div>


        <div className='flex  justify-between w-10/12 mx-auto mt-3'>
          <div>
            <p className=' font-semibold text-2xl tracking-wide '>Explore Our Products</p></div>

          <div className='flex  mr-5'>
            <FaArrowLeft className=' bg-gray-300  border-4  border-gray-300 border-solid  rounded-full text-3xl p-1 mr-3' /><br />
            <FaArrowRight className=' bg-gray-300  border-4  border-gray-300 border-solid  rounded-full text-3xl p-1' />
          </div>
        </div>
        <br />

        <br /><br /><br />
      </div>






      {/* selling products */}
      <div className=' mt-2 w-10/12 mx-auto  flex '>
        <p className=' w-5 h-9 bg-red-500 border-4  border-red-500 border-solid  rounded-md'></p>
        <p className=' text-red-500 font-semibold ml-5 mt-1'>This month</p>
      </div>
      <div className='flex lg:w-11/12'>
        <div><p className='font-bold text-3xl ml-28 '>Best Selling Products</p></div>
        <div className='ml-auto -mr-5'><button className='text-white bg-red-500 w-28 h-10 mr-6'>view all</button></div>
      </div>

      {/* images */}
      <div className='flex mt-5 lg:w-11/12'>
        <div className=''>
          <div className='bg-gray-200 ml-28  h-52 p-2 ' >
            {/* <div className='ml-44 bg-white w-5 h-4 rounded-lg mt-3 flex justify-center'><FaRegHeart/></div>
    <div className='ml-44 bg-white w-5 h-5 rounded-lg mt-3 flex justify-center'><FaEye/></div> */}
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={hoodie} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>The north coat</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$260</p>
              <del className='text-gray-400 font-semibold mt-1 ml-5'>$360</del>
            </div>
            <div className='flex mt-1'>
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <p className='ml-2 -mt-1'>(65)</p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            {/* <div className='ml-44 bg-white w-5 h-4 rounded-lg mt-3 flex justify-center'><FaRegHeart/></div>
    <div className='ml-44 bg-white w-5 h-5 rounded-lg mt-3 flex justify-center'><FaEye/></div> */}
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={handbag} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>Gucci duffle bag</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$960</p>
              <del className='text-gray-400 font-semibold mt-1 ml-5'>$1160</del>
            </div>
            <div className='flex mt-1'>
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <p className='ml-2 -mt-1'>(65)</p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            {/* <div className='ml-44 bg-white w-5 h-4 rounded-lg mt-3 flex justify-center'><FaRegHeart/></div>
    <div className='ml-44 bg-white w-5 h-5 rounded-lg mt-3 flex justify-center'><FaEye/></div> */}
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={speaker} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>RGB Liquid CPU Cooler</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$160</p>
              <del className='text-gray-400 font-semibold mt-1 ml-5'>$170</del>
            </div>
            <div className='flex mt-1'>
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <p className='ml-2 -mt-1'>(65)</p>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            {/* <div className='ml-44 bg-white w-5 h-4 rounded-lg mt-3 flex justify-center'><FaRegHeart/></div>
    <div className='ml-44 bg-white w-5 h-5 rounded-lg mt-3 flex justify-center'><FaEye/></div> */}
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={table} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>Small Bookself</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$360</p>
            </div>
            <div className='flex mt-1'>
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <FaStar className='fill-yellow-300' />
              <p className='ml-2 -mt-1'>(65)</p>
            </div>
          </div>
        </div>




      </div>

      {/* categories */}
      <div className='flex justify-center'>
        <div className='flex mt-16 bg-black w-9/12 h-80'>
          <div className='ml-28 mt-10' >
            <p className='text-green-600 font-semibold mt-1'>Categories</p>
            <p className='text-2xl font-bold text-white mt-3'> Enhance Your</p>
            <p className='text-2xl font-bold text-white mt-1'>Music Experience</p>
            <div className='flex mt-4' >
              <div className=' bg-white  border-2  border-white border-solid  rounded-full w-12 h-12 p-1 '>
                <p className='text-xs text-center'>23</p>
                <p className='text-xs text-center'>hours</p>
              </div>
              <div className=' bg-white  border-2  border-white border-solid  rounded-full w-12 h-12 p-1 ml-2'>
                <p className='text-xs text-center'>05</p>
                <p className='text-xs text-center'>days</p>
              </div>
              <div className=' bg-white  border-2  border-white border-solid  rounded-full w-12 h-12 p-1 ml-2'>
                <p className='text-xs text-center'>59</p>
                <p className='text-xs text-center'>minutes</p>
              </div>
              <div className=' bg-white  border-2  border-white border-solid  rounded-full w-12 h-12 p-1 ml-2'>
                <p className='text-xs text-center'>35</p>
                <p className='text-xs text-center'>seconds</p>
              </div>
            </div>
            <button className='bg-green-500 text-white w-28 h-11 mt-5 ml-2'>Buy Now!</button>
          </div>
          <div className='mt-10'>
            <img src={speaker2} alt="" className='w-3/4 ml-40 -mt-36 ' />
          </div>
        </div>
      </div>

      {/* our products  */}
      <div className=' mt-14 w-10/12 mx-auto flex '>
        <p className=' w-5 h-9 bg-red-500 border-4  border-red-500 border-solid  rounded-md'></p>
        <p className=' text-red-500 font-semibold ml-5 mt-1'>Out Products</p>
      </div>
      <div className='flex  justify-between w-10/12 mx-auto mt-3'>
        <div>
          <p className=' font-semibold text-2xl tracking-wide '>Explore Our Products</p></div>

        <div className='flex  mr-5'>
          <FaArrowLeft className=' bg-gray-300  border-4  border-gray-300 border-solid  rounded-full text-3xl p-1 mr-3' /><br />
          <FaArrowRight className=' bg-gray-300  border-4  border-gray-300 border-solid  rounded-full text-3xl p-1' />
        </div>
      </div><br />

      {/* products images */}
      <div className='flex mt-5 lg:w-11/12'>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            {/* <div className='ml-44 bg-white w-5 h-4 rounded-lg mt-3 flex justify-center'><FaRegHeart/></div>
    <div className='ml-44 bg-white w-5 h-5 rounded-lg mt-3 flex justify-center'><FaEye/></div> */}
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={cesar} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>The north coat</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$100</p>
              <div className='flex mt-2 ml-2'>
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <p className='ml-2 -mt-1'>(35)</p>
              </div></div>
          </div>
        </div>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            {/* <div className='ml-44 bg-white w-5 h-4 rounded-lg mt-3 flex justify-center'><FaRegHeart/></div>
    <div className='ml-44 bg-white w-5 h-5 rounded-lg mt-3 flex justify-center'><FaEye/></div> */}
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-16' src={camera} alt="" />
            <p className=' text-white bg-black pt-1  text-center h-8 border-1 -mt-3 border-solid rounded-br-sm rounded-bl-sm text-sm '>Add to Cart</p>
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>Gucci duffle bag</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$360</p>
              <div className='flex  ml-2 mt-2'>
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <p className='ml-2 -mt-1'>(95)</p>
              </div></div>
          </div>
        </div>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            {/* <div className='ml-44 bg-white w-5 h-4 rounded-lg mt-3 flex justify-center'><FaRegHeart/></div>
    <div className='ml-44 bg-white w-5 h-5 rounded-lg mt-3 flex justify-center'><FaEye/></div> */}
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={laptop} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>RGB Liquid CPU Cooler</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$700</p>
              <div className='flex mt-2 ml-2'>
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <p className='ml-2 -mt-1'>(325)</p>
              </div></div>
          </div>
        </div>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            {/* <div className='ml-44 bg-white w-5 h-4 rounded-lg mt-3 flex justify-center'><FaRegHeart/></div>
    <div className='ml-44 bg-white w-5 h-5 rounded-lg mt-3 flex justify-center'><FaEye/></div> */}
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={curology} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>Small Bookself</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$500</p>
              <div className='flex mt-2 ml-2'>
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <p className='ml-2 -mt-1'>(145)</p>
              </div></div>
          </div>
        </div>
      </div>

      <div className='flex mt-5 lg:w-11/12'>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            <div className='bg-green-500 text-white w-12 text-center'>New</div>
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={car} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>Kids Electric car</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$960</p>
              <div className='flex mt-2 ml-2'>
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <p className='ml-2 -mt-1'>(65)</p>
              </div>
            </div>
            <div className='flex'>
              <FaRegDotCircle className='fill-red-600 ' />
              <FaCircle className='fill-red-600 ml-2' />
            </div>

          </div>





        </div>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={shoe} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>Jr.Zoom Soccer Cleats</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$1160</p>
              <div className='flex mt-2 ml-2'>
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <p className='ml-2 -mt-1'>(35)</p>
              </div>
            </div>
            <div className='flex'>
              <FaRegDotCircle className='fill-yellow-600 ' />
              <FaCircle className='fill-red-600 ml-2' />
            </div>

          </div>
        </div>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            <div className='bg-green-500 text-white w-12 text-center'>New</div>
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={joystick} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>GP11 Shooter USB Gamepad</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$660</p>
              <div className='flex mt-2 ml-2'>
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <p className='ml-2 -mt-1'>(55)</p>
              </div>
            </div>
            <div className='flex'>
              <FaRegDotCircle className='fill-black-600 ' />
              <FaCircle className='fill-red-600 ml-2' />
            </div>

          </div>





        </div>
        <div className=''>
          <div className='bg-gray-200 ml-28 h-52 p-2 ' >
            <div><GrFavorite className=' bg-white  border-2  border-white border-solid  rounded-full text-3xl p-1 ml-auto  ' /></div>
            <div><IoEyeOutline className=' bg-white  border-1 border-white border-solid  rounded-2xl text-3xl p-1 ml-auto mt-2' /></div>
            <img className='w-52 h-44 -mt-10' src={hoodie1} alt="" />
          </div>
          <div className='ml-28'>
            <p className='font-semibold mt-1'>Quilted Satin Jacket</p>
            <div className='flex'>
              <p className='font-semibold text-red-500 mt-1'>$660</p>
              <div className='flex mt-2 ml-2'>
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <FaStar className='fill-yellow-300' />
                <p className='ml-2 -mt-1'>(55)</p>
              </div>
            </div>
            <div className='flex'>
              <FaRegDotCircle className='fill-black-600 ' />
              <FaCircle className='fill-red-600 ml-2' />
            </div>

          </div>





        </div>
      </div>
      <div className='mt-5 flex justify-center'>
        <button className='bg-red-500 text-center text-white h-10 w-40'>View all products</button>
      </div>

      {/* New Arrival */}
      {/* <div className=' mt-5 w-10/12 mx-auto flex '>
        <p className=' w-5 h-9 bg-red-500 border-4  border-red-500 border-solid  rounded-md'></p>
        <p className=' text-red-500 font-semibold ml-5 mt-1'>Featured</p>
      </div>
      <div className='ml-28 mt-2'><p className='font-bold text-3xl'>New Arrival</p></div>

      <div className='flex'>
        <div className='bg-black w-2/6 ml-28 h-96'>
          <img src={ps5} alt="" />
          <p className='text-white -mt-28 ml-16 font-semibold text-xl'>Play Station 5</p>
          <p className='text-white font-thin ml-16 text-sm mt-3'>Black and White version of the PS5</p>
          <p className='text-white font-thin ml-16 text-sm'>coming out on sale</p>
          <p className='text-white font-thin ml-16 text-base mt-3'>Shop Now</p>

        </div><br /><br /><br /><br /><br />


        <div>
          <div className='bg-black w-6/12 h-60 ml-28 flex'>
            <div>
              <p className='text-white ml-16 font-semibold text-xl mt-16'>Women's Collections</p>
              <p className='text-white font-thin ml-16 text-sm mt-3'>Featured woman collections that</p>
              <p className='text-white font-thin ml-16 text-sm'>give you another vibe.</p>
              <p className='text-white font-thin ml-16 text-base mt-3 '>Shop Now</p>
            </div>
            <div>
              <img src={girl} alt="" className='w-68 h-48 ml-24' />
            </div>
          </div><br /><br />

          <div className='flex'>
            <div className='bg-black w-4/12 ml-28 h-80'>
              <div className=''>
                <img src={bluetooth} alt="" className=' ml-12 ' />
                <p className='text-white -mt-28 ml-28 font-semibold text-xl'>Speakers</p>
                <p className='text-white font-thin ml-28 text-sm mt-3'>Amazon wireless speakers</p>
                <p className='text-white font-thin ml-28 text-base mt-3'>Shop Now</p></div>

            </div><br /><br />

            <div className='bg-black w-4/12 ml-28 h-80'>
              <div className=''>
                <img src={spray} alt="" className=' ml-10 w-72' />
                <p className='text-white -mt-28 ml-28 font-semibold text-xl'>Perfume</p>
                <p className='text-white font-thin ml-28 text-sm mt-3'>GUCCI INTENSE OUD EDP</p>
                <p className='text-white font-thin ml-28 text-base mt-3'>Shop Now</p></div>

            </div>
          </div>
        </div>
      </div> */}




    </div>
  )
}

export default Homepage;