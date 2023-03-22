import React from 'react'
import Slider from '../components/Slider'
import { Service, LatestUpdate } from '../components'

const Home = () => {
  return (
    <div className='container'>
    <Slider/>
    <Service/>
    <LatestUpdate/>
    </div>
  )
}

export default Home