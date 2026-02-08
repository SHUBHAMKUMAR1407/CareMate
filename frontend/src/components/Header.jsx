import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-[#5974b6] to-[#4c7abb] rounded-3xl px-6 md:px-10 lg:px-20 shadow-2xl overflow-hidden'>

      {}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight'>Dedicated Care for <br /> Your Family's Health</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p>Connect with India's most trusted medical professionals. <br className='hidden sm:block' /> Experienced doctors, personalized care.</p>
        </div>
        <a className='flex items-center gap-2 bg-secondary px-8 py-3 rounded-full text-white font-semibold text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 shadow-lg' href="#speciality">
          Book Appointment
          <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>

    </div>
  )
}

export default Header