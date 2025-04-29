import React from 'react'
import Header from '../components/layouts/Header'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default HomeLayout