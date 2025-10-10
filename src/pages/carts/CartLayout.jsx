import React from 'react'
import Footer from '../../components/Footer'
import Carts from './Carts'
import HeaderInfo from '../../components/HeaderInfo'
import Header from '../../components/Header'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";



export default function CartLayout() {
    return (
        <div>
            <HeaderInfo />
            <Header />
            {/* ----------- Main Carts body --------- */}
            <section className='container my-5'>
                {/* ------- Form Nav and Cart ---- */}
                <div className="">
                    <ul className='grid grid-cols-3 items-center bg-[var(--bg3-color)] p-2 text-center rounded shadow-b'>
                        <li className='border-2 border-r-0 border-l-0 border-t-0 border-[var(--primary-color)]'>1. Cart</li>
                        <li>2. Shopping Details</li>
                        <li>3. Payment Details</li>
                    </ul>
                </div>

                {false && (
                    <div className="my-5 space-y-5 grid md:grid-cols-[auto_350px] m-2 gap-4 ">
                        {/* -------- cart increse and decrese ------ */}
                        <div className="">
                            <table className="table-auto w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="px-4 py-2">Product Name</th>
                                        <th className="px-4 py-2">Quantity</th>
                                        <th className="px-4 py-2">Total</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-[var(--border-color)] border-b my-1">
                                        <td className="px-4 py-2 flex items-center space-x-5  ">
                                            <img src="/image.png" alt="" className='w-10' />
                                            <p className='line-clamp-2 min-w-20'>Lorem ipsum dolor sit amet.</p>
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex w-fit items-center text-center gap-2 border border-gray-300 rounded px-2 py-1">
                                                <button className="text-gray-400 hover:text-[var(--primary-color)] hover:text-2xl cursor-pointer">-</button>
                                                <input
                                                    className="w-10 text-center border-none bg-transparent"
                                                    type="number"
                                                    value={2}
                                                    readOnly
                                                />
                                                <button className="text-gray-400  hover:text-[var(--primary-color)] hover:text-2xl cursor-pointer ">+</button>
                                            </div>
                                        </td>

                                        <td className="px-4 py-2">$2349</td>
                                        <td className="px-4 py-2">
                                            <RiDeleteBin5Line className='hover:text-red-700 cursor-pointer' />
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                        {/* ---------- Total Amount section ------ Order summary */}
                        <div className="bg-[var(--bg1-color)] space-y-2 p-2 rounded h-fit">
                            <h1>Order Summary</h1>
                            <hr className='border-[var(--border-color)] border-2' />
                            <h3>Apply Coupon</h3>
                            <div className="w-full  flex  gap-2 justify-between">
                                <input className='border border-[var(--text-color)] p-1 w-full rounded' type="text" name="" id="" placeholder='coupon code' />
                                <button className='rounded p-1 px-4 bg-[var(--secondry-color)] hover:bg-[var(--primary-color)] cursor-pointer'>add</button>
                            </div>
                            <hr className='border-[var(--border-color)] border-2' />
                            <div className="">
                                <p className='justify-between flex'>Cart Subtotal: <span>$500</span></p>
                                <p className='justify-between flex'>Shipping Charge: <span>$0</span></p>
                            </div>
                            <hr className='border-[var(--border-color)] border-2' />
                            <div className="m-2">
                                <p className='justify-between flex'>Total Amount: <span>$50989</span></p>
                                <button className='m-2 bg-[var(--primary-color)] p-1 w-full rounded text-white tracking-wide cursor-pointer hover:bg-[var(--text-color)]'>Proccess to Buy</button>
                            </div>
                        </div>
                    </div>
                )
                }


                {/* ------------------- Shpping details ---------------- */}

                <div className="grid md:grid-cols-2">

                    <div className="m-2 w-70 md:100">
                        <div className=" p-1 rounded">
                            <p className=' text-[var(--text-color)] my-2'>Click on Old Address</p>
                            <div className="flex space-x-2">

                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="oldAddress" className="hidden peer" />
                                    <label htmlFor="oldAddress"
                                        className=" border p-5 cursor-pointer px-1 rounded border-[var(--text-color)] items-center text-sm text-gray-700 peer-checked:border-[var(--text-color)] peer-checked:text-[var(--primary-color)] pe transition-colors">
                                        <p>Full Name : Lorem ipsum dolor sit amet.</p>
                                        <p>Address : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae!</p>
                                        <p>mobile : 1234567890</p>
                                        <p>Type of Address : Home</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[var(--bg1-color)] m-2 rounded p-4 flex items-center justify-center w-fit">
                        <form>
                            <div className="relative w-70 sm:w-100">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="peer w-full bg-transparent border rounded 
                                focus:border-[var(--primary-color)] text-sm outline-none 
                                placeholder-transparent pt-5 pb-2 px-2"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-2 -top-2 text-xs text-gray-500 bg-[var(--bg1-color)] 
                                px-1 rounded transition-all duration-300
                                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-color)]
                                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--primary-color)]"
                                >
                                    Full Name
                                </label>
                            </div>

                            <div className="relative my-5">
                                <input
                                    type="text"
                                    id="address"
                                    placeholder=" "
                                    className="peer w-full bg-transparent border rounded 
                                focus:border-[var(--primary-color)] text-sm outline-none 
                                placeholder-transparent pt-5 pb-2 px-2"
                                />
                                <label
                                    htmlFor="address"
                                    className="absolute left-2 -top-2 text-xs text-gray-500 bg-[var(--bg1-color)] 
                                px-1 rounded transition-all duration-300
                                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-color)]
                                peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--primary-color)]"
                                >
                                    Flat / House no. / Building name
                                </label>
                            </div>

                            <div className="relative w-full my-5">
                                <input
                                    type="tel"
                                    id="mobile"
                                    inputMode="numeric"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    placeholder=" "
                                    className="peer w-full bg-transparent border rounded 
                                            focus:border-[var(--primary-color)] text-sm outline-none 
                                            placeholder-transparent pt-5 pb-2 px-2"
                                />
                                <label
                                    htmlFor="mobile"
                                    className="absolute left-2 -top-2 text-xs text-gray-500 bg-[var(--bg1-color)] 
                                            px-1 rounded transition-all duration-300
                                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-color)]
                                            peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[var(--primary-color)]"
                                >
                                    10-digit mobile number
                                </label>
                            </div>

                            {/* check box  */}

                            <div className="">
                                <p className='text-xs text-[var(--text-color)] my-2'>Type of work</p>
                                <div className="flex space-x-5">

                                    <div className="flex items-center space-x-2">
                                        <input type="checkbox" id="checkme" className="hidden peer" />
                                        <label htmlFor="checkme"
                                            className="cursor-pointer flex gap-2 text-center border px-1 rounded border-[var(--text-color)] items-center text-sm text-gray-700 peer-checked:border-[var(--text-color)] peer-checked:text-[var(--primary-color)] pe transition-colors">
                                            <FaHome /> Home
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input type="checkbox" id="work" className="hidden peer" />
                                        <label htmlFor="work"
                                            className="cursor-pointer text-sm flex gap-2 text-center  border px-1 rounded border-[var(--text-color)] items-center text-gray-700  peer-checked:border-[var(--text-color)] peer-checked:text-[var(--primary-color)] transition-colors">
                                            <MdMapsHomeWork /> Work
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>



                    <div className="m-5 w-70">
                        <button className='bg-[var(--primary-color)] p-1 w-full rounded text-white tracking-wide cursor-pointer hover:bg-[var(--text-color)]'>Proccess to Payment</button>
                    </div>


                </div>





            </section>
            <Footer />
        </div>
    )
}
