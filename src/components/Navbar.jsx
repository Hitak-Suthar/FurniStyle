import React, { useState } from 'react'
import logo from "../assets/Vector.png"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-200">
      <div className="w-[90%] mx-auto py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Furnistyle Logo" />
          <h3 className="font-bold text-xl md:text-2xl">
            Furnistyle
          </h3>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Navigation */}
        <div
          className={`
            flex flex-col md:flex-row items-center gap-4 md:gap-8 
            text-sm md:text-base font-medium
            absolute md:static top-16 left-0 w-full md:w-auto
            bg-gray-200 md:bg-transparent
            transition-all duration-300 p-2
            ${open ? "block" : "hidden md:flex"}
          `}
        >
          <a href="#" className="hover:text-gray-600 transition">Home</a>
          <a href="#" className="hover:text-gray-600 transition">About</a>
          <a href="#" className="hover:text-gray-600 transition">Articles</a>
          <a href="#" className="hover:text-gray-600 transition">About Us</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar