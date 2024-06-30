import styles from './Menu.module.css';
import { useState } from 'react';
import c1 from '../img/View.png';
import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';


import { Link } from "react-router-dom";



function Menu() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const combos = [
        {
        title: 'Combo 1',
        description: 'Descripción del combo 1',
        image: c1,
        },
        {
    
        title: 'Combo 2',
        description: 'Descripción del combo 2',
        image: c1,
        },
        {
      
        title: 'Combo 3',
        description: 'Descripción del combo 3',
        image: c1,
        },
        {
        
        title: 'Combo 4',
        description: 'Descripción del combo 4',
        image: c1,
        },
        {
       
        title: 'Combo 5',
        description: 'Descripción del combo 5',
        image: c1,
        },
        {
        
        title: 'Combo 6',
        description: 'Descripción del combo 6',
        image: c1,
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
            <div className={styles.botonesMenu}>

            
                <div className={styles.botonMenu}>
                    <h1 className={styles.tituloboton}>Cachapas</h1>
                </div>
                <div className={styles.botonMenu}> 
                    <h1 className={styles.tituloboton}>Club House</h1>
                </div>
                <div className={styles.botonMenu}>
                    <h1 className={styles.tituloboton}>Hamburguesas</h1>
                </div>
                <div className={styles.botonMenu}>     
                    <h1 className={styles.tituloboton}>Parrillas</h1>
                </div>
                <div className={styles.botonMenu}>
                    <h1 className={styles.tituloboton}>Pepitos</h1>
                </div>
                <div className={styles.botonMenu}>
                    <h1 className={styles.tituloboton}>Sandwiches</h1>
                </div>
                <div className={styles.botonMenu}>
                    <h1 className={styles.tituloboton}>Arepas</h1>
                </div>
                <div className={styles.botonMenu}>
                    <h1 className={styles.tituloboton}>Ensaladas</h1>
                </div>
                <div className={styles.botonMenu}>
                    <h1 className={styles.tituloboton}>Otros</h1>
                </div>        
            </div>

            <div className={styles.menu}>
                <h1>PROMOS</h1>
                <div className={styles.promos}>
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
                                <Link className={styles.button}s to="/menu">Comprar</Link> 
                                <button className={styles.button}>Comprar</button>
                            </div>
                        </div>
                    </div>
                    ))}        
                    </div>
                    <button id="nextBtn" className={styles.buttonc} onClick={prevCombo}>&gt;</button>
                <button id="nextBtn" className={styles.buttonc} onClick={nextCombo}>&gt;</button>
                </div>
                <h1>MENU</h1>
                <div className={styles.catalogo}>
               
                    <Link className={styles.cartamenu}s to="/menu/hamburguesas">

                        <h1 className={styles.titulocarta}>Hamburguesa</h1>
                        <img src={local} alt="local" />
                      
                    </Link>

                    <Link className={styles.cartamenu}s to="/menu/hamburguesas">

                        <h1 className={styles.titulocarta}>Cachapas</h1>
                        <img src={local} alt="local" />
      
                    </Link>

                    <Link className={styles.cartamenu}s to="/menu/hamburguesas">

                        <h1 className={styles.titulocarta}>Club House</h1>
                        <img src={local} alt="local" />
                   
                    </Link>

                    <Link className={styles.cartamenu}s to="/menu/hamburguesas">

                        <h1 className={styles.titulocarta}>Parrillas</h1>
                        <img src={local} alt="local" />
                     
                    </Link>

                    <Link className={styles.cartamenu}s to="/menu/hamburguesas">

                        <h1 className={styles.titulocarta}>Pepitos</h1>
                        <img src={local} alt="local" />
               
                    </Link>

                    <Link className={styles.cartamenu}s to="/menu/hamburguesas">
                        <h1 className={styles.titulocarta}>Sandwiches</h1>
                        <img src={local} alt="local" />           
                    </Link>

                    <Link className={styles.cartamenu}s to="/menu/hamburguesas">
                        <h1 className={styles.titulocarta}>Arepas</h1>
                        <img src={local} alt="local" />
                        
                    </Link>

                    <Link className={styles.cartamenu}s to="/menu/hamburguesas">

                        <h1 className={styles.titulocarta}>Ensaladas</h1>
                        <img src={local} alt="local" />
                     
                    </Link>

                    <Link className={styles.cartamenu}s to="/menu/hamburguesas">
                
                        <h1 className={styles.titulocarta}>Otros</h1>
                        <img src={local} alt="local" />
                        
                    </Link>
                </div>
                
                

            </div>

            <div className={styles.contactos} style={{ backgroundImage: `url(${fondo})` }}>
                <div className={styles.containerContactos}>
                    <h1>Llámanos</h1>
                    <h2>Caracas</h2>
                    <h2>delipernil</h2>
                    <h2>0424</h2>
                    <div className={styles.redesSociales}>
                        <img className={styles.social} src={iglogo} alt="Logo" />
                        <img className={styles.social} src={xlogo} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu