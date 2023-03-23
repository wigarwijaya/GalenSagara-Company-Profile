import React from 'react'
import Slider from '../components/Slider'
import { Service, LatestUpdate, FeaturedProject } from '../components'

const Home = () => {
  return (
    <div className='container'>
    <Slider/>
    <Service/>
    <LatestUpdate/>
    <FeaturedProject/>
    </div>
  )
}

export default Home