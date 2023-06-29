import firebasAapp from "../../fireBase/firebase";
import { useState } from "react";
import './Login.css';
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

  const registerUser = async (email, password) => {
    try {
      // Crea un nuevo usuario en Firebase con el email y contraseña proporcionados
      await createUserWithEmailAndPassword(auth, email, password);
      // Si el registro es exitoso, redirige al usuario a la página principal
      navigate('/');
    } catch (error) {
      // Si ocurre un error durante el registro, puedes mostrar un mensaje de error genérico
      setError('Error al registrar usuario. Inténtelo de nuevo más tarde.');
    }
  };
  

  const handleSubmit = async (e) => {
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
  
    try {
      // Intenta iniciar sesión con el email y contraseña proporcionados
      await signInWithEmailAndPassword(auth, email, password);
      // Si el inicio de sesión es exitoso, redirige al usuario a la página principal
      navigate('/');
    } catch (error) {
      // Si ocurre un error durante el inicio de sesión, puedes mostrar un mensaje de error específico
      // Por ejemplo, si el código de error es 'auth/user-not-found', puedes indicar que el usuario no está registrado
      if (error.code === 'auth/user-not-found') {
        setError('Usuario no registrado. Regístrese a continuación.');
      } else {
        // Si ocurre otro tipo de error, puedes mostrar un mensaje genérico
        setError('Error al iniciar sesión. Inténtelo de nuevo más tarde.');
      }
    }
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
          <h1>{registered ? "" : "Iniciá sesión"}</h1>
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
          <button className="toggle-registration" onClick={handleToggleRegistration}>
            NO TENGO CUENTA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
