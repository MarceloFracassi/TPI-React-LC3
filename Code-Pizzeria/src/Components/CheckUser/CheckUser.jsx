import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebasAapp from '../../firebase';
import {getAuth, onAuthStateChanged} from "firebase.auth"

const auth = getAuth(firebasAapp);
//POR AHORA NO HACE NADA
const CheckUser = () => {
  
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate();
  
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {          
        setUser(null);
    }
  });
    
  return (
    <>
      {user ? <Home/> : navigate('/login')}
    </>
  );
}

export default CheckUser;