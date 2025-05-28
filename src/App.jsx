import { Container } from 'react-bootstrap'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import { Home, JuniorWing, Events, ContactUs, About, Career, Profile, AwardRecognition, Executive } from './pages'




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='juniorwing' element={<JuniorWing />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='events' element={<Events />} />
          <Route path='aboutus' element={<About />} />
          <Route path='career' element={<Career />} />
          <Route path='profile' element={<Profile />} />
          <Route path='awardrecognition' element={<AwardRecognition />} />
          <Route path='newexecutive' element={<Executive />} />
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
