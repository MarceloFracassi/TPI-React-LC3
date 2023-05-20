
import './App.css'
import { Home } from './Components/Home/Home';
import NavbarPizza from "./Components/Nav/Navbar";
import CardPizza from './Components/PizzaCard/Card';

function App() {

  return (
    <>
      <NavbarPizza/>
      {/*<CardPizza/>*/}
      <Home/>
    </>
  )
}

export default App;
