import { useNavigate } from 'react-router-dom';
import styles from './PedidosActuales.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';


function PedidosActuales() {
    const [comboName, setComboName] = useState('');
    const [comboNewName, setComboNewName] = useState('');
    const [comboDescripcion, setComboDecripcion] = useState('');
    const [comboPrecio, setComboPrecio] = useState('');
  const navigate = useNavigate();

  async function editC() {
    try {
      const categoriaDocRef = doc(firestoreDB, "Combos", comboName);
      console.log(categoriaDocRef);

      await updateDoc(categoriaDocRef, {
        combo: comboNewName,
        descripcion: comboDescripcion,
        precio: comboPrecio,
      });
      console.log("Document successfully updated!");
      
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  return (
    
    <div className={styles.pag}>
      {localStorage.getItem("admin") != "true" ?
      navigate("/acceder")
      :
      <>

      <div className={styles.pedidosActualesContainer}>
      <h2 className={styles.pedidosActualesTitle}>Editar Combo</h2>
      </div>


        <input
            type="text"
            value={comboName}
            onChange={(e) => setComboName(e.target.value)}
            placeholder="Enter Combo Name"
          />

        <input
            type="text"
            value={comboNewName}
            onChange={(e) => setComboNewName(e.target.value)}
            placeholder="Ingrese nuevo nombre de Combo"
          />

          <input
            type="text"
            value={comboDescripcion}
            onChange={(e) => setComboDecripcion(e.target.value)}
            placeholder="Enter Combo Descripcion"
          />

            <input
            type="text"
            value={comboPrecio}
            onChange={(e) => setComboPrecio(e.target.value)}
            placeholder="Enter Combo Precio"
          />

            <button onClick={editC()}>Editar Combo</button>
         
        
        </>}
       

    </div>
  );
}

export default PedidosActuales


