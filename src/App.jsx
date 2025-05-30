import { Container } from 'react-bootstrap'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import { Home, JuniorWing, Events, ContactUs, About, Career, AwardRecognition, NewExecutive, Login, Patient, Invoices, ConferenceandCertificates, Library, AssociativeMembership } from './pages'

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
          <Route path='awardrecognition' element={<AwardRecognition />} />
          <Route path='newexecutive' element={<NewExecutive />} />
          <Route path='login' element={<Login />} />
          <Route path='for-patient' element={<Patient />} />
          <Route path='invoices' element={<Invoices />} />
          <Route path='conference' element={<ConferenceandCertificates />} />
          <Route path='library' element={<Library />} />
          <Route path='associative' element={<AssociativeMembership />} />

          <Route path="/library" element={<div><h1>Library Page</h1></div>} />
          <Route path="/membership" element={<div><h1>Membership Payments Page</h1></div>} />
          <Route path="/conference" element={<div><h1>Conference & Certificates Page</h1></div>} />
          <Route path="/logout" element={<div><h1>Logged out</h1></div>} />
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
} 1

export default App
