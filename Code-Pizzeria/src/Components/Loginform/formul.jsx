import React, { useState } from 'react';

const LoginForm = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [error, setError] = useState('');

const validateEmail = (email) => {
    const emailR = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailR.test(email);
};

const validatePassword = (password) => {
    return password.length >= 6;
};

const handleEmailChange = (event) => {
    setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
    setError('Ingresa email valido');
    return;
    }

    if (!validatePassword(password)) {
    setError('La contraseña debe tener minimo 6 caracteres');
    return;
    }

    // Handle login logic here
};

return (
    <form onSubmit={handleSubmit}>
    <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
    </label>
    <br />
    <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
    </label>
    <br />
    <button type="submit">Log in</button>
    {error && <p className="error">{error}</p>}
    </form>
);
};

export default LoginForm;