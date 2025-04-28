import { Container } from 'react-bootstrap'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/home/HomeLayout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route path='/' element= {<HomeLayout/>}></Route>
      </>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App
