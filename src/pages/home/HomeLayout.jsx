import React, { useRef, useState, useEffect } from 'react';
import HeaderInfo from '../../components/HeaderInfo';
import Header from '../../components/Header';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from '../../components/Footer';
import { RiArrowDropRightLine } from "react-icons/ri";



export default function HomeLayout() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);
  const paginationRef = useRef(null);

  useEffect(() => {
    setNavigationReady(true);
  }, []);


  return (
    <div>

      {/* ------------- Header ------- */}
      <HeaderInfo />
      <Header />
      {/* ------------- Main Context -------- */}
      <main>
        {/* ------------ For Baner App ------------ */}
        <section className="container px-2 my-5 relative">
          {navigationReady && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay
              pagination={{
                el: paginationRef.current,
                clickable: true
              }}

              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current
              }}
              loop={true}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.params.pagination.el = paginationRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }}

              className="rounded-lg overflow-hidden"
            >
              <SwiperSlide><img src="/group.png" alt="Group" className="w-full h-auto" /></SwiperSlide>
              <SwiperSlide><div className="p-4">Slide 2</div></SwiperSlide>
              <SwiperSlide><div className="p-4">Slide 3</div></SwiperSlide>
            </Swiper>
          )}

          {/* -------------- Swiper Custom Buttons ------------- */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-[var(--bg3-color)] border-5 text-white p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            <MdOutlineKeyboardArrowLeft className="text-[var(--primary-color)] text-xl" />
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-[var(--bg3-color)]  border-5 text-white p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            <MdOutlineKeyboardArrowRight className="text-[var(--primary-color)] text-xl" />
          </button>

          {/* ---------- Pagination poins ------- */}
          <div
            ref={paginationRef}
            className="swiper-pagination absolute bottom-5 left-20 transform -translate-x-1/2 z-10 flex gap-2"
          />

        </section>

        {/* ------------ Best Deal on product ------ */}
        <section className='container mt-25'>
          <div className="flex justify-between">
            <p className='font-bold text-[var(--text-color)] p-0.5  text-xl inline border-b-4 rounded border-[var(--primary-color)]'>Grab the best deal on <span className='text-[var(--primary-color)]'>Smartphones</span> </p>
            <button className='text-[var(--heading-color)] flex items-center'>View All <RiArrowDropRightLine className='text-3xl text-[var(--primary-color)]' /></button>

          </div>
          <hr className='text-[var(--bg1-color)]' />
          <div className="my-10 flex gap-2">

            <div className="card w-[15rem] border rounded border-[var(--border-color)]">
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

        </section>

        {/* ------------ Shop From Top Categories ------ */}
        <section className="container mt-25">
          <div className='flex justify-between'>
            <p className="font-bold text-[var(--text-color)] p-0.5 text-xl inline border-b-4 rounded border-[var(--primary-color)]">
              Shop From <span className="text-[var(--primary-color)]">Top Categories</span>
            </p>
            <button className='text-[var(--heading-color)] flex items-center'>View All <RiArrowDropRightLine className='text-3xl text-[var(--primary-color)]' /></button>

          </div>
          <hr className="text-[var(--bg1-color)]" />
          <br />

          {/* categories img  */}
          <div className="flex ">
            <div className="text-center  w-fit m-2">
              <div class="bg-gray-200 w-25 h-25 rounded-full p-4 flex justify-center items-center">
                <img src="/image.png" alt="Category" className="max-w-full max-h-full object-contain" />
              </div>
              <p className='mt-4 text-xs'>Mobile</p>
            </div>
            <div className="text-center  w-fit m-2">
              <div class="bg-gray-200 w-25 h-25 rounded-full p-4 flex justify-center items-center">
                <img src="/image.png" alt="Category" className="max-w-full max-h-full object-contain" />
              </div>
              <p className='mt-4 text-xs'>Mobile</p>
            </div>
            <div className="text-center  w-fit m-2">
              <div class="bg-gray-200 w-25 h-25 rounded-full p-4 flex justify-center items-center">
                <img src="/image.png" alt="Category" className="max-w-full max-h-full object-contain" />
              </div>
              <p className='mt-4 text-xs'>Mobile</p>
            </div>


          </div>
        </section>

        {/* Top electronic brand */}
        {/* ------------ Shop From Top Categories ------ */}
        <section className="container mt-15">
          <div className='flex justify-between'>
            <p className="font-bold text-[var(--text-color)] p-0.5 text-xl inline border-b-4 rounded border-[var(--primary-color)]">
              Top <span className="text-[var(--primary-color)]">Electronic Brand</span>
            </p>
            <button className='text-[var(--heading-color)] flex items-center'>View All <RiArrowDropRightLine className='text-3xl text-[var(--primary-color)]' /></button>

          </div>
          <hr className="text-[var(--bg1-color)]" />
          <br />
          <div className="w-70 h-40 border text-center justify-center flex">
            <img className='class="max-w-full max-h-full object-contain"' src="/image.png" alt="" />
          </div>
        </section>

        {/* Accesori Essential */}
        <section className="container mt-25">
          <div className='flex justify-between'>
            <p className="font-bold text-[var(--text-color)] p-0.5 text-xl inline border-b-4 rounded border-[var(--primary-color)]">
              Accessories <span className="text-[var(--primary-color)]">Essential</span>
            </p>
            <button className='text-[var(--heading-color)] flex items-center'>View All <RiArrowDropRightLine className='text-3xl text-[var(--primary-color)]' /></button>
          </div>
          <hr className="text-[var(--bg1-color)]" />
          <br />

          {/* categories img  */}
          <div className="flex ">
            <div className="text-center  w-fit m-2">
              <div class="bg-[var(--bg1-color)] w-45.5 h-40 rounded p-4 flex justify-center items-center">
                <img src="/image.png" alt="Category" className="max-w-full max-h-full object-contain" />
              </div>
              <p className=' mt-2 text-[0.5rem]'>Daily Essentials</p>
              <p className='mt-1 text-xs'>Mobile</p>
            </div>

          </div>
        </section>
      </main>
      {/* --------- Footer ------ */}
      <Footer />

    </div>
  );
}
