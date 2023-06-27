import React from "react";
import "./Menu.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import CardPizza from "../PizzaCard/CardPizza";
import { CardPizzaAdmin } from "../PizzaCard/CardPizzaAdmin";
//Import Firebase
import firebaseApp from "../../fireBase/firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Menu = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const [user, setUser] = useState(null);

  const getRol = async (uid) => {
    const docRef = doc(firestore, `Users/${uid}`);
    const docEncryption = await getDoc(docRef);
    return docEncryption.data().rol;
  }

  const setUserWithFirebaseRol = (userFirebase) => {
    getRol(userFirebase.uid).then((rol) => {
      const userData = {
        uid: userFirebase.uid,
        email: userFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData final", userData);
    }); 
  }
  
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      if (!user) {
        setUserWithFirebaseRol(userFirebase);
      }
    } else {
      setUser(null);
    }
  })

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div>
        <div className="menu-container">
          <h2>Explora nuestras deliciosas pizzas</h2>
          <p className="line1"></p>
          <br></br>
        </div>
        {user?.rol === "admin" ? <CardPizzaAdmin/> : <CardPizza/>}
      </div>
      <br></br>
    </div>
  );
};

export default Menu;
