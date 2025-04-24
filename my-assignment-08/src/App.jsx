import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl mx-15 mt-10 border-y-2'>Navbar</h1>
      <Outlet></Outlet>
      <h1 className='text-3xl mx-15 border-y-2'>Footer</h1>

      
      
    </>
  )
}

export default App
