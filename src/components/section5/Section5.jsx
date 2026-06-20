import React from 'react'
import Head from './Head'
import Sec5Card from './Sec5Card'

const Section5 = (props) => {
  return (
    <div>
      <Head/>
      <Sec5Card sec5Card = {props.sec5Card}/>
    </div>
  )
}

export default Section5
