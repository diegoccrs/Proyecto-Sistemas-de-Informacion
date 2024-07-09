import { useNavigate } from 'react-router-dom';
import styles from './PedidosActuales.module.css';
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
////////////////////////////////////////////////////////////
import { fireStorage, firestoreDB } from '../firebase-config.js';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where, getDoc } from 'firebase/firestore';
////////////////////////////////////////////////////////////
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

function PedidosActuales() {
    const [categoriaName, setCategoriaName] = useState('');
  const navigate = useNavigate();
  const [platilloName, setPlatilloName] = useState('');
  const [platillosCategoria, setPlatillosCategoria] = useState([]);
  const [comboDescripcion, setPlatilloDecripcion] = useState('');
  const [comboPrecio, setPlatilloPrecio] = useState(0);

////////////////////////////////////////////////////////////
    const [imUp, setImUp] = useState(null);

    const uploadImage = async () => {
        if(imUp == null) {
            scroll(0, 0);
            navigate("/menuadmin");
            location.reload();
            return;
        };
        const imgRef = ref(fireStorage, `platillosImages/${Hash}`);

        uploadBytes(imgRef, imUp).then(() => {
            console.log('Image uploaded!')
            scroll(0, 0);
            navigate("/menuadmin");
            location.reload();
        });
    };

    let Hash = '';

    const deleteImage = async (imageId) => {
        try {
            const imageRef = ref(fireStorage, `platillosImages/${imageId}`);

            deleteObject(imageRef);
        } catch (error) {
            console.log(error);
        }
    }
////////////////////////////////////////////////////////////

  async function addPlatillo(categoriaId) {
    try {
      const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
      const platillosCollectionRef = collection(categoriaDocRef, "Platillos");
        
      const tempHash = v4();
      Hash = tempHash;

      await setDoc(doc(platillosCollectionRef, platilloName), {
        nombre: platilloName,
        tipo: categoriaName,
        descripcion: comboDescripcion,
        precio: parseFloat(comboPrecio),
        disponible: true,
        imgRef: tempHash,
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

////////////////////////////////////////////////////////////
  async function deletePlatillo() {
    try {
      const categoriaDocRef = doc(firestoreDB, 'Categoria', categoriaName);
      const platilloDocRef = doc(collection(categoriaDocRef, 'Platillos'), platilloName);
      try {
          const docu = await getDoc(platilloDocRef);

          const imgRef = docu.data().imgRef;
          

          
          deleteImage(imgRef)
      } catch (error) {
        
      }

      await deleteDoc(platilloDocRef).then(
        console.log('Platillo successfully deleted!')).then(
        fetchPlatillosByCategoriaId(categoriaName)).then(() => {
            scroll(0, 0);
            navigate("/menuadmin");
            location.reload();
        })

    } catch (error) {
      console.error('Error deleting platillo: ', error);
    }
  
  }
////////////////////////////////////////////////////////////

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
            placeholder="Nombre categoría"
          />
         
         <input
            type="text"
            value={platilloName}
            onChange={(e) => setPlatilloName(e.target.value)}
            placeholder="Nombre platillo"
          />


          
        <input
            type="text"
            value={comboDescripcion}
            onChange={(e) => setPlatilloDecripcion(e.target.value)}
            placeholder="Descripción platillo"
          />

        <input
            type="number"
            value={comboPrecio}
            onChange={(e) => setPlatilloPrecio(e.target.value)}
            placeholder="Precio platillo"
          />
        
        <input type="file" accept="image/*" onChange={(event) => {setImUp(event.target.files[0])}} />
     
          
          <button onClick={async () => {
                await addPlatilloHandler();
                await uploadImage();
            }}>Add Platillo</button>
          <button onClick={deletePlatillo}>Delete Platillo</button>




        </>}

    </div>
  );
}

export default PedidosActuales

