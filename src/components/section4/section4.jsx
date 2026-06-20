import React from 'react'
import Left from './Left.jsx'
import StatCards from './StatCards'

const Section4 = (props) => {
  return (
    <section className="w-[90%] mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Left />
        <StatCards sec4Cards={props.sec4Cards} />
      </div>
    </section>
  )
}

export default Section4