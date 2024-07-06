import { useNavigate } from 'react-router-dom';
import styles from './PedidosActuales.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

function PedidosActuales() {
    const [categoriaName, setCategoriaName] = useState('');
  const navigate = useNavigate();

  async function addCategoria() {
    if (!categoriaName.trim()) {
        console.error("The category name cannot be empty");
        return;
    }

    try {
        const docRef = doc(firestoreDB, "Categoria", categoriaName); 
        await setDoc(docRef, {
            Categoria: categoriaName,
            disponible: true,
            imgRef: v4(),
        });
        console.log("Document written with ID: ", categoriaName);
        setCategoriaName('');
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function deleteCategoria() {
    try {
      const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaName);
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
            value={categoriaName}
            onChange={(e) => setCategoriaName(e.target.value)}
            placeholder="Enter Category Name"
          />
          <button onClick={addCategoria}>Add Categoria</button>
          <button onClick={deleteCategoria}>Delete Categoria</button>
          

      
    
        </>}

    </div>
  );
}

export default PedidosActuales


