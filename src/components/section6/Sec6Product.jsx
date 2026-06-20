import React from 'react'

const Sec6Product = ({ img, tips, desc, logo, name }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-200 rounded-xl">

      {/* IMAGE */}
      {img ? (
        <img
          src={img}
          alt=""
          className="w-full sm:w-40 h-32 object-cover rounded-lg"
        />
      ) : (
        <div className="w-full sm:w-40 h-32 bg-gray-300 rounded-lg flex items-center justify-center text-xs text-gray-500">
          No Image
        </div>
      )}

      {/* TEXT */}
      <div className="flex flex-col gap-2 min-w-0">

        <p className="text-sm text-gray-700">
          {tips || "No tips provided"}
        </p>

        <h1 className="text-base sm:text-lg font-semibold text-gray-600">
          {desc || "No description"}
        </h1>

        <div className="flex items-center gap-2">
          {logo ? (
            <img className="w-6 h-6" src={logo} alt="" />
          ) : (
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
          )}

          <h1 className="text-sm font-bold">
            {name || "Unknown"}
          </h1>
        </div>

      </div>

    </div>
  )
}

export default Sec6Product