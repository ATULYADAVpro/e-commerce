import React from 'react'
import HeaderInfo from '../../components/HeaderInfo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function OrderLayout() {
    return (
        <div className='bg-[var(--bg3-color)]'>
            <HeaderInfo />
            <Header />
            <div className="container  my-10 text-[var(--text-color)] ">
                <div className="grid grid-cols-3 items-center justify-center text-center shadow bg-[var(--bg1-color)] border-[var(--text-color)] rounded p-1">
                  <div className="flex items-center space-x-1.5">
                      <img src="/image.png" alt="" className='object-cover object-center w-12' />
                      <p className='line-clamp-1 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt aut ea! Eligendi at placeat quam. Qui ipsa veritatis exercitationem.</p>
                  </div>
                    <p>$5000</p>
                    <p>Delivary Status</p>
                </div>

            </div>
            <Footer />
        </div>
    )
}
