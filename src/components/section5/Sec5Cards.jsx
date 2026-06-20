import React from 'react'

const Sec5Cards = ({ img, text, logo, name }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">

      {/* IMAGE (top-left aligned) */}
      <div className="flex justify-start">
        <img
          src={img}
          alt="customer"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* TEXT UNDER IMAGE */}
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
        {text}
      </p>

      {/* FOOTER */}
      <div className="flex items-center gap-3 mt-4">
        <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
        <h1 className="text-base sm:text-lg font-bold">{name}</h1>
      </div>

    </div>
  )
}

export default Sec5Cards