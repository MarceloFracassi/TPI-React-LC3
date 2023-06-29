
import React, { useEffect, useState, useContext } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import CardPizza from './CardPizza';

import { ThemeContext } from '../Context/ThemeContext';

const LogicCard = () => {
  const [data, setData] = useState([]);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Menu');
        const querySnapshot = await getDocs(queryCollection);
        const newData = querySnapshot.docs.map((menu) => ({
          id: menu.id,
          ...menu.data()
        }));
        setData(newData);
      } catch (error) {
        console.log('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="logiCard-container">
        {data.map((product) => (
          <CardPizza key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default LogicCard;
