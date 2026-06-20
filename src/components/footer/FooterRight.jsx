import React from 'react'

const FooterRight = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full lg:w-auto'>
      <div>
        <h1 className='text-xl md:text-2xl font-bold'>Products</h1>

        <ul className='text-gray-400 text-sm md:text-lg font-semibold mt-3 flex flex-col gap-2 md:gap-3'>
          <li className='hover:text-gray-600 transition-colors duration-200'>New Arrivals</li>
          <li className='hover:text-gray-600 transition-colors duration-200'>Best Selling</li>
          <li className='hover:text-gray-600 transition-colors duration-200'>Home Decor</li>
          <li className='hover:text-gray-600 transition-colors duration-200'>Kitchen Set</li>
        </ul>
      </div>

      <div>
        <h1 className='text-xl md:text-2xl font-bold'>Services</h1>

        <ul className='text-gray-400 text-sm md:text-lg font-semibold mt-3 flex flex-col gap-2 md:gap-3'>
          <li className='hover:text-gray-600 transition-colors duration-200'>Catalog</li>
          <li className='hover:text-gray-600 transition-colors duration-200'>Blog</li>
          <li className='hover:text-gray-600 transition-colors duration-200'>FAQ</li>
          <li className='hover:text-gray-600 transition-colors duration-200'>Pricing</li>
        </ul>
      </div>

      <div>
        <h1 className='text-xl md:text-2xl font-bold'>Follow Us</h1>

        <ul className='text-gray-400 text-sm md:text-lg font-semibold mt-3 flex flex-col gap-2 md:gap-3'>
          <li className='hover:text-gray-600 transition-colors duration-200'>
            Facebook
          </li>

          <li className='hover:text-gray-600 transition-colors duration-200'>
            <a
              href="https://www.instagram.com/madhav_s._2307?igsh=aWRlMmNycmtwMXA5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterRight