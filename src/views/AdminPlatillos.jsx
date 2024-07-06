import styles from './AdminPlatillos.module.css';
import { collection, doc, getDoc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where, collectionGroup } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useState, useEffect } from 'react';
import { firestoreDB } from '../firebase-config';
import { Link, useParams } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';



function Platillos() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [platillos, setPlatillos] = useState([]); 
    const location = useLocation();
    const categoriaId = location.state?.categoriaId;
    const [disponibleP, setDisponibleP] = useState(false);
    const [platillosCategoria, setPlatillosCategoria] = useState([]);
    const navigate = useNavigate();

    const { categoId } = useParams();


    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    useEffect(() => {
        const fetchPlatillos = async () => {
          try {
            const categoriaId = categoId; // ID de la categoría "Hamburguesas"
            const platillosRef = collection(firestoreDB, 'Categoria', categoriaId, 'Platillos');
            const querySnapshot = await getDocs(platillosRef);

           
            const platillosData = querySnapshot.docs.map((doc) => ({
                
              id: doc.id,
              data: doc.data()
            }));
            setPlatillos(platillosData);
             
          } catch (error) {
            console.error("Error fetching platillos:", error);
          }
        };
    
        fetchPlatillos();
      }, []);

    
    

      const updateDisponibleP = async (categoriaId, platilloId) => {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
          const platillosCollectionRef = collection(categoriaDocRef, "Platillos");
      
          const updatedPlatillos = platillos.map((platillo) => {
            if (platillo.id === platilloId) {
              const newDisponible = !platillo.data.disponible;
              return {
                ...platillo,
                data: {
                  ...platillo.data,
                  disponible: newDisponible
                }
              };
            }
            return platillo;
          });
      
          await updateDoc(doc(platillosCollectionRef, platilloId), {
            disponible: !platillos.find((platillo) => platillo.id === platilloId).data.disponible
          });
      
          console.log("Document successfully updated!");
          setPlatillos(updatedPlatillos);
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      };

      
      async function fetchPlatillosByCategoriaId(categoriaId) {
        const platillosData = await getPlatillosByCategoriaId(categoriaId);
        setPlatillosCategoria(platillosData); 
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

      async function deletePlatillo(idCategoria, idPlatillo) {
        try {
          const categoriaDocRef = doc(firestoreDB, 'Categoria', idCategoria);
          const platilloDocRef = doc(collection(categoriaDocRef, 'Platillos'), idPlatillo);
          
          await deleteDoc(platilloDocRef);
          console.log('Platillo successfully deleted!');
          fetchPlatillosByCategoriaId(idCategoria); // Actualizar platillos después de eliminar
        } catch (error) {
          console.error('Error deleting platillo: ', error);
        }
      }


      const renderPlatillos = () => {
        return platillos.map((platillo) => (
          <div key={platillo.id} className={styles.platillos_impar}>
            <div className={styles.platillos_descripcion}>
              <h1 className={styles.titulo_platillo}>{platillo.data.nombre}</h1>
              <p>{styles.description}{platillo.data.descripcion}</p>
              <p>{platillo.data.precio}</p>
              <button onClick={() => deletePlatillo(platillo.data.tipo, platillo.id)}>Eliminar</button>
              <p>Disponible: {platillo.data.disponible ? 'Sí' : 'No'}</p>
              
              <button onClick={() => updateDisponibleP(platillo.data.tipo, platillo.id)}>
                Actualizar Disponible
                </button>
            </div>
            <div></div>
          </div>
        ));
      };
    


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



      
    const renderCategorias2 = () => {
        return categorias.map((categoria) => (

            <Link
                    
                    key={categoria.id}
                    to={{
                    pathname: `/menuadmin/adminplatillos/${categoria.id}`,
                    state: { categoriaId: categoria.id }
                        }}
                    className={styles.botonMenu} onClick={() => {location.reload(); scroll(0, 0)}}>
                <h2 className={styles.tituloboton}>{categoria.data.Categoria}</h2>
                
            

            </Link>
        ));
      };


    return (
        <div className={styles.pageContainer}>
            <div className={styles.botonesMenu}>{renderCategorias2()}</div>
            <div className={styles.botonesMenu}>
                    
                    <Link className={`${styles["nav-link"]} ${styles.botonMenu}`} to="/menuadmin/editarplatillo">Editar Platillo</Link>

                    <Link className={`${styles["nav-link"]} ${styles.botonMenu}`} to="/menuadmin/eaplatillo">Agregar o Eliminar Platillo</Link>
                </div>

            <div className={styles.categoria}>   
                <h1 className={styles.titulo_categoria} > Editar Platillos</h1>
                <div className={styles.platillos}>
                    <div className={styles.catalogo}>{renderPlatillos()}</div>    
                </div>   
            </div>
        </div>
    );
}

export default Platillos;