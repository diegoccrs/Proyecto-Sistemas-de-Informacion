import { useNavigate } from 'react-router-dom';
import styles from './PedidosActuales.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc,  deleteDoc,  getDocs, query } from 'firebase/firestore';
import { useState } from 'react';
import { v4 } from 'uuid';

function PedidosActuales() {
    const [categoriaName, setCategoriaName] = useState('');
  const navigate = useNavigate();
  const [platilloName, setPlatilloName] = useState('');
  const [platillosCategoria, setPlatillosCategoria] = useState([]);

  async function addPlatillo(categoriaId) {
    try {
      const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
      const platillosCollectionRef = collection(categoriaDocRef, "Platillos");
  
      await setDoc(doc(platillosCollectionRef, platilloName), {
        nombre: platilloName,
        tipo: categoriaName,
        descripcion: "Descripcion del platillo",
        precio: 0,
        disponible: true,
        imgRef: v4(),
      });
  
      console.log("Platillo added to 'Platillos' subcollection with ID: ", platilloName);
      setPlatilloName('');
    } catch (e) {
      console.error("Error adding platillo: ", e);
    }
  }

async function addPlatilloHandler() {
    try {
      await addPlatillo(categoriaName); 
      console.log("Platillo added successfully");
    } catch (e) {
      console.error("Error adding platillo: ", e);
    }
  }

  async function deletePlatillo() {
    try {
      const categoriaDocRef = doc(firestoreDB, 'Categoria', categoriaName);
      const platilloDocRef = doc(collection(categoriaDocRef, 'Platillos'), platilloName);
      
      await deleteDoc(platilloDocRef);
      console.log('Platillo successfully deleted!');
      fetchPlatillosByCategoriaId(categoriaName);
    } catch (error) {
      console.error('Error deleting platillo: ', error);
    }
  
  }

  async function fetchPlatillosByCategoriaId(categoriaId) {
    const platillosData = await getPlatillosByCategoriaId(categoriaId);
    setPlatillosCategoria(platillosData); // Cambio en esta línea
  }

  async function getPlatillosByCategoriaId(categoriaId) {
    const platillosQuery = query(collection(firestoreDB, 'Categoria', categoriaId, 'Platillos'));

    try {
      const platillosSnapshot = await getDocs(platillosQuery);
      const platillosData = [];

      platillosSnapshot.forEach((doc) => {
        platillosData.push({ id: doc.id, data: doc.data() });
      });

      return platillosData;
    } catch (error) {
      console.error("Error getting platillos: ", error);
      return [];
    }
  }

  return (
    
    <div className={styles.pag}>
      {localStorage.getItem("admin") != "true" ?
      navigate("/acceder")
      :
      <>

      <div className={styles.pedidosActualesContainer}>
        <h2 className={styles.pedidosActualesTitle}>Eliminar o Agregar Platillo</h2>
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
          <button onClick={addPlatilloHandler}>Add Platillo</button>
          <button onClick={deletePlatillo}>Delete Platillo</button>




        </>}

    </div>
  );
}

export default PedidosActuales

