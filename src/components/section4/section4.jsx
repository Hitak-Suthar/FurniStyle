import React from 'react'
import LeftImg from '../../assets/LeftImg.png'

const Left = () => {
  return (
    <div className='w-full lg:w-[70%] mx-auto flex flex-col items-center lg:items-start text-center lg:text-left gap-10'>
      <h3 className='text-4xl font-bold mt-3'>
        Crafted by talented and high quality material
      </h3>

      <p className='text-gray-600 text-lg pt-1'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
      </p>

      <img
        src={LeftImg}
        alt=""
        className='mx-auto lg:mx-0'
      />
    </div>
  )
}

export default Left