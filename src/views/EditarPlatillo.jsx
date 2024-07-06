import { useNavigate } from 'react-router-dom';
import styles from './PedidosActuales.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';


function PedidosActuales() {
    const [categoriaName, setCategoriaName] = useState('');
  const navigate = useNavigate();
  const [platilloName, setPlatilloName] = useState('');
  const [platilloDescription, setPlatilloDescription] = useState('');
  const [platilloPrice, setPlatilloPrice] = useState(0);

  async function editP() {
    try {
      const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaName);
      const platillosCollectionRef = collection(categoriaDocRef, "Platillos");

      await updateDoc(doc(platillosCollectionRef, platilloName), {
        disponible: platilloDescription,
        nombre: platilloName,
        precio: platilloPrice,
        
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
      <h2 className={styles.pedidosActualesTitle}>Editar Platillo</h2>
      </div>
        
      <input
            type="text"
            value={categoriaName}
            onChange={(e) => setCategoriaName(e.target.value)}
            placeholder="Enter Category Name"
          />

        <input
            type="text"
            value={platilloName}
            onChange={(e) => setPlatilloName(e.target.value)}
            placeholder="Enter Platillo Name"
          />

        <input
            type="text"
            value={platilloDescription}
            onChange={(e) => setPlatilloDescription(e.target.value)}
            placeholder="Enter Platillo Description"
          />

          <input
            type="number"
            value={platilloPrice}
            onChange={(e) => setPlatilloPrice(e.target.value)}
            placeholder="Enter Platillo Price"
          />
        
        
        <button onClick={editP}>Editar Platillo</button>





        
        </>}

    </div>
  );
}

export default PedidosActuales


