import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>

        <Route path='*' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
