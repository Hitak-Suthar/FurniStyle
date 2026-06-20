import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-[90%] mx-auto border-t border-gray-300"></div>

      <div className="w-[90%] mx-auto py-8 md:py-10 flex flex-col md:flex-row justify-between gap-10">
        <FooterLeft />
        <FooterRight />
      </div>
    </footer>
  )
}

export default Footer