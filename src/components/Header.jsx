import React, { useState } from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useLocation } from 'react-router-dom';



export default function Header({ setSidemenu }) {
    const [openIndex, setOpenIndex] = useState(null);
    const location = useLocation()
    const [isUser, setisUser] = useState(null)

    const dropdowns = [
        { label: "Covers", options: ["Option A", "Option B"] },
        { label: "Templates", options: ["Option X", "Option Y"] },
        { label: "Display", options: ["Option M", "Option N"] },
        { label: "Second Hand", options: ["Option M", "Option N"] },
        { label: "Camera lens", options: ["Option M", "Option N"] },
        { label: "Toy", options: ["Option M", "Option N"] },
        { label: "Reels", options: ["Option M", "Option N"] },
    ];


    console.log(openIndex)
    return (
        <div className=''>
            {/* Header  */}
            <div className="container mt-2 flex justify-between">
                <div className=" flex items-center space-x-5">
                    <button onClick={() => setSidemenu((prev => !prev))} className=' cursor-pointer bg-[var(--bg3-color)] text-xl sm:text-3xl p-1 text-[var(--primary-color)] rounded'> <HiOutlineMenuAlt2 /> </button>
                    <h1 className='font-extrabold text-[var(--primary-color)] text-sm sm:text-2xl '>MegaMart</h1>
                </div>

                <div className="flex items-center">
                    {/* search box  */}
                    {
                        location.pathname !== '/orders'
                        && (<div className=" min-w-[150px] sm:min-w-[250px]  md:min-w-[300px]  lg:min-w-[500px] flex items-center bg-[var(--bg3-color)] text-[var(--text-color)] rounded p-1 sm:p-3">
                            <CiSearch className='text-[var(--primary-color)] sm:text-2xl ' />
                            <input className='w-full  outline-none rounded mx-1 text-xs sm:text-sm' type="text" name="" placeholder='Search essentials, groceries and more...' />
                            <TfiMenuAlt className='text-[var(--primary-color)] sm:text-xl hidden sm:flex ' />
                        </div>)
                    }
                    {/* btn sign and signup */}
                    <div className="flex">
                        {/* shopping card  */}
                        <button className='flex items-center space-x-1 text-[var(--light-color)] text-[8px] sm:text-xs px-2  mx-2'>
                            <span className='text-[var(--primary-color)] text-lg sm:text-2xl'> <CiShoppingCart /></span>
                            <span className='ml-1 font-bold'>Cart</span>
                        </button>
                        {/* sign in and signup  */}
                        {
                            isUser === null && (
                                <button className='hidden sm:flex items-center space-x-1 text-[var(--light-color)] lg:border-l text-[8px] sm:text-xs px-2'>
                                    <span className='text-[var(--primary-color)] text-sm sm:text-xl'> <IoPersonOutline /></span>
                                    <span className='ml-1 font-bold'>Sign In</span>
                                </button>
                            )
                        }
                        {
                            isUser !== null && (
                                <button className='hidden sm:flex items-center space-x-1 text-[var(--light-color)] lg:border-l text-[8px] sm:text-xs px-2'>
                                    <span className='text-[var(--primary-color)] text-sm sm:text-xl'> <IoPersonOutline /></span>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
            <br />
            <hr className=' border-[var(--border-color)]' />

            {/* categorie  */}
            {
                location.pathname === "/" && (
                    <>
                        <div className="container hidden my-3 sm:flex text-xs md:text-sm lg:text-3xs gap lg:justify-evenly justify-between overflow-visible">
                            {/* --------- btn ----- */}
                            {
                                dropdowns.map((item, i) => (
                                    <div key={i} className="relative text-center w-fit">
                                        <button
                                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                            className={`${openIndex === i
                                                ? "bg-[var(--primary-color)] text-white"
                                                : "bg-[var(--bg3-color)] text-[var(--text-color)]"
                                                } flex items-center p-0.5 md:p-1 justify-center cursor-pointer w-full rounded-full hover:bg-[var(--primary-color)] hover:text-white`}
                                        >
                                            {item.label}
                                            <MdOutlineKeyboardArrowDown
                                                className={`text-2xl ml-1 transform transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {openIndex === i && (
                                            <ul className="absolute bg-[var(--bg3-color)] w-full mt-2 rounded z-20 left-3 shadow-lg">
                                                {item.options.map((opt, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="p-2 hover:bg-[var(--primary-color)] rounded cursor-pointer"
                                                    >
                                                        {opt}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))
                            }



                        </div>
                        <hr className=' border-[var(--border-color)]' />
                    </>
                )
            }
        </div>
    )
}
