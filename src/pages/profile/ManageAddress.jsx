import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { MdMapsHomeWork } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

export default function ManageAddress() {
  const [btnActive, setBtnActive] = useState(false);
  const [edit, setEdit] = useState(false)

  return (
    <div className='m-5'>
      <h1 className='text-2xl'>Manage Addresses</h1>

      {/* ================ ============ */}

      <div className=" m-2 p-2">
        {
          !btnActive &&
          (
            <button onClick={() => setBtnActive((prev => !prev))} className='border w-full text-[var(--primary-color)] cursor-pointer text-start px-3 flex items-center space-x-5 p-2'>
              <span> <FaPlus /> </span> <span>ADD ADDRESSES</span>
            </button>
          )
        }
      </div>


      {/* ========== Form Data ========= */}
      {
        btnActive && (
          <div className="bg-[var(--bg1-color)] border border-[var(--primary-color)] m-2 rounded p-4 flex items-center justify-center w-full">
            <form className='w-full'>
              <div className="relative">
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
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs
                                      sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-color)]
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
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.6rem]
                                      sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-color)]
                                      peer-focus:-top-2 peer-focus:text-[0.6rem] sm:peer-focus:text-xs peer-focus:text-[var(--primary-color)]"
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
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs
                                      sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-color)]
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

                <div className="space-x-5 mt-5 w-full">
                  <button className='p-2 bg-[var(--primary-color)] px-20 rounded text-white cursor-pointer'>Save</button>
                  <button onClick={() => setBtnActive((prev => !prev))} className=' m-2 text-[var(--primary-color)] cursor-pointer'>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        )
      }


      <div className="my-5">

        {/* ============= Edit Form Enable ====== */}

        {
          !edit && (
            <div className="mx-2 border-gray-400 border p-5">
              <div className="flex items-center justify-between">
                <h1 className='text-[var(--text-color)] bg-gray-100 w-fit p-1 rounded'>Home</h1>
                <span className='cursor-pointer'>
                  <CiMenuKebab />
                </span>
              </div>
              <h3 className='mt-2'>Atul usdfkg dskfhfdh <span>024387348393</span></h3>
              <p className='text-xs mt-2'>Lorem, ipsum dolor.lorem5 Lorem ipsum dolor sit amet.</p>
            </div>
          )
        }

        {
          edit && (
            <div className="bg-[var(--bg1-color)] m-2 rounded p-4 flex items-center justify-center w-full">
            <form className='w-full'>
              <div className="relative">
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
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs
                                      sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-color)]
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
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.6rem]
                                      sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-color)]
                                      peer-focus:-top-2 peer-focus:text-[0.6rem] sm:peer-focus:text-xs peer-focus:text-[var(--primary-color)]"
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
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs
                                      sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--text-color)]
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

                <div className="space-x-5 mt-5 w-full">
                  <button className='p-2 bg-[var(--primary-color)] px-20 rounded text-white cursor-pointer'>Save</button>
                  <button onClick={() => setEdit((prev => !prev))} className=' m-2 text-[var(--primary-color)] cursor-pointer'>Cancel</button>
                </div>
              </div>
            </form>
          </div>
          )
        }

      </div>




    </div>
  )
}
