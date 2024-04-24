import React from 'react'
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MainNav() {
    const [open, setOpen]= useState(false);
    const menuClicked = () => {
      setOpen(!open)
    };
    const ulClick = () => {
      setOpen(false);
    }
    return (
        <div>
            <div className="w-10/12 mx-auto lg:flex justify-between border-b-2 border-b-gray-300 py-3 ">
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
                <div className={` flex  text-xl place-items-center lg:flex justify-end ${open ? "block" : "hidden"} `}>
                    <div onClick={ulClick} className="block lg:flex space-x-10 ">
                        <p className="ml-10 sm:ml-10 md:ml-10"><Link to="/">Home</Link></p>
                        <p> <Link to="/Contact">Contact</Link></p>
                        <p> <Link to="/About">About</Link></p>
                        <p> <Link to="/Signup">Sign Up</Link></p>
                    </div>
                </div>
                <div className="">
                    <label className=" flex">
                        <input
                            type="text"
                            name="search"
                            className="mt-1 px-3 py-3 sm:w-56 flex w-11/12 mx-auto md:w-96 lg:w-56 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none relative rounded-md sm:text-sm focus:ring-1"
                            placeholder="what are looking for?"

                        />
                        <CiSearch className="text-3xl mt-3 absolute max-sm:left-64 lg:ml-40 md:ml-[56%]  text-gray-500" />
                        <Link to="/Wishlist"><CiHeart className="text-3xl mt-3 ml-2 " /></Link>
                        <Link to="/Cart"><MdOutlineShoppingCart className="text-3xl mt-3 ml-2" /></Link>
                        <Link to="/Account"><FaRegUser className="text-2xl mt-4 ml-2" /></Link>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default MainNav;
