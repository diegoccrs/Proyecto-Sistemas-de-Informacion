import styles from './MenuAdmin.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { v4 } from 'uuid';




function MenuAdmin() {
    const [disponibleC, setDisponibleC] = useState(false);
    const [disponibleP, setDisponibleP] = useState(false);


    const [categorias, setCategorias] = useState([]);
    const [platillos, setPlatillos] = useState([]);
    const [platillosCategoria, setPlatillosCategoria] = useState([]);

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
          
            <Link
                    onClick={() => {scroll(0, 0);}}
                    key={categoria.id}
                    to={{
                    pathname: `/menuadmin/adminplatillos/${categoria.id}`,
                    state: { categoriaId: categoria.id }
                        }}
                    className={styles.categoriaContainer}
                >
                <h2 className={styles.titulocarta}>{categoria.data.Categoria}</h2>
                <p>Disponible: {categoria.data.disponible ? 'Sí' : 'No'}</p>

            </Link>
        ));
    };


    const navigate = useNavigate();

    const handleClickCategoriaContainer = (categoriaId) => {
      const platillosData = getPlatillosByCategoriaId(categoriaId);
      setPlatillosCategoria(platillosData);
    };


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

      
      async function deleteCategoria(categoriaId) {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
          await deleteDoc(categoriaDocRef);
          console.log("Categoria successfully deleted!");
        } catch (error) {
          console.error("Error deleting categoria: ", error);
        }
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
            
            <p>{platillo.data.descripcion}</p>
            <p>Precio: {platillo.data.precio}</p>
            
            <button onClick={() => updateDisponibleP(categoriaId, platillo.id)}>
              {disponibleP ? 'Apagar' : 'Encender'}
            </button>

      

           
           
          </div>
        ));
      };

      const renderCategorias2 = () => {
        return categorias.map((categoria) => (
          
            <Link
                    onClick={() => {scroll(0, 0);}}
                    key={categoria.id}
                    to={{
                    pathname: `/menuadmin/adminplatillos/${categoria.id}`,
                    state: { categoriaId: categoria.id }
                        }}
                    className={styles.botonMenu}
                >
                <h2 className={styles.tituloboton}>{categoria.data.Categoria}</h2>
            

            </Link>
        ));
    };

    

  
      return (
        <div className={styles.app}>
          {localStorage.getItem("admin") != "true" ?
          navigate("/acceder")
          :
          <>
          <div className={styles.slogan}>
            <h1 className={styles.slogant}>ADMIN</h1>
           

          </div>

          <div className={styles.botonesMenu}>{renderCategorias2()}</div>


          <div className={styles.botonesMenu}>
          <Link className={`${styles["nav-link"]} ${styles.botonMenu}`}to="/menuadmin/editarmenu">Editar Menu</Link>
          <Link className={`${styles["nav-link"]} ${styles.botonMenu}`} to="/menuadmin/eamenu">Agregar o Eliminar Menu</Link>
     
            </div>

          


          
          <div className={styles.menu}>{renderCategorias()}</div>
          

          </>}
        </div>
      );
    }
    

export default MenuAdmin