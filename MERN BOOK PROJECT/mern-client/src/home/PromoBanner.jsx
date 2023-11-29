import React from 'react'
import { Link } from 'react-router-dom'
import awardBook from '../assets/banner-books/awardbooks.png'

export const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>2023 National Book Awards For Fiction Shortlists</h2>
                <Link to='/shop' className="mt-12 block"><button className='px-5 py-2 bg-blue-700 text-white font-semibold px-5 rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
            </div>
        <div>
            <img src={awardBook} alt="" className='w-96'/>
        </div>
    </div>

    </div>
  )
}
