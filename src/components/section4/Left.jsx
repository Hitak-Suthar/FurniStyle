import React from 'react'
import LeftImg from '../../assets/LeftImg.png'

const Left = () => {
  return (
    <div className="h-full flex flex-col">

      <h3 className="text-3xl md:text-4xl font-bold">
        Crafted by talented and high quality material
      </h3>

      <p className="text-gray-600 text-base md:text-lg leading-8 mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed ipsum
        voluptas in sapiente? Assumenda, ullam rem? Deleniti voluptates fuga
        numquam consequuntur quae iste dolor. Nihil eligendi saepe
        reprehenderit similique accusamus.
      </p>

      <div className="mt-auto">
        <img
          src={LeftImg}
          alt=""
          className="w-full rounded-xl object-cover"
        />
      </div>

    </div>
  )
}

export default Left
