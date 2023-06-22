import firebasAapp from "../../firebase";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore, collection, doc, setDoc} from "firebase/firestore";

const auth = getAuth(firebasAapp);


const Login = () => {
  //logica para crear usuario en firebase
  const [registered, setRegistered]=useState(false);
  const firestore = getFirestore(firebasAapp);

  const registerUser=async(email, password, rol) => {
    const infoUser= await createUserWithEmailAndPassword(auth, email, password, rol).then((firebaseUser)=>{return firebaseUser;}); 
    console.log(infoUser.user.uid); 
    const docRef= doc(firestore, `Users/${infoUser.user.uid}`);
    setDoc(docRef, {correo:email, rol:rol});
  }
//handleSubmit toma los datos que se ponen en el form (se podría hacer con useEstate como en formulario.jsx)
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;
    console.log(email, password, rol);
    if(registered) {
      //register
    registerUser(email, password, rol);
    } else {
      //login
      signInWithEmailAndPassword(auth, email, password);
      }
      registerUser(email, password, rol); 

  }

  return (
  
      <div>
        <h1>{registered ? "Registrate gato": "Logueate gato"}</h1>
        <form onSubmit={handleSubmit} >
    <label className='form_inputs'>
            <input 
            type="text"
            name="email"
            id="email"
            placeholder="ingrese su email" 
            />
            </label>
            <label className='form_inputs'>
                <input 
                type="password"
                name='password'
                id="password"
                placeholder='ingrese su contraseña'
                />
            </label>
            <label className='form_inputs'>
              <select id="rol">
                <option value="admin">admin</option>
                <option value="usuario">user</option>
              </select>
            </label>
    <input type="submit" value={registered ?"registrar": "logear"} />
    </form>
    
    <button onClick={()=> setRegistered(!registered)}>
      {registered ? "Ya tengo cuenta" : "Registrar cuenta"}
      </button>
      
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