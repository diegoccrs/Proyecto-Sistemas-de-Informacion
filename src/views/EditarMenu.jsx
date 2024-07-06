import { useNavigate } from 'react-router-dom';
import styles from './PedidosActuales.module.css';
import { firestoreDB } from '../firebase-config';
import {  doc, updateDoc,} from 'firebase/firestore';
import { useState } from 'react';
//import { v4 } from 'uuid';


function PedidosActuales() {
    const [categoriaName, setCategoriaName] = useState('');
    const [categoriaNewName, setCategoriaNewName] = useState('');
  const navigate = useNavigate();

  async function editC() {
    try {
      const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaName);
      

      await updateDoc(categoriaDocRef, {
        Categoria: categoriaNewName,
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
      <h2 className={styles.pedidosActualesTitle}>Editar Menu</h2>
      </div>


        <input
            type="text"
            value={categoriaName}
            onChange={(e) => setCategoriaName(e.target.value)}
            placeholder="Enter Category Name"
          />

        <input
            type="text"
            value={categoriaNewName}
            onChange={(e) => setCategoriaNewName(e.target.value)}
            placeholder="Ingrese nuevo nombre de Categoria"
          />
          <button onClick={editC()}>Editar Categoria</button>

          
         
        
        </>}
       

    </div>
  );
}

export default PedidosActuales


