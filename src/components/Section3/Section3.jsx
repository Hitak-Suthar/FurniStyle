import React from 'react'
import Head from './Head'
import Card from './Card'

const Section3 = (props) => {
  return (
    <div>
      <Head/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20'>
        {props.sec3Cards.map((e,idx)=>{
        return <Card key={idx} img={e.img} title={e.title} desc={e.desc} price={e.price}/>
      })}
      </div>
       
    </div>
  )
}

export default Section3
