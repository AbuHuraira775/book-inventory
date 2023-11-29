import React, { useEffect, useState } from 'react'
import { BookCards } from '../components/BookCards'

export const BestSellerBooks = () => {

    const [books,setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/all-books').then(res=>res.json()).then(data=>setBooks(data))
    },[])

  return (
    <div>
        <BookCards books={books} headline="Best Seller Books"/>
    </div>
  )
}
