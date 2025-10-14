import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { IoIosArrowForward } from "react-icons/io";
import { Outlet } from 'react-router-dom';



export default function ProfileLayout() {
    const [sideMenu, setSidemenu] = useState(true)

    return (
        <div>
            <Header setSidemenu={setSidemenu} />
            <div className={`h-screen container  gap-1 grid ${!sideMenu ? 'grid-cols-1' : 'grid-cols-3'} `}>
                {
                    sideMenu && (
                        <div className="bg-[var(--bg1-color)]  col-span-1">
                            {/* Sidebar for user profile */}
                            <div className="bg-[var(--white-color)] shadow p-1 m-2 flex">
                                <img src="/image.png" alt="" className='w-12 h-12  rounded-full object-contain' />
                                <div className="mx-3">
                                    <p className='text-xs text-[var(--text-color)]'>hello</p>
                                    <h1 className='line-clamp-1'>Atul rajbjhdv dskjdhsvf</h1>
                                </div>
                            </div>
                            {/* ----------- Other navigation ------ */}
                            <div className="bg-[var(--white-color)] shadow p-1 m-2 flex flex-col items-center justify-between h-100">
                                <ul className='m-2 space-y-2 w-full'>
                                    <li className='flex items-center justify-between   p-3  border border-[var(--border-color)]  rounded-xl cursor-pointer hover:bg-[var(--bg3-color)] w-full text-xs sm:text-sm'><span>My Profile</span> <span> <IoIosArrowForward /> </span></li>
                                    <li className=' flex items-center justify-between p-3  border border-[var(--border-color)]  rounded-xl cursor-pointer hover:bg-[var(--bg3-color)] w-full text-xs sm:text-sm'><span>Manage Address</span> <span> <IoIosArrowForward /> </span> </li>
                                    <li className=' flex items-center justify-between p-3  border border-[var(--border-color)]  rounded-xl cursor-pointer hover:bg-[var(--bg3-color)] w-full text-xs sm:text-sm'><span>Orders</span> <span> <IoIosArrowForward /> </span> </li>
                                </ul>
                                <ul className='m-2 space-y-2 w-full'>
                                    <li className='flex items-center justify-between   p-3  border border-[var(--border-color)]  rounded-xl cursor-pointer hover:bg-[var(--bg3-color)] w-full text-xs sm:text-sm'><span>Log Out</span> <span> <IoIosArrowForward /> </span></li>

                                </ul>
                            </div>
                        </div>
                    )
                }

                <div className={`bg-[var(--bg1-color)]  ${!sideMenu ? `w-full` : 'col-span-2'}  overflow-y-auto`}>
                    {/* showing details  */}
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}
