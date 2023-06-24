import './ContactForm.css'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={`form-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <form className="form">
                <p className="title">Contactanos</p>
                <p className="message">¡Nos encantaría saber de ti! Contáctanos para cualquier consulta o comentario.</p>
                <div className="flex">
                    <label>
                        <input required="" placeholder="" type="text" className="input"/>
                        <span>Nombre</span>
                    </label>

                    <label>
                        <input required="" placeholder="" type="text" className="input"/>
                        <span>Apellido</span>
                    </label>
                </div>  
                
                <label>
                    <input required="" placeholder="" type="email" className="input"/>
                    <span>Email</span>
                </label> 
            
                <label>
                    <input required="" placeholder="" type="number" className="input"/>
                    <span>Telefono</span>
                </label>

                <label>
                    <input required="" placeholder="" type="text" className="input"/>
                    <span>Asunto</span>
                </label>

                <label>
                    <textarea name="" id="" cols="30" rows="10" className="input">
                        <input required="" placeholder="" type="text" />
                    </textarea>
                    <span>Mensaje</span>
                </label>
                <button className="submit">Enviar</button>
                <p className="signin">Ya estás registrado? <a href="signin">Registrate aquí!</a> </p>
            </form>
        </div>
    );
}

export default ContactForm;

