import React from 'react'

const StatCard = ({ num, text }) => {
  return (
    <div className="text-center sm:text-left">

      <h1 className="text-3xl sm:text-4xl font-bold mt-3">
        {num}
      </h1>

      <p className="text-gray-600 text-base sm:text-lg font-semibold mt-3">
        {text}
      </p>

    </div>
  )
}

export default StatCard