import React from 'react'
import mainImg from '../assets/Rectangle 2.png'

const Section1 = () => {
  return (
    <div className='flex flex-col items-center px-4 py-10'>
        <div className='mt-20 pb-20'>
            <h3 className='text-2xl md:text-4xl font-bold text-center'>Discover Your Style with Our Furniture Collection</h3>
            <p className='text-sm md:text-xl text-gray-500 text-center mt-2'>Explore our curated selection of furniture that combines style and comfort to transform your living space.</p>
        </div>
        <img className='w-full max-w-7xl rounded-xl' src={mainImg} alt="" />
    </div>
  )
}

export default Section1
