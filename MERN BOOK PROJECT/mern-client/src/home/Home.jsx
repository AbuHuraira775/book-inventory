import React from 'react'
import Banner from '../components/Banner'
import { BestSellerBooks } from './BestSellerBooks'
import { FavBooks } from './FavBooks'
import { PromoBanner } from './PromoBanner'
import { OtherBooks } from './OtherBooks'
import { Review } from './Review'
import { Footer } from 'flowbite-react'

function Home() {
  return (
    <div className=''>
       <Banner />
       <BestSellerBooks/>
       <FavBooks />
       <PromoBanner />
       <OtherBooks />
       <Review />
    </div>
  )
}

export default Home