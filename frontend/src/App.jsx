import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Add from './Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo/>
      <Navbar/>
      <br />
      <br />
      <Routes>
      {/* <Route path = '/' element = {<Login/>}></Route> */}
      <Route path = '/home' element = {<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>
    
      
     </Routes>
    </>
  )
}

export default App
