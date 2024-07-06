import { useNavigate } from 'react-router-dom';
import styles from './PedidosActuales.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

function PedidosActuales() {
    const [comboName, setComboName] = useState('');
    const [comboDescripcion, setComboDecripcion] = useState('');
    const [comboPrecio, setComboPrecio] = useState(0);
  const navigate = useNavigate();

  async function addCombo() {
    if (!comboName.trim()) {
        console.error("The category name cannot be empty");
        return;
    }

    try {
        const docRef = doc(firestoreDB, "Combos", comboName); 
        await setDoc(docRef, {
            combo: comboName,
            descripcion: comboDescripcion, 
            precio: comboPrecio,
            disponible: true,
            imgRef: v4(),
        });
        console.log("Document written with ID: ", comboName);
        setComboName('');
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function deleteCombo() {
    try {
      const categoriaDocRef = doc(firestoreDB, "Combos", comboName);
      await deleteDoc(categoriaDocRef);
      console.log("Categoria successfully deleted!");
    } catch (error) {
      console.error("Error deleting categoria: ", error);
    }
  }

  return (
    
    <div className={styles.pag}>
      {localStorage.getItem("admin") != "true" ?
      navigate("/acceder")
      :
      <>

      <div className={styles.pedidosActualesContainer}>
      <h2 className={styles.pedidosActualesTitle}>Eliminar o Agregar Menu</h2>
      </div>

      
      <input
            type="text"
            value={comboName}
            onChange={(e) => setComboName(e.target.value)}
            placeholder="Enter Combo Name"
          />

        <input
            type="text"
            value={comboDescripcion}
            onChange={(e) => setComboDecripcion(e.target.value)}
            placeholder="Enter Combo Descripcion"
          />

<input
            type="number"
            value={comboPrecio}
            onChange={(e) => setComboPrecio(e.target.value)}
            placeholder="Enter Combo Precio"
          />
          <button onClick={addCombo}>Add Combo</button>
          <button onClick={deleteCombo}>Delete Combo</button>
          

      
    
        </>}

    </div>
  );
}

export default PedidosActuales


