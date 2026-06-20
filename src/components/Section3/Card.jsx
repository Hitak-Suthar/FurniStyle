import React from 'react'

const Card = ({ img, title, desc, price }) => {
  return (
    <div className="w-full flex flex-col bg-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">

      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-60 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          {title}
        </h1>

        <p className="text-sm sm:text-base text-gray-600">
          {desc}
        </p>

        <h1 className="text-lg sm:text-xl font-bold">
          {price}
        </h1>
      </div>

    </div>
  )
}

export default Card