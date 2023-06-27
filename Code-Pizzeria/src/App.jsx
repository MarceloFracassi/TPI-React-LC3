import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { History } from './Components/History/History';
import { ThemeProvider } from './Components/Context/ThemeContext';
import ThemeButton from './Components/Context/ThemeButton';
import Footer from './Components/Footer/Footer';
import Login from './Components/Log/Login';
import Signin from './Components/Log/Signin';
import Cart from './Components/Cart/Cart';
import Menu from './Components/Menu/Menu';
import ContactForm from './Components/ContactForm/ContactForm';
import { ShoppingCartProvider } from './Components/Context/ShoppingCartContext';
import HelloUser from './Components/HelloUser/HelloUser';

function App() {

  return (
    <ThemeProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Navbar />
          <HelloUser/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<History />} />
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
          <Footer/>
          <ThemeButton />
        </BrowserRouter>
      </ShoppingCartProvider>
    </ThemeProvider>
  );
}

export default App;
