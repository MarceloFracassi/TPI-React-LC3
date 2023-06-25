import firebasAapp from "../../fireBase/firebase";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import './SignIn.css';

const auth = getAuth(firebasAapp);

const SignIn = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const firestore = getFirestore(firebasAapp);
  const navigate = useNavigate();

  const registerUser = async () => {
    const infoUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      rol,
      firstName,
      lastName,
      address
    );
    console.log(infoUser.user.uid);
    const docRef = doc(firestore, `Users/${infoUser.user.uid}`);
    setDoc(docRef, {
      correo: email,
      rol: rol,
      firstName: firstName,
      lastName: lastName,
      address: address,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
    navigate("/");
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
        </div>
        <div className="input-field">
          <select id="rol" value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="admin">admin</option>
            <option value="usuario">user</option>
          </select>
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
