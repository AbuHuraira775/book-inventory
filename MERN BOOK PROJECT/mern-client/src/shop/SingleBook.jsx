import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const SingleBook = () => {
    const {_id,bookTitle,imageUrl} = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imageUrl} alt="" className='h-96 mb-5' />
        <h2>{bookTitle}</h2>
    </div>
  )
}
