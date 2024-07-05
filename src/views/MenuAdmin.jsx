import styles from './MenuAdmin.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import { getDownloadURL } from 'firebase/storage';




function MenuAdmin() {
    const [categoriaName, setCategoriaName] = useState('');
    const [platilloName, setPlatilloName] = useState('');
    const [platilloDescription, setPlatilloDescription] = useState('');
    const [platilloPrice, setPlatilloPrice] = useState(0);
    const [disponibleC, setDisponibleC] = useState(false);
    const [disponibleP, setDisponibleP] = useState(false);


    const [categorias, setCategorias] = useState([]);
    const [platillos, setPlatillos] = useState([]);
    const [platillosCategoria, setPlatillosCategoria] = useState([]);

    const handleClickCategoriaContainer = (categoriaId) => {
      const platillosData = getPlatillosByCategoriaId(categoriaId);
      setPlatillosCategoria(platillosData);
    };

    //////////////////////!SECTION


    ////////////////////




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
                imgRef: "",
            });
            console.log("Document written with ID: ", categoriaName);
            setCategoriaName('');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    
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

    
      const updateDisponibleC = async (categoriaId) => {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
          
  
          await updateDoc(categoriaDocRef, {
            disponible: !disponibleC
          });
          console.log("Document successfully updated!");
          setDisponibleC(!disponibleC); 
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      };


      async function editC() {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaName);
          
  
          await updateDoc(categoriaDocRef, {
            Categoria: categoriaName,
          });
          console.log("Document successfully updated!");
          
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      }
      

      const updateDisponibleP = async (categoriaId, platilloId) => {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
          const platillosCollectionRef = collection(categoriaDocRef, "Platillos");
  
          await updateDoc(doc(platillosCollectionRef, platilloId), {
            disponible: !disponibleP
          });
          console.log("Document successfully updated!");
          setDisponibleP(!disponibleP); 
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      };


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
      
      async function deleteCategoria(categoriaId) {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
          await deleteDoc(categoriaDocRef);
          console.log("Categoria successfully deleted!");
        } catch (error) {
          console.error("Error deleting categoria: ", error);
        }
      }

      async function deletePlatillo(categoriaId, platilloId) {
        try {
          const categoriaDocRef = doc(firestoreDB, 'Categoria', categoriaId);
          const platilloDocRef = doc(collection(categoriaDocRef, 'Platillos'), platilloId);
          
          await deleteDoc(platilloDocRef);
          console.log('Platillo successfully deleted!');
          fetchPlatillosByCategoriaId(categoriaId);
        } catch (error) {
          console.error('Error deleting platillo: ', error);
        }
      
      }

      useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestoreDB, 'Categoria'), (snapshot) => {
          const categoriasData = [];
          snapshot.forEach((doc) => {
            categoriasData.push({ id: doc.id, data: doc.data() });
          });
          setCategorias(categoriasData);
        });
    
        return () => unsubscribe();
      }, []);

      const renderCategorias = () => {
        return categorias.map((categoria) => (
          
          <div key={categoria.id} className={styles.categoriaContainer} onClick={() => handleClickCategoriaContainer(categoria.id)} >
            <h2>{categoria.data.Categoria}</h2>
            <button onClick={() => deleteCategoria(categoria.id)}>Borrar Categoria</button>
            <p>Disponible: {categoria.data.disponible ? 'Sí' : 'No'}</p>
            <button onClick={() => updateDisponibleC(categoria.id)}>
            {disponibleC ? "Encendido" : "Apagado"}
            </button>

            
          </div>
        ));
      };

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

      async function fetchPlatillosByCategoriaId(categoriaId) {
        const platillosData = await getPlatillosByCategoriaId(categoriaId);
        setPlatillosCategoria(platillosData); // Cambio en esta línea
      }
    
      useEffect(() => {
        // Llamada inicial para obtener los platillos de la primera categoría
        if (categorias.length > 0) {
          fetchPlatillosByCategoriaId(categorias[0].id);
        }
      }, [categorias]);


      const renderPlatillos = (categoriaId) => {
        const platillosCategoria = platillos.filter((platillo) => platillo.data.tipo === categoriaId);
    
        return platillosCategoria.map((platillo) => (
          <div key={platillo.id} className={styles.platilloContainer}>
            <h3>{platillo.data.nombre}</h3>
            <button onClick={() => deletePlatillo(categoriaId, platillo.id)}>Borrar Platillo</button>
            <p>{platillo.data.descripcion}</p>
            <p>Precio: {platillo.data.precio}</p>
            
            <button onClick={() => updateDisponibleP(categoriaId, platillo.id)}>
              {disponibleP ? 'Apagar' : 'Encender'}
            </button>

      

           
           
          </div>
        ));
      };

  
      return (
        <div>
          <div className={styles.slogan}>
            <h1>ADMIN <span className={styles.colored}>conmovedora</span> de nuestro local</h1>
          </div>
          <input
            type="text"
            value={categoriaName}
            onChange={(e) => setCategoriaName(e.target.value)}
            placeholder="Enter Category Name"
          />
          <button onClick={addCategoria}>Add Categoria</button>

          
    
          <input
            type="text"
            value={platilloName}
            onChange={(e) => setPlatilloName(e.target.value)}
            placeholder="Enter Platillo Name"
          />
          <button onClick={addPlatilloHandler}>Add Platillo</button>

          



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

          <button onClick={editC}>Editar Categoria</button>

          <button onClick={editP}>Editar Platillo</button>

          
          <div className={styles.menu}>{renderCategorias()}</div>
          <div className={styles.menu}>{renderPlatillos("Hamburguesas")}</div>

          
        </div>
      );
    }
    

export default MenuAdmin