import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import LoginForm from './component/LoginForm'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <LoginForm></LoginForm>
    <Footer></Footer>
      
    </>
  )
}

export default App
