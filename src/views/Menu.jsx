import styles from './Menu.module.css';
import { useState, useEffect } from 'react';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { firestoreDB } from '../firebase-config';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import Map from '../img/Map.png';
import view from '../img/View.png';

import { Link } from "react-router-dom";



function Menu() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [categorias, setCategorias] = useState([]);

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
        const categoriasDisponibles = categorias.filter((categoria) => categoria.data.disponible);
        
        return categoriasDisponibles.map((categoria) => (
          <Link
            onClick={() => {scroll(0, 0);}}
            key={categoria.id}
            to={{
              pathname: `/menu/platillos/${categoria.id}`,
              state: { categoriaId: categoria.id }
            }}
            className={styles.cartamenu}
          >
            <h2 className={styles.titulocarta}>{categoria.data.Categoria}</h2>
            <p>Disponible: {categoria.data.disponible ? 'Sí' : 'No'}</p>
          </Link>
        ));
      };

    const renderCategorias2 = () => {
        const categoriasDisponibles = categorias.filter((categoria) => categoria.data.disponible);
        
        return categoriasDisponibles.map((categoria) => (
          
            <Link
                    onClick={() => {scroll(0, 0);}}
                    key={categoria.id}
                    to={{
                    pathname: `/menu/platillos/${categoria.id}`,
                    state: { categoriaId: categoria.id }
                        }}
                    className={styles.botonMenu}
                >
                <h2 className={styles.tituloboton}>{categoria.data.Categoria}</h2>
            

            </Link>
        ));
    };


    const combos = [
        {
        title: 'Combo 1',
        description: 'Descripción del combo 1',
        image: view,
        },
        {
    
        title: 'Combo 2',
        description: 'Descripción del combo 2',
        image: view,
        },
        {
        
        title: 'Combo 3',
        description: 'Descripción del combo 3',
        image: view,
        },
        {
        
        title: 'Combo 4',
        description: 'Descripción del combo 4',
        image: view,
        },
        {
        
        title: 'Combo 5',
        description: 'Descripción del combo 5',
        image: view,
        },
        {
        
        title: 'Combo 6',
        description: 'Descripción del combo 6',
        image: view,
        },
    ];

    const nextCombo = () => {
        setCurrentIndex((prevIndex) => (prevIndex === combos.length - 1 ? 0 : prevIndex + 1));
    };

    const prevCombo = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? combos.length - 1 : prevIndex - 1));
    };



    return (
        <div className={styles.pageContainer}>
          
            <div className={styles.botonesMenu}>{renderCategorias2()}</div>
            
               


            <div className={styles.menu}>
                <h1 className={styles.menut}>PROMOS</h1>
                <div className={styles.promo}>                   

                    
                    <div className={styles.promos}>       

                        <button id="nextBtn" className={styles.buttonc1} onClick={prevCombo}>&lt;</button>
                        
                        <div className={styles.zonapromos}>                              
                            <div className={styles.carrusel}>
                            {combos.map((combo, index) => (
                            <div className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`} key={index}>
                                <div className={styles.combocontenido}>
                                    <div className={styles.imagencombobody}>
                                    <img className={styles.comboImage} src={combo.image} alt={combo.title} />
                                    </div>
                                    <div className={styles.comboDescription}>
                                        <h2 className={styles.comboTitle}>{combo.title}</h2>
                                        <p>{combo.description}</p>
                                        <Link  to="/menu">
                                            <button className={styles.button}>Comprar</button>
                                        </Link> 
                                    </div>
                                </div>
                            </div>                    
                            ))}  

                            </div>                    
                        </div>        

                        <button id="nextBtn" className={styles.buttonc2} onClick={nextCombo}>&gt;</button>

                    </div>
                </div>




                <h1 className={styles.menut}>MENU</h1>
                <div className={styles.catalogo}>{renderCategorias()}</div>
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
};

export default Menu