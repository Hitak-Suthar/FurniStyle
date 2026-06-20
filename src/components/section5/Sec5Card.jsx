import React from 'react'
import Sec5Cards from './Sec5Cards'

const Sec5Card = ({ sec5Card }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 md:px-20 lg:px-32 pb-10">

      {sec5Card.map((e, idx) => (
        <Sec5Cards
          key={idx}
          img={e.img}
          text={e.text}
          logo={e.logo}
          name={e.name}
        />
      ))}

    </div>
  )
}

export default Sec5Card