import styles from './Platillos.module.css';

import Map from '../img/Map.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';

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
    
      const renderPlatillos = () => {
        return platillos.map((platillo) => {
          if (!platillo.data.disponible) {
            return null; // No renderizar el platillo si no está disponible
          }
      
          return (
            <div key={platillo.id} className={styles.platillos_impar}>
              <div className={styles.platillos_descripcion}>
                <h1 className={styles.titulo_platillo}>{platillo.data.nombre}</h1>
                <p>{styles.description}{platillo.data.descripcion}</p>
                <p>{platillo.data.precio}</p>
                
                <button
                  onClick={user ?
                    () => {addPedido(platillo.data)}
                    : () => {navigate("/compra"); scroll(0, 0);}}
                  className={styles.button}
                >
                  Comprar
                </button>
              </div>
              <div></div>
            </div>
          );
        });
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
        const categoriasDisponibles = categorias.filter((categoria) => categoria.data.disponible);
          
        return categoriasDisponibles.map((categoria) => (
  
              <Link
                      
                      key={categoria.id}
                      to={{
                      pathname: `/menu/platillos/${categoria.id}`,
                      state: { categoriaId: categoria.id }
                          }}
                      className={styles.botonMenu} onClick={() => {location.reload(); scroll(0, 0)}}>
                  <h2 className={styles.tituloboton}>{categoria.data.Categoria}</h2>
              
  
              </Link>
          ));
        };
  


      const addPedido = async (platillo) => {
          try {
              const docRef = doc(firestoreDB, "Usuario", localStorage.getItem("email"));
              const docu = await getDoc(docRef);
              const data = docu.data().pedidos;
              console.log(platillos)

              await updateDoc(docRef, {
                  pedidos: [...data, /**/platillo/**/]
              });
              navigate("/compra");
              scroll(0, 0);
          } catch (error) {
              console.log(error)
          }
      };


    return (
        
        <div className={styles.pageContainer}>
            <div className={styles.botonesMenu}>{renderCategorias2()}</div>
            

            <div className={styles.categoria}>
                
                <h1 className={styles.titulo_categoria} >Platillos</h1>
                <div className={styles.platillos}>
                    <div className={styles.catalogo}>{renderPlatillos()}</div>
                    
                </div>
                    
               
                
                

            </div>

            <div className={styles.contactos} style={{ backgroundImage: `url(${Map})` }}>
                <div className={styles.containerContactos}>
                    <h1>Llámanos</h1>
                    <h2> <a href="https://maps.app.goo.gl/GTvtRsQVo77zFdKL8"> Caracas 1073, Miranda, Universidad Metropolitana de Caracas</a></h2>
                    <h2> <a href=""></a> delipernil@gmail.com</h2>
                    <h2> <a href="tel:04242285852">0424-2285852</a></h2>
                    <div className={styles.redesSociales}>
                        <a href="https://www.instagram.com/deliunimet/"><img className={styles.social} src={iglogo} alt="Logo" /></a>
                        <a href="https://twitter.com/delipernil"><img className={styles.social} src={xlogo} alt="Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Platillos;