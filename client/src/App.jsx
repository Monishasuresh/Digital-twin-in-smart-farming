import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Register from './Components/Register/Register'
import Login from './Components/Login/login'

// Import react router dom
import{
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

//Create a router
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  }, 
  {
    path: '/dashboard',
    element: <div><Dashboard/></div>
  }
])



function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
