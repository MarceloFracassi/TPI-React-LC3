import React, { useState } from 'react';

const LoginForm = (props) => {
const initialValues = {
    email: '',
    password: ''
    };

const [values, setValues] = useState(initialValues);

const handleImputChange = e => {
    const {name, value} = e.target;
        setValues({...values, [name]: value});
    console.log(name, value);};
// const [error, setError] = useState('');

// const validateEmail = (email) => {
//     const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailR.test(email);
// };

// const validatePassword = (password) => {
//     return password.length >= 6;
// };

// const handleEmailChange = (event) => {
//     setEmail(event.target.value);
// };

// const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
// };

const handleSubmit = e => {
        e.preventDefault();
        props.addNewUser(values);
    };
//     if (!validateEmail(email)) {
//     setError('Ingresa email valido');
//     return;
//     }

//     if (!validatePassword(password)) {
//     setError('La contraseña debe tener minimo 6 caracteres');
//     return;
//     }

// };

return (

    <form onSubmit={handleSubmit} >
    <div className='form_inputs'>
            <input 
            type="text"
            name="email"
            placeholder="ingrese su email" 
            onChange={handleImputChange}
            />
            </div>
            <div className='form_inputs'>
                <input 
                type="password"
                name='password' 
                placeholder='ingrese su contraseña'
                onChange={handleImputChange}
                />
            </div>
            <button className='button-form'>registrarse</button>
    </form>

);

} 
export default LoginForm;