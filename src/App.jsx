import { Container } from 'react-bootstrap'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import { Home, JuniorWing, Events, ContactUs, About, Career, AwardRecognition, NewExecutive, Login, Patient, Invoices, ConferenceandCertificates, Library, AssociateMembership, MyProfile, PresidentailAddress, JoinIsvir } from './pages'
import ConstitutionIsvir from './pages/constitutionisvir/ConstitutionIsvir'
import CenterExcellence from './pages/centerofexcellence/CenterExcellence';
import InternationalFellowship from './pages/internationalfellowship/InternationalFellowship'
import IRTrainingCenters from './pages/irtrainingcenter/IRTrainingCenters'
import InternationalGrant from './pages/internationalgrant/InternationalGrant'

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
          <Route path='join' element={<JoinIsvir />} />
          <Route path='for-patient' element={<Patient />} />
          <Route path='constitutionisvir' element={<ConstitutionIsvir />} />
          <Route path='president' element={<PresidentailAddress />} />
          <Route path='centerofexcellence' element={<CenterExcellence />} />
          <Route path='internationalfellowship' element={<InternationalFellowship />} />
          <Route path='irtrainingcenter' element={<IRTrainingCenters />} />
          <Route path='internationalgrant' element={<InternationalGrant />} />

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
