import React from 'react'
import Banner from './Banner'
import SliderCard from './SliderCard'
import ExploringContent from './ExploringContent'
import SliderVideoLibrary from "./SliderVideoLibrary"
import CounterBox from './CounterBox'

function Home() {
  return (
    <>
      <Banner />
      <SliderCard />
      <SliderVideoLibrary/>
      <ExploringContent />
      <CounterBox/>
    </>

  )
}

export default Home