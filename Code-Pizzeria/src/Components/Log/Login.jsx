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
  const { isDarkMode } = useContext(ThemeContext);
  const [registered, setRegistered] = useState(false);
  const firestore = getFirestore(firebasAapp);
  const navigate = useNavigate();

  const registerUser = async (email, password, rol) => {
    const infoUser = await createUserWithEmailAndPassword(auth, email, password, rol);
    console.log(infoUser.user.uid);
    const docRef = doc(firestore, `Users/${infoUser.user.uid}`);
    setDoc(docRef, { correo: email, rol: rol });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;
    console.log(email, password, rol);
    if (registered) {
      registerUser(email, password, rol);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
    navigate('/');
  };

  const handleToggleRegistration = () => {
    setRegistered(!registered);
    navigate('/signin');
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
        <label className='form_inputs'>
          <select id="rol">
            <option value="admin">admin</option>
            <option value="usuario">user</option>
          </select>
        </label>
        <button type="submit">
          {registered ? "Enviar Registro" : "Iniciar Sesión"}
        </button>
      </form>
      <button className="toggle-registration" onClick={handleToggleRegistration}>
        {registered ? "" : "NO TENGO CUENTA"}
      </button>
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

