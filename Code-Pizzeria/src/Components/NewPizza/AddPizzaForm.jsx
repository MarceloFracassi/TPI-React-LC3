import { useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import firebasAapp from "../../fireBase/firebase";


const firestore = getFirestore(firebasAapp);

const AddPizzaForm = () => {
  const [pizzaName, setPizzaName] = useState("");
  const [pizzaDescription, setPizzaDescription] = useState("");
  const [pizzaPrice, setPizzaPrice] = useState("");

  const addPizzaToMenu = async (pizzaData) => {
    try {
      const docRef = await addDoc(collection(firestore, "Menu"), pizzaData);
      console.log("Pizza agregada al menú con el ID: ", docRef.id);
    } catch (error) {
      console.error("Error al agregar la pizza al menú: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pizzaData = {
      product: pizzaName,
      description: pizzaDescription,
      price: pizzaPrice,
      imagen: "https://firebasestorage.googleapis.com/v0/b/code-pizzeria-fb.appspot.com/o/mozzarella.jpg?alt=media&token=f80e9491-e013-40b1-b4aa-ac60f621ed33",
    };

    addPizzaToMenu(pizzaData)
      .then(() => {
        console.log("Pizza agregada correctamente");
        alert("Vuelva a recargar la página para ver los cambios")
        setPizzaName("");
        setPizzaDescription("");
        setPizzaPrice("");
      })
      .catch((error) => {
        console.error("Error al agregar la pizza al menú: ", error);
      });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <p>
        AGREGUE NUEVA PIZZA
      </p>
      <div className="input-field">
        <input
          type="text"
          name="pizzaName"
          id="pizzaName"
          placeholder="Ingrese el nombre de la pizza"
          value={pizzaName}
          onChange={(e) => setPizzaName(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          name="pizzaDescription"
          id="pizzaDescription"
          placeholder="Ingrese la descripción de la pizza"
          value={pizzaDescription}
          onChange={(e) => setPizzaDescription(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="number"
          name="pizzaPrice"
          id="pizzaPrice"
          placeholder="Ingrese el precio de la pizza"
          value={pizzaPrice}
          onChange={(e) => setPizzaPrice(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-button">
        Agregar Pizza al Menú
      </button>
    </form>
    </>
  );
};

export default AddPizzaForm;