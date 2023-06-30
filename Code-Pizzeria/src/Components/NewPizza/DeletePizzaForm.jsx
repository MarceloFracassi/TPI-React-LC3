import { useState } from "react";
import { getFirestore, deleteDoc, doc } from "firebase/firestore";
import firebasAapp from "../../fireBase/firebase";

const firestore = getFirestore(firebasAapp);

const DeletePizzaForm = () => {
  const [pizzaId, setPizzaId] = useState("");

  const deletePizza = async () => {
    try {
      await deleteDoc(doc(firestore, "Menu", pizzaId));
      console.log("Pizza eliminada del menú: ", pizzaId);
      setPizzaId("");
      alert("Pizza eliminada correctamente. Recargue para ver los cambios.")
    } catch (error) {
      console.error("Error al eliminar la pizza del menú: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    deletePizza();
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <p>PIZZA A ELIMINAR</p>
      <div className="input-field">
        <input
          type="text"
          name="pizzaId"
          id="pizzaId"
          placeholder="Ingrese el ID de la pizza a eliminar"
          value={pizzaId}
          onChange={(e) => setPizzaId(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-button">
        Eliminar Pizza del Menú
      </button>
    </form>
  );
};

export default DeletePizzaForm;