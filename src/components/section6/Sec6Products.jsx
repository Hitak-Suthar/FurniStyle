import React from 'react'
import Sec6Product from './Sec6Product'

const Sec6Products = ({ sec6Products }) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-6">

      {sec6Products?.map((e, idx) => (
        <Sec6Product
          key={idx}
          img={e.img}
          tips={e.tips}
          desc={e.desc}
          logo={e.logo}
          name={e.name}
        />
      ))}

    </div>
  )
}

export default Sec6Products