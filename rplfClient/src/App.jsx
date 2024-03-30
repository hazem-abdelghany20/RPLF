import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import Page from './Components/Page/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route  path='/Home' element={<Home/>} />
      <Route path='/:title' element={<Page/>}/>
    </Routes>
  )
}

export default App
