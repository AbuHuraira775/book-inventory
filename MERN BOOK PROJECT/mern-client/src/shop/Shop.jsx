import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

function Shop() {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/all-books').then(res=>res.json()).then(data=>setBooks(data))
  },[])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center '>All Books Are Here</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 grid-cols-1 '>
        {
          books.map(book=>{
            return(
          <Card className='p-3'>
            <img src={book.imageUrl} alt="" className='h-60 '/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-white">
            <p>
              {book.bookTitle}
            </p>
          </h5>
          <p className="font-normal text-gray-700 text-gray-400">
              <p>THis is is siasdf adsfa adsf    sdf asdf  sdfsdf  asd fsdddg</p>
          </p>

          <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
        </Card>
        )})
        }
      </div>
    </div>

  )
}

export default Shop