import { useState } from "react";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import firebaseApp from "../../firebase/firebase";

const firestore = getFirestore(firebaseApp);

const ModifyPizzaForm = () => {
  const [pizzaName, setPizzaName] = useState("");
  const [pizzaDescription, setPizzaDescription] = useState("");
  const [pizzaPrice, setPizzaPrice] = useState("");
  const [pizzaId, setPizzaId] = useState("");

  const modifyPizzaInMenu = async (pizzaData) => {
    try {
      const pizzaRef = doc(firestore, "Menu", pizzaData.id);
      await updateDoc(pizzaRef, {
        id: pizzaData.id,
        product: pizzaData.product,
        description: pizzaData.description,
        price: pizzaData.price,
      });
      console.log("Pizza modificada en el menú");
    } catch (error) {
      console.error("Error al modificar la pizza en el menú: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pizzaData = {
      id: pizzaId,
      product: pizzaName,
      description: pizzaDescription,
      price: pizzaPrice,
    };

    modifyPizzaInMenu(pizzaData)
      .then(() => {
        console.log("Pizza modificada correctamente");
        alert("Vuelva a recargar la página para ver los cambios");
        setPizzaId("");
        setPizzaName("");
        setPizzaDescription("");
        setPizzaPrice("");
      })
      .catch((error) => {
        console.error("Error al modificar la pizza en el menú: ", error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <p>MODIFICACIÓN DE PRODUCTOS</p>
        <div className="input-field">
          <input
            type="text"
            name="pizzaId"
            id="pizzaId"
            placeholder="Ingrese el Id de la pizza a modificar"
            value={pizzaId}
            onChange={(e) => setPizzaId(e.target.value)}
          />
        </div>
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
          Modificar Pizza en el Menú
        </button>
      </form>
    </>
  );
};

export default ModifyPizzaForm;