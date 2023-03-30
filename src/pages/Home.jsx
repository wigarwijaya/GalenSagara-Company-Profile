import React, { useEffect } from 'react'
import Slider from '../components/Slider'
import { LatestUpdate, FeaturedProject, Clients } from '../components'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='container relative -top-[60px]'>
    <Slider/>
    <LatestUpdate/>
    <FeaturedProject/>
    <Clients/>
    </div>
  )
}

export default Home