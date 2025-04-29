import React from 'react'
import Banner from './Banner'
import SliderCard from './SliderCard'
import SliderVideoLibrary from './SliderVideoLibrary'
import ExploringContent from './ExploringContent'

function Home() {
  return (
    <>
    <Banner/>

    {/* <SliderCard/> */}
    <SliderVideoLibrary/>       
    <ExploringContent/>
    </>

  )
}

export default Home