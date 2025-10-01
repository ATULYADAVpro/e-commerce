import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";


export default function HeaderInfo() {
  return (
    <div className='bg-[var(--bg1-color)] p-1 h-5 sm:h-10 flex items-center '>
      <div className="container flex justify-between">

        <div className="">
          <p className='text-[var(--text-color)] text-[7px] sm:text-sm'>Welcome to worldwide Megamart!</p>
        </div>

        <div className="flex">
          <p className='flex items-center space-x-1 text-[var(--light-color)] text-[6px] sm:text-sm px-2 border-r-1'>
            <span className='text-[var(--primary-color)] text-[8px] sm:text-xs'> <IoLocationOutline /></span>
            Deliver to <span className='ml-1 font-bold'> 423651</span>
          </p>

          <p className='flex items-center space-x-1 text-[var(--light-color)] text-[6px] sm:text-sm px-2 border-r-1'>
            <span className='text-[var(--primary-color)] mx-1 text-[8px] text-xs'> <TbTruckDelivery /></span>
            Track your order
          </p>

          <p className='flex items-center space-x-1 text-[var(--light-color)] sm:text-sm text-[6px] px-2'>
            <span className='text-[var(--primary-color)] mx-1 sm:text-xs text-[8px]'> <CiDiscount1 /></span>
            All Offers
          </p>

        </div>

      </div>
    </div>
  )
}
