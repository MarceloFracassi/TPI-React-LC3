import firebasAapp from "../../fireBase/firebase";
import { useState } from "react";
import './Login.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const auth = getAuth(firebasAapp);

const Login = () => {
  const [error, setError] = useState('');
  const { isDarkMode } = useContext(ThemeContext);
  const [registered, setRegistered] = useState(false);
  const firestore = getFirestore(firebasAapp);
  const navigate = useNavigate();

  const registerUser = async (email, password ) => {
    const infoUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log(infoUser.user.uid);
    const docRef = doc(firestore, `Users/${infoUser.user.uid}`);
    setDoc(docRef, { correo: email });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (!validateEmail(email)) {
      setError('Ingresa un email válido');
      return;
    }

    if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (registered) {
      registerUser(email, password);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
    navigate('/');
  };

  const handleToggleRegistration = () => {
    setRegistered(!registered);
    navigate('/signin');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="All">
        <div className="login-container">
          <h1>{registered ? "" : "Ingreso a Sesion"}</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className='form_inputs'>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Ingrese su email"
              /> 
            </label>
            <label className='form_inputs'>
              <input
                type="password"
                name='password'
                id="password"
                placeholder='Ingrese su contraseña'
              />
            </label>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">
              Iniciar Sesión
            </button>
          </form>
          <button className="toggle-registration" onClick={handleToggleRegistration}>NO TENGO CUENTA</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

    /*
  cierre de sesión:
  importar 
  import firebasAapp from "../../firebase";
  import {getAuth} from "firebase/auth";
  const auth = getAuth(firebaseApp);
        <button onClick={()=> singOut(auth)}>cerrar sesión</button> 
  */




