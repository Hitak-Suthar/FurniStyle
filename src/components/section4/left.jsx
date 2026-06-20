import React from 'react'
import LeftImg from '../../assets/LeftImg.png'

const Left = () => {
  return (
    <div className='w-full md:w-[70%] mx-auto flex flex-col gap-10 text-center md:text-left'>
      <h3 className='text-3xl md:text-4xl font-bold mt-3'>
        Crafted by talented and high quality material
      </h3>

      <p className='text-gray-600 text-base md:text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ipsum
        voluptas in sapiente? Assumenda, ullam rem? Deleniti voluptates fuga
        numquam consequuntur quae iste dolor. Nihil eligendi saepe
        reprehenderit similique accusamus.
      </p>

      <img
        src={LeftImg}
        alt=""
        className='w-full max-w-md mx-auto md:mx-0'
      />
    </div>
  )
}

export default Left