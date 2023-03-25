import React from 'react'
import Slider from '../components/Slider'
import { LatestUpdate, FeaturedProject, Clients } from '../components'

const Home = () => {
  return (
    <div className='container'>
    <Slider/>
    <LatestUpdate/>
    <FeaturedProject/>
    <Clients/>
    </div>
  )
}

export default Home