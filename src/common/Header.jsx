import React, { useState } from 'react'
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
export default function Header({setmobileNav,mobileNav}) {

  
  
  return (
    <header className='max-w-full sticky top-0 z-99 bg-white' id='header'>
      <section className='max-w-[1320px]  shadow-sm p-2 flex mx-auto items-center lg:justify-between justify-between border-b'>
        <div className='flex items-center gap-3'>
          <div className='lg:hidden block'>
            <TiThMenu className='text-xl' onClick={()=>setmobileNav(true)} />
          </div>
          <Link to={'/'}>
            <figure className=''>
              <img className='' width={130} src="https://ecom-kappa-umber-19.vercel.app/assets/logo-DL0RA_g2.png" alt="" />
            </figure>
          </Link>
        </div>
        <Link to={'/cart'} className=''>
          <div className='relative '>
            <GrCart className='text-2xl' />
            <div className='bg-[#fdc8f4] absolute top-[-50%] end-[-20%] w-5 h-5 flex justify-center items-center rounded-[50%]'>
              <p className='text-sm text-[#8f307f]'>0</p>
            </div>
          </div>
          <h3 className='font-semibold'>Cart</h3>
        </Link>
      </section>
    </header>
  )
}


