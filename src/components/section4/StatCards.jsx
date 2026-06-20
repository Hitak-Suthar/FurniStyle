import React from 'react'
import StatCard from './StatCard'
import RightImg from '../../assets/RightImg.png'

const StatCards = (props) => {
  return (
    <div className="flex flex-col gap-8">

      <div className="grid grid-cols-3 gap-6">
        {props.sec4Cards.map((e, idx) => (
          <StatCard
            key={idx}
            num={e.num}
            text={e.text}
          />
        ))}
      </div>

      <img
        src={RightImg}
        alt=""
        className="w-full h-[450px] object-cover rounded-xl"
      />

    </div>
  )
}

export default StatCards