import React from 'react'
import HeaderInfo from '../../components/HeaderInfo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { LuCheck } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

export default function TrackLayout() {
    return (
        <div className=''>
            <HeaderInfo />
            <Header />
            <div className=" h-screen bg-[var(--bg1-color)]">
                <div className="container gap-1 h-full grid sm:grid-cols-3">
                    <div className="sm:col-span-2 my-10">
                        <div className="bg-[var(--white-color)] shadow rounded p-2">
                            <div className="flex justify-evenly">
                                <div className="space-y-2">
                                    <h1 className='max-w-150'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, tenetur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, provident?</h1>
                                    <p className='text-[var(--text-color)] text-xs'>Lorem ipsum dolor sit amet.</p>
                                    <p className='my-2'>$12345</p>
                                </div>
                                <div className="">
                                    <img src="/image.png" alt="" />
                                </div>
                            </div>
                            <hr />

                            {/* --------------- Track Oder -------- */}
                            <div className="my-2">

                                <div className="flex items-center">
                                    <span className='rounded-full bg-gray-400 flex items-center justify-center text-center p-1 m-1'>
                                        <LuCheck />
                                    </span>
                                    <span>Order Confirmed, <span className='text-[var(--text-color)]'>1 jan 2025</span></span>
                                </div>

                                <div className="border-1 inline mx-3.5">

                                </div>

                                <div className="flex items-center">
                                    <span className='rounded-full bg-gray-400 flex items-center justify-center text-center p-1 m-1'>
                                        <LuCheck />
                                    </span>
                                    <span>Out for delivery, <span className='text-[var(--text-color)]'>1 jan 2025</span></span>
                                </div>

                                <div className="border-1 inline mx-3.5">

                                </div>

                                <div className="flex items-center">
                                    <span className='rounded-full bg-gray-400 flex items-center justify-center text-center p-1 m-1'>
                                        <LuCheck />
                                    </span>
                                    <span>Delivered, <span className='text-[var(--text-color)]'>1 jan 2025</span></span>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="my-10">

                        <div className="bg-[var(--white-color)] shadow rounded p-2">
                            <h1>Delivery details</h1>
                            <div className="bg-[var(--bg3-color)] p-2 rounded my-2">
                                <p className='flex items-center space-x-2 text-[var(--text-color)] text-xs my-3'>
                                    <span>
                                        <IoHomeOutline />
                                    </span>
                                    <span>Home</span>
                                    <span className='truncate'>
                                        Lorem ipsum dolor sit amet.
                                    </span>
                                </p>
                                <hr />
                                <p className='flex items-center space-x-2 text-[var(--text-color)] text-xs my-3'>
                                    <span>
                                        <CiUser />
                                    </span>
                                    <span>Name of user</span>
                                    <span className='truncate'>
                                        Lorem ipsum dolor sit amet.
                                    </span>
                                </p>
                            </div>
                        </div>


                        <div className="bg-[var(--white-color)] shadow rounded p-2 my-3">
                            <h1>Price details</h1>
                            <div className="bg-[var(--bg3-color)] p-2 rounded m-5">
                                    <table className='flex justify-between'>
                                        <thead>
                                            <tr className='flex flex-col items-baseline gap-2 text-xs text-[var(--text-color)] font-light'>
                                                <th>Listing price</th>
                                                <th>Selling price</th>
                                                <th>Extra discount</th>
                                                <th>Delivery charge</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='flex flex-col items-baseline gap-2 text-xs text-[var(--text-color)] font-light'>
                                                <td>$1111</td>
                                                <td>$1111</td>
                                                <td>$1111</td>
                                                <td>$1111</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                   <div className="border border-[var(--text-color)] border-dashed my-5"></div>
                                   <p className='flex justify-between'>Total amount <span>$2345678</span></p>

                                   <div className="my-2 border p-2 rounded border-[var(--border-color)]">
                                    <p className='flex justify-between text-xs'>Pay by <span>Card/UPI/Cash</span></p>
                                   </div>

                                   <div className="my-5">
                                    <button className='bg-white p-2 rounded px-5 w-full cursor-pointer hover:bg-[var(--primary-color)] hover:text-white transition-colors duration-500 ease-in'>Downlaod Invoice</button>
                                   </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
