import { Container } from 'react-bootstrap'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import { Home, JuniorWing, Events, ContactUs, About, Career, AwardRecognition, NewExecutive, Login, Patient, Invoices, ConferenceandCertificates, Library, AssociateMembership, MyProfile } from './pages'

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


            <Route path='user' >
              <Route path='invoices' element={<Invoices />} />
              <Route path='conference' element={<ConferenceandCertificates />} />
              <Route path='library' element={<Library />} />
              <Route path='associative-members' element={<AssociateMembership />} />
              <Route path='user-profile' element={<MyProfile />} />
            </Route>

        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
} 1

export default App
