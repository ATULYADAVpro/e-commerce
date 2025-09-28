import React from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function Header() {
    return (
        <div className='container mt-2'>

            <div className=" flex items-center space-x-5">
                <button className='bg-[var(--bg3-color)] text-3xl p-1 text-[var(--primary-color)] rounded'> <HiOutlineMenuAlt2 /> </button>
                <h1 className='font-extrabold text-[var(--primary-color)] text-2xl '>MegaMart</h1>
            </div>

            <div className="">
                {/* search box  */}
                <div className="">
                    <input type="text" name="" placeholder='Search essentials, groceries and more...' />
                </div>
                {/* btn sign and signup */}
                <div className=""></div>
            </div>

        </div>
    )
}
