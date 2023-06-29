import firebasAapp from "../../fireBase/firebase";
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import './SignIn.css';

const firestore = getFirestore(firebasAapp);
const auth = getAuth(firebasAapp);

const SignIn = () => {
  const [error, setError] = useState('');
  const { isDarkMode } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    const infoUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      firstName,
      lastName,
      address
    );
    console.log(infoUser.user.uid);
    const docRef = doc(firestore, `Users/${infoUser.user.uid}`);
    setDoc(docRef, {
      correo: email,
      rol: "cliente", // Establece el rol como "cliente"
      firstName: firstName,
      lastName: lastName,
      address: address,
      password: password
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Ingresa un email válido');
      return;
    }

    if (!validatePassword(password)) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    registerUser()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError('Error al registrar el usuario');
        console.log(error);
      });
  };

  const validateEmail = (email) => {
    const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailR.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };


  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="All">
        <div className="container">
          <h1 className="register">Registrarse</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>
            <div className="input-field">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Ingrese su nombre"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Ingrese su apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Ingrese su dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {error && <p className="error-message">{error}</p>}
            </div>
            <button type="submit" className="submit-button">
              Enviar Registro
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
