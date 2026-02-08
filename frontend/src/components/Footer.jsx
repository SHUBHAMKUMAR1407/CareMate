import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>CareMate is India's leading digital healthcare platform. We bridge the gap between patients and top-tier medical specialists, ensuring quality healthcare is accessible to every Indian family.</p>
        </div>

        {}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {}
        <div>
          <p className='text-xl font-medium mb-5 text-primary'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-98765-43210</li>
            <li>support@caremate.in</li>
          </ul>
        </div>

      </div>

      {}
      <div>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center text-gray-500'>Copyright © 2026 CareMate India - Caring for You.</p>
      </div>

    </div>
  )
}

export default Footer