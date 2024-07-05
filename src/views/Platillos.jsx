import styles from './Platillos.module.css';

//import c1 from '../img/View.png';
//import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';
import { NavLink } from 'react-router-dom';
import { routes } from "../constants/routes";
import view from '../img/View.png';
import burger from '../img/Burger_0.png';
import burger1 from '../img/Burger_1.jpg';
import cachapa from '../img/Cachapa_1.png';
import ch from '../img/ClubHouse_1.webp';
import arepa from '../img/Arepa.webp';
import parrilla from '../img/Parrilla_1.jpg';
import pepito from '../img/Pepito.jpg';
import sandwich from '../img/Sandwich.jpg';
import salad from '../img/Salad.png';
import brookie from '../img/Brookies.webp';
import Map from '../img/Map.png';

import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where, collectionGroup } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { firestoreDB } from '../firebase-config';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';



function Platillos() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [platillos, setPlatillos] = useState([]); 
    const location = useLocation();
    const categoriaId = location.state?.categoriaId;

    console.log("categoriaId", categoriaId);

    useEffect(() => {
        const fetchPlatillos = async () => {
          try {
            const categoriaId = "Hamburguesas"; // ID de la categoría "Hamburguesas"
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
       
        return platillos.map((platillo) => (
          <div key={platillo.id} className={styles.platillos_impar}>
            <div className={styles.platillos_descripcion}>
            <h1 className={styles.titulo_platillo}>{platillo.data.nombre}</h1>
            <p>{styles.description}{platillo.data.descripcion}</p>
            <p>{platillo.data.precio}</p>
            <button className={styles.button}>Comprar</button>
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
                    pathname: "/menu/platillos",
                    state: { categoriaId: categoria.id }
                        }}
                    className={styles.botonMenu}
                >
                <h2 className={styles.tituloboton}>{categoria.data.Categoria}</h2>
            

            </Link>
        ));
      };

    return (
        
        <div className={styles.pageContainer}>
            <div className={styles.botonesMenu}>{renderCategorias2()}</div>
            

            <div className={styles.categoria}>
                
                <h1 className={styles.titulo_categoria} >Platillos</h1>
                <div className={styles.platillos}>
                    <div className={styles.catalogo}>{renderPlatillos()}</div>
                    
                </div>
                    <div className={styles.cartamenu}>
                        <NavLink to={routes[1]["children"][0].path}>
                        <h1 className={styles.titulocarta}>Otros</h1>
                        <img src={brookie} alt="brookie" />
                        </NavLink>
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