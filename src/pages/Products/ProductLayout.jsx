import React from 'react'
import HeaderInfo from '../../components/HeaderInfo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


export default function ProductLayout() {

    return (
        <div>
            <HeaderInfo />
            <Header />
            {/* --------- Sidebar Filter ------ */}
            <div className="container mt-2 flex h-[36rem] ">
                {/* --------- -------- */}
                <div className="sm:w-[10rem] md:w-[12rem] h-full  py-2 bg-[var(--bg3-color)] rounded ">
                    <div className="m-2">
                        <button className='bg-[var(--primary-color)] rounded text-white m-2 p-1 px-5 hover:bg-[var(--light-color)] cursor-pointer'>Clear</button>
                    </div>
                    <hr className='border-[var(--border-color)] my-1' />
                    <div className="m-2 text-[var(--text-color)] grid grid-cols-2">
                        <div className="gap-1 flex items-center">
                            <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                            <label htmlFor="new" className='text[(var(--heading-color)]'>New</label>
                        </div>
                        <div className="gap-1 flex items-center">
                            <input type="checkbox" className="w-3.5 h-3.5 rounded" />
                            <label htmlFor="offer" className='text[(var(--heading-color)]'>Offer</label>
                        </div>
                    </div>

                    <hr className='border-[var(--border-color)] my-1' />
                    <div className="m-2 ">
                        <h1>Accessories</h1>
                        <div className="mt-2">
                            <ul className='text-sm text-[var(--text-color)]'>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> Cover</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> Lense</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> Skin</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> Glass</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> Privacy Glass</li>
                            </ul>
                        </div>
                    </div>

                    <hr className='border-[var(--border-color)] my-1' />
                    <div className="m-2 ">
                        <h1>Other</h1>
                        <div className="mt-2">
                            <ul className=' text-[var(--text-color)] text-sm'>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> Old Phone</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> New Phone</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> Ear Phone</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> Bird</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> Speaker</li>
                            </ul>
                        </div>
                    </div>

                    <hr className='border-[var(--border-color)] my-1' />
                    <div className="m-2">
                        <h1>Price Set</h1>
                        <div className="text-[var(--text-color)]">
                            <ul className='text-sm'>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> 100 - 500</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> 500 - 100</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> 1000 - 2000</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> 2000 - 5000</li>
                                <li className='flex items-center gap-2'><input className='w-3.5 h-3.5 rounded' type="checkbox" name="" id="" /> all</li>
                            </ul>
                        </div>
                    </div>

                </div>


                {/* --------Products list ------- */}
                <div className="w-full h-full overflow-y-auto grid sm:grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] lg: border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] lg: border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] lg: border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] lg: border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                    <div className="card m-2 md:w-[12rem] md:h-[20rem] border rounded border-[var(--border-color)]">
                        {/* image container  */}
                        <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                            <img src="/image.png" alt="" />
                            <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                <span>56%</span>
                                <br />
                                <span>Off</span>
                            </div>
                        </div>
                        {/* Content Container  */}
                        <div className="bg-white m-2">
                            <h3 className='my-1'>Galaxy M13 (4GB | 64 GB )</h3>
                            <p className='my-2'>₹10499 <s> ₹14999</s></p>
                            <hr className='text-[var(--bg1-color)] my-1' />
                            <p className='text-green-700'>Save - ₹4500</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
