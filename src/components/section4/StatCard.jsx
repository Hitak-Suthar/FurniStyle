import React from 'react'

const StatCard = ({ num, text }) => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold">
        {num}
      </h1>

      <p className="text-gray-600 font-semibold mt-2">
        {text}
      </p>
    </div>
  )
}

export default StatCard