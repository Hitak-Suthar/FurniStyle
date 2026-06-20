import React from 'react'
import Question from './Question'
import Card from './Card'

const Section2 = (props) => {
  return (
    <div>
      <Question />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 lg:px-16 items-stretch">
        {props.sec2Crad.map((e, idx) => (
          <Card key={idx} h1={e.title} p={e.desc} />
        ))}
      </div>

    </div>
  )
}

export default Section2