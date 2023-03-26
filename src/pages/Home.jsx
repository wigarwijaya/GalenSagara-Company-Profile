import React, { useEffect } from 'react'
import Slider from '../components/Slider'
import { LatestUpdate, FeaturedProject, Clients } from '../components'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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