import React from 'react'
import StatCard from './StatCard'
import RightImg from '../../assets/RightImg.png'

const StatCards = (props) => {
  return (
    <div className='flex flex-col justify-between'>
        <div className='flex justify-between'>
            {props.sec4Cards.map((e, idx)=>{
            return <StatCard key ={idx} num={e.num} text={e.text}/>
        })}
        </div>
        <img className='mt-10 rounded-lg' src={RightImg} alt="" />
    </div>
  )
}

export default StatCards
