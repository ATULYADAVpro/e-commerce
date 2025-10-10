import React from 'react'
import HeaderInfo from '../../components/HeaderInfo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductsGallry from './ProductsGallry'
import { SwiperSlide, Swiper } from 'swiper/react'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { Autoplay, Navigation } from 'swiper/modules'


export default function ProductView() {


    return (
        <div>
            <HeaderInfo />
            <Header />
            <div className="container mt-2">
                <div className="grid lg:grid-cols-2 justify-center w-full ">
                    <div className="w-full  py-2 rounded ">
                        <ProductsGallry />
                    </div>
                    <div className="w-full ">
                        <ul className='grid grid-cols-2 text-center m-2'>
                            <li className='border-b-[var(--primary-color)] border-2 border-r-0 border-l-0 border-t-0 transition-all'>Main</li>
                            <li className=''>Detail</li>
                        </ul>

                        {/* -------------- Main info --------- */}

                        <div className="m-2">
                            <h1>Product Title: Iphone 25 wala</h1>
                            <h2>Product Price:</h2>
                            <hr className='border-[var(--border-color)] my-2' />
                            <div className="">
                                <p className='line-clamp-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis mollitia temporibus dolor omnis. Commodi officia voluptatibus nesciunt architecto dignissimos quam culpa reprehenderit quisquam error tempora earum nulla minus optio vero, corporis ab! Laborum, optio. In ex itaque porro deserunt temporibus aliquam pariatur laboriosam aspernatur. Rerum, explicabo maxime! Dicta, molestias distinctio voluptatem nulla harum velit atque facere, voluptate at et vero illum dolor, dolore soluta debitis nostrum mollitia sit labore totam esse amet. Commodi repudiandae harum sint assumenda atque exercitationem excepturi veritatis, nobis vitae aliquam enim minus, facere, ut fuga illum praesentium obcaecati saepe. Reiciendis distinctio quod aliquid rerum totam. Ipsum.</p>
                            </div>
                            <div className="flex space-x-5 justify-end">
                                <button className='m-1 bg-[var(--primary-color)] px-5 py-2 rounded text-white  hover:bg-[var(--secondry-color)] cursor-pointer'>Buy</button>
                                <button className='m-1 bg-[var(--text-color)] px-5 py-2 rounded text-white  hover:bg-[var(--light-color)] cursor-pointer'>Add</button>
                            </div>
                        </div>

                        {/* --------- Detail ------- */}
                        <div className="hidden">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique magni quaerat nulla laborum ex neque. Alias dolorem aspernatur fuga sunt quaerat temporibus laboriosam repellat, ad similique, aliquid sit! Magnam, deleniti.</p>
                        </div>





                    </div>
                </div>
                <hr className='border-[var(--border-color)] my-2' />
                {/* related product  */}

                {/* --------- Silder - */}
                <section className='container'>
                    <div className="flex justify-between">
                        <p className='font-bold text-[var(--text-color)] p-0.5  md:text-sm sm:text-xs lg:text-xl inline border-b-4 rounded border-[var(--primary-color)]'>Similar <span className='text-[var(--primary-color)]'>Product</span> </p>
                        <button className='text-[var(--heading-color)] flex items-center'>View All <RiArrowDropRightLine className='text-3xl text-[var(--primary-color)]' /></button>

                    </div>
                    <hr className='text-[var(--bg1-color)]' />
                    <div className="mt-5">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            autoplay
                            spaceBetween={10}
                            slidesPerView={2}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                            }}
                        >
                            {[...Array(6)].map((_, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="card border rounded border-[var(--border-color)]"
                                >
                                    {/* Image Container */}
                                    <div className="bg-[var(--bg1-color)] text-center flex justify-center items-center relative">
                                        <img src="/image.png" alt="" />
                                        <div className="text-center rounded-bl-xl absolute right-0 top-0 text-white p-2 rounded-tr-xl bg-[var(--primary-color)]">
                                            <span>56%</span>
                                            <br />
                                            <span>Off</span>
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="bg-white m-2">
                                        <h3 className="my-1 text-sm md:text-base lg:text-lg">
                                            Galaxy M13 (4GB | 64 GB )
                                        </h3>
                                        <p className="my-2 text-sm md:text-base">
                                            ₹10499 <s> ₹14999</s>
                                        </p>

                                        <div className="flex space-x-5 justify-end">
                                            <button className='m-1 bg-[var(--primary-color)] px-3 py-1 rounded text-white  hover:bg-[var(--secondry-color)] cursor-pointer'>Buy</button>
                                            <button className='m-1 bg-[var(--text-color)] px-3 py-1 rounded text-white  hover:bg-[var(--light-color)] cursor-pointer'>Add</button>
                                        </div>

                                        <hr className="text-[var(--bg1-color)] my-1" />
                                        <p className="text-green-700 text-sm md:text-base">
                                            Save - ₹4500
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    )
}
