import { Container } from 'react-bootstrap'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import { Home, JuniorWing, Events, ContactUs } from './pages'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='juniorwing' element={<JuniorWing />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='events' element={<Events />} />

        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
