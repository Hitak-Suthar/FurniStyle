import React from 'react'
import Sec6Left from './Sec6Left'
import Sec6Products from './Sec6Products'

const Section6 = ({ sec6Products }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 p-6 sm:p-10 lg:p-20">

      <Sec6Left />

      <Sec6Products sec6Products={sec6Products} />

    </div>
  )
}

export default Section6