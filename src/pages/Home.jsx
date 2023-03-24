import React from 'react'
import Slider from '../components/Slider'
import { Service, LatestUpdate, FeaturedProject, Clients } from '../components'

const Home = () => {
  return (
    <div className='container'>
    <Slider/>
    <Service/>
    <LatestUpdate/>
    <FeaturedProject/>
    <Clients/>
    </div>
  )
}

export default Home