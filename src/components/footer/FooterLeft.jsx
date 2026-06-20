import React from 'react'
import logo from '../../assets/Vector.png'

const FooterLeft = () => {
  return (
    <div className="w-full lg:max-w-md">
      <img src={logo} alt="Logo" />

      <p className="text-gray-600 text-base md:text-lg font-semibold mt-3 w-full">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Blanditiis, voluptatum dolorum.
      </p>
    </div>
  )
}

export default FooterLeft