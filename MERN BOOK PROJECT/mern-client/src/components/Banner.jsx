import React from 'react'
import BannerCards from '../home/BannerCards'

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>

        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side  */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-sung text-black'>
                    Buy and Sell your Books
                    <span className='text-blue-700'>for the best price</span>    
                </h2>
                <p className='md:w-4/5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     A ipsam temporibus ut eligendi debitis iste. Alias doloremque 
                     dolor nihil, doloribus repellendus placeat consequatur tenetur 
                     hic voluptatem a vero omnis nostrum.
                </p> 
                <div>
                    <input type="search" name='search' id='search' placeholder='Search a Book'
                    className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>
                        Search
                    </button>
                </div>
            </div>

            {/* right side  */}
            <div>
                <BannerCards />
            </div>
        </div>
    </div>
  )
}

export default Banner