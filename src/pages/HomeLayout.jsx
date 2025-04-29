import React from 'react'
import Header from '../components/layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layouts/Footer'

function HomeLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default HomeLayout