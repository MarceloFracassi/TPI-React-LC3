import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import "./HelloUser.css"
// Importar Firebase
import firebaseApp from "../../fireBase/firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const HelloUser = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // render o no render

  useEffect(() => {
    const getUser = async (uid) => {
      const docRef = doc(firestore, `Users/${uid}`);
      const docEncryption = await getDoc(docRef);
      return docEncryption.data().firstName;
    };

    const setUserWithFirebaseName = async (userFirebase) => {
      const firstName = await getUser(userFirebase.uid);
      const userData = {
        uid: userFirebase.uid,
        firstName: firstName,
      };
      setUser(userData);
      setIsVisible(true); // render cuando se inicia sesion
      console.log("userData final", userData);
    };

    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        if (!user) {
          setUserWithFirebaseName(userFirebase);
        }
      } else {
        setUser(null);
        setIsVisible(false); // no render si no hay usuario
      }
    });

    return () => unsubscribe(); // Limpia
  }, []);


  const onLogoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        setIsVisible(false); // sale componente cuando cierra
        navigate("/login");
        console.log("Se cerró la sesión correctamente");
      })
      .catch((error) => {
        console.error("Error al cerrar la sesión:", error);
      });
  };

  if (!isVisible) {
    return null; // No render
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    <div className='UserName'>
      <h4>Hola {user?.firstName}👋🏼</h4>
      <Button className="button" variant="danger" onClick={onLogoutHandler}>
        Cerrar sesión
      </Button>
      </div>
    </div>
  );
};

export default HelloUser;
