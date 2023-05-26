
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import NavbarPizza from "./Components/Nav/Navbar";
import Menu from './Components/Menu/Menu';
import History from './Components/History/History';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/cart';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavbarPizza />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} /> 
      </Routes>
    </BrowserRouter>
      {/* <NavbarPizza/> */}
      
      {/* <Home/> */}
    </>
  )
}

export default App;
