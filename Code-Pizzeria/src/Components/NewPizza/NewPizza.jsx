import {useState} from 'react'
import CardPizza from '../PizzaCard/CardPizza';
import AddPizzaForm from "./AddPizzaForm"
import DeletePizzaForm from './DeletePizzaForm';
import ModifyPizzaForm from './ModifyPizzaForm';

export const NewPizza = () => {
    const [showForm, setShowForm] = useState(false);

    const showPizzaForm = () => {
        setShowForm(true);
    };

    const hidePizzaForm = () => {
        setShowForm(false);
    };

  return (
    <div className='new-pizza'>
        <CardPizza/>
        <br />
        {showForm ? (
            <AddPizzaForm onHideForm={hidePizzaForm}/>
        ) : (
            <button className='submit-button' onClick={showPizzaForm}> Agregar una Pizza </button>
        )}
        {showForm ? (
            <DeletePizzaForm onHideForm={hidePizzaForm}/>
        ) : (
            <button className='submit-button' onClick={showPizzaForm}> Eliminar Pizza </button>
        )}
        {showForm ? (
            <ModifyPizzaForm onHideForm={hidePizzaForm}/>
        ) : (
            <button className='submit-button' onClick={showPizzaForm}> Modificar Pizza </button>
        )}
    </div>
  )
}
