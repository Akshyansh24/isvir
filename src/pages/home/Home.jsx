import React from 'react'
import Banner from './Banner'
import SliderCard from './SliderCard'
import ExploringContent from './ExploringContent'
import CounterBox from './CounterBox'
import SliderVideoLibrary from './SliderVideoLibrary'

function Home() {
  return (
    <>
      <Banner />
      <SliderCard />
      <ExploringContent />
      <SliderVideoLibrary/>
      <CounterBox/>
    </>

  )
}

export default Home