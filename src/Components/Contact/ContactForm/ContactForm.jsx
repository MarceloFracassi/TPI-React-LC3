import React from 'react'
import './ContactForm.css'

export const ContactForm = () => {
  return (
    <>
    <form class="form">
        <p class="title">Contactanos</p>
        <p class="message">¡Nos encantaría saber de ti! Contáctanos para cualquier consulta o comentario.</p>
        <div class="flex">
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
        <button class="submit">Enviar</button>
        <p class="signin">Ya estas registrado? <a href="#">Registrate aqui!</a> </p>
    </form>
    </>
  )
}
