import React from 'react'

export default function Profile() {
    return (
        <div className='m-2'>
            <form className='gap-5'>
                <div className="flex items-center justify-center">
                    <div className=" flex items-center w-fit justify-center">
                        <img src="/image.png" alt="profile image" className='w-20 h-20 m-2' />
                    </div>
                </div>
                <div className="my-5">
                    <div className="flex space-x-5">
                        <h1 className='text-xl font-medium'>Personal Information</h1>
                        <button className='text-[var(--primary-color)] cursor-pointer'>Edit</button>
                    </div>
                    <div className="my-2">
                        <input type="text" name="" id="" className='border text-center p-2 m-2' placeholder='First Name ' />
                        <input type="text" name="" id="" className='border text-center p-2 m-2' placeholder='Last Name ' />
                    </div>
                    <div className="">
                        <h1>Your Gender</h1>
                        <div className=" flex items-center space-x-2 my-2">
                            <input type="checkbox" name="male" id='male' className='' />
                            <label htmlFor="male">Male</label>

                            <input type="checkbox" name="female" id='female' className='mx-2' />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>

                <div className="my-12">
                    <div className="flex space-x-5">
                        <h1 className='text-xl font-medium'>Email Address</h1>
                        <button className='text-[var(--primary-color)] cursor-pointer'>Edit</button>
                    </div>
                    <div className="my-2">
                        <input type="text" name="" id="" className='border text-center p-2 m-2' placeholder='Email' />
                    </div>
                </div>

                <div className="my-12">
                    <div className="flex space-x-5">
                        <h1 className='text-xl font-medium'>Mobile Number</h1>
                        <button className='text-[var(--primary-color)] cursor-pointer'>Edit</button>
                    </div>
                    <div className="my-2">
                        <input type="text" name="" id="" className='border text-center p-2 m-2' placeholder='Mobile' />
                    </div>
                </div>
            </form>
        </div>
    )
}
