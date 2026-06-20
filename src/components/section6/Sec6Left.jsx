import React from 'react'
import Sec6ImgLeft from '../../assets/Sec6ImgLeft.jpg'

const Sec6Left = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-4">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
        The best furniture comes from Lalasia
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <img
        src={Sec6ImgLeft}
        alt="furniture"
        className="w-full h-64 sm:h-80 md:h-[380px] object-cover rounded-xl"
      />

    </div>
  )
}

export default Sec6Left