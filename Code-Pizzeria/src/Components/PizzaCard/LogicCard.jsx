import { useEffect, useState } from 'react'
import  CardPizza  from './CardPizza'
import pizzaContainer from '../../assets/pizza-container.json'
import './LogicCard.css';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';


export const LogicCard = () => {
    const [data, setData] = useState([]);
    const { isDarkMode } = useContext(ThemeContext);

    // const resultFetch = async () => {  
    //   const fetchData = await fetch ("http://localhost:5000/Menu");
    //   const json = await fetchData.json();
    //   setData(json.result);
    //   console.log(setData)
    // }

    useEffect (() => {
      setData(pizzaContainer.Menu)
}, [])

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="logiCard-container">
        {data.map((d) => (<CardPizza
            key={d.id}
            name={d.product}
            description={d.description}
            prize={d.prize}
            image={d.image}             
        />))}
        </div>
    </div>
  )
}
