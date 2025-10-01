import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";


export default function Footer() {
    return (
        <div className="bg-[var(--primary-color)] p-5 relative mt-12">
            <img className="absolute right-0 top-0 z-0" src="/circle.png" alt="" />

            <div className="container grid grid-cols-3 relative z-10">
                {/* logo and contact details */}
                <div>
                    <h1 className="font-extrabold my-5 text-[var(--white-color)] text-sm sm:text-2xl">MegaMart</h1>
                    <p className="text-white">Contact Us</p>
                    <a href="" className="w-fit flex gap-1 items-center text-[var(--white-color)] my-5">
                        <FaWhatsapp className="text-2xl" />
                        <p className="font-extralight">+91 809876543</p>
                    </a>
                    <a href="" className="w-fit flex gap-1 items-center text-[var(--white-color)] my-5">
                        <MdOutlineLocalPhone className="text-2xl" />
                        <p className="font-extralight">+91 809876543</p>
                    </a>
                    <p className="text-white my-2">Download Coming Soon.</p>
                    <img className="w-[200px]" src="/download.png" alt="" />
                </div>




                <div>
                    <h1 className="border-b-2 leading-10 text-white w-fit border-white">Most Popular Categories</h1>
                    <ul className="font-light text-xs leading-6 list-disc list-inside text-[var(--white-color)]">

                        <li>Staples</li>
                        <li>Beverages</li>
                        <li> Personal Care</li>
                        <li> Home Care</li>
                        <li>Baby Care</li>
                        <li>Vegetables & Fruits</li>
                        <li>Snacks & Foods</li>
                        <li>Baby Care</li>
                        <li> Dairy & Bakery</li>
                    </ul>
                </div>
                <div>
                    <h1 className="border-b-2 leading-10 text-white w-fit border-white">Customer Services</h1>
                    <ul className="font-light text-xs leading-6 list-disc list-inside text-[var(--white-color)]">






                        <li> About Us</li>
                        <li> Terms & Conditions</li>
                        <li>  FAQ</li>
                        <li> Privacy Policy</li>
                        <li> E-waste Policy</li>
                        <li> Cancellation & Return Policy</li>

                    </ul>
                </div>
            </div>
        </div>

    )
}
