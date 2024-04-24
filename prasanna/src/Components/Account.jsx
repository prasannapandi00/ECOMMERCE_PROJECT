import React from 'react'

function Account() {
    return (
        <div>
            <div className='flex justify-between w-10/12 mx-auto mt-11'>
                <p><span className='text-gray-400'>Home</span> / My Acccount</p>
                <p className=''>Welcome! <span className='text-red-400'>My Rimel</span></p>
            </div>
            <div className=' flex w-10/12 mx-auto mt-12 mb-20'>
                <div>
                    <p className='font-semibold'>Manage My Account</p>
                    <div className='ml-7 mt-3 mb-3 '>
                        <p>My Profile</p>
                        <p>Address Book</p>
                        <p>My Payment Options</p>
                    </div>
                    <p className='font-semibold'>My Orders</p>
                    <div className='ml-7 mt-3 mb-3'>
                        <p>My Returns</p>
                        <p>My Collections</p>
                    </div>
                    <p className='font-semibold'>MY WishList</p>
                </div>
                <div className='ml-32 shadow-md w-10/12 mx-auto p-8 '>
                    <div className='ml-10 '>
                        <p className='font-semibold text-lg text-red-400'>Edit Your Profile</p>
                        <div className='flex'>
                            <div className='mt-4'>
                                <label>First Name</label><br />
                                <input type='text' placeholder='Md' className='bg-gray-200 h-8 p-3 mt-2 w-72'></input>
                            </div>
                            <div className='mt-4 ml-7'>
                                <label>Last Name</label><br />
                                <input type='text' placeholder='Rimel' className='bg-gray-200 h-8 p-3 mt-2 w-72'></input>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='mt-4'>
                                <label>Email</label><br />
                                <input type='email' placeholder='rimeliiii@gmail.com' className='bg-gray-200 h-8 p-3 mt-2 w-72'></input>
                            </div>
                            <div className='mt-4 ml-7'>
                                <label>Address</label><br />
                                <input type='text' placeholder='kingston,5236,United State' className='bg-gray-200 h-8 p-3 mt-2 w-72'></input>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label>Password Changes</label><br />
                            <input type='text' placeholder='Current Password' className='bg-gray-200 h-8 p-3 mt-2 w-[602px]'></input>
                        </div>
                        <div className='mt-5'>
                            <input type='text' placeholder='New Password' className='bg-gray-200 h-8 p-3 mt-2 w-[602px]'></input>
                        </div>
                        <div className='mt-5'>
                            <input type='text' placeholder='Confirm New Password' className='bg-gray-200 h-8 p-3 mt-2 w-[602px]'></input>
                        </div>
                        <div className='flex justify-end mr-7'>
                            <button className='mt-5 mr-3'>Cancel</button>
                            <button className=' mt-5 bg-red-600 px-3 py-1 text-white rounded'>Save Changes</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;
