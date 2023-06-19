import { useEffect, useState } from 'react'
import  CardPizza  from './CardPizza'
import pizzaContainer from '../../assets/pizza-container.json'
import './LogicCard.css';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';


export const LogicCard = () => {
    const [data, setData] = useState([]);
    const { isDarkMode } = useContext(ThemeContext);

    useEffect (() => {
      setData(pizzaContainer.Menu)
}, [])

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="logiCard-container">
        {data.map((product) => (<CardPizza
            key={product.id}
                {...product}            
        />))}
        </div>
    </div>
  )
}
