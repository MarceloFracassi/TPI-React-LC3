import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

const Counter = () => {
const [Counter, setCounter] = useState(0);

useEffect(() => {
    // Este efecto se ejecutará cada vez que el contador cambie
    console.log('El contador ha cambiado:', Counter);
}, [Counter]);

const plus1 = () => {
    setCounter(Counter + 1);
};
const less1 = () => {
    if (Counter > 0) {
    setCounter(Counter - 1);
}
};

return (
    <div>
    <p>Counter: {Counter}</p>
    <Button variant="dark" onClick={plus1}>Dark</Button>
    <Button variant="light" onClick={less1}>Light</Button>
    </div>
);
};

export default Counter;
