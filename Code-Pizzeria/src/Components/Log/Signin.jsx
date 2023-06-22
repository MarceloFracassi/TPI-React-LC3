import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Signin.css';
import { ThemeContext } from '../Context/ThemeContext';



function Signin() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    <div className="custom-form-container">
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="custom-form">
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label className="custom-label">Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
              className="custom-input"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label className="custom-label">Dirección</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Adress"
              defaultValue=""
              className="custom-input"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label className="custom-label">Ciudad</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              required
              className="custom-input"
            />
            <Form.Control.Feedback type="invalid">
              Ingresa una ciudad.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label className="custom-label">País</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country"
              required
              className="custom-input"
            />
            <Form.Control.Feedback type="invalid">
              Ingresa un país.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label className="custom-label">Correo electrónico</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              required
              className="custom-input"
            />
            <Form.Control.Feedback type="invalid">
              Ingresa un correo válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Check
              required
              label="Acepto los términos y condiciones"
              feedback="Debe estar de acuerdo antes de enviar."
              feedbackType="invalid"
            />
          </Form.Group>
        </Row>
        <Button type="submit" className="custom-button">Registrarse</Button>
      </Form>
      <br></br>
    </div>
    </div>
  );
}

export default Signin;
