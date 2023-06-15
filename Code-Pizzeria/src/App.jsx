
import './App.css'
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar'
import {History} from './Components/History/History';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Log/Login';
import Signin from './Components/Log/Signin';
import Cart from './Components/Cart/Cart';
import Menu from './Components/Menu/Menu'


function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<History />} />
        <Route path="/" element={<Home/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
