
import './App.css'
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar'
import {History} from './Components/History/History';
import { ThemeProvider } from './Components/Context/ThemeContext';
import ThemeButton from './Components/Context/ThemeButton';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <ThemeProvider>
      <ThemeButton/>
      <Navbar/>
      <Home/>
      <History/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;
