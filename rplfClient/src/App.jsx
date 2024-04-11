import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import { Route, Routes } from 'react-router'
import Page from './Components/Page/Page'
import NumbersBlock from './Blocks/Numbers/NumberBlock'
import Slider from './Blocks/Slider/Slider'
import CardList from './Blocks/Text Slider/CardList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route path='/:title' element={<Page/>}/>
    </Routes>
  )
}

export default App
