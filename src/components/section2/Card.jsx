import React from 'react'

const Card = ({ h1, p }) => {
  return (
    <div className="h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 bg-gray-200 text-center rounded-2xl shadow-sm">
      
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
        {h1}
      </h1>

      <p className="mt-3 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
        {p}
      </p>

    </div>
  )
}

export default Card