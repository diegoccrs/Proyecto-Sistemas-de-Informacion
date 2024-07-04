import styles from './Menu.module.css';
import { useState } from 'react';
//import c1 from '../img/View.png';
//import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';

import view from '../img/View.png';
import burger from '../img/Burger_0.png';
//import burger1 from '../img/Burger_1.jpg';
import cachapa from '../img/Cachapa_1.png';
import ch from '../img/ClubHouse_1.webp';
import arepa from '../img/Arepa.png';
import parrilla from '../img/Parrilla_1.jpg';
import pepito from '../img/Pepito.jpg';
import sandwich from '../img/Sandwich.jpg';
import salad from '../img/Salad.png';
import otros from '../img/Brookies.webp';

import { Link } from "react-router-dom";



function Menu() {

    const [currentIndex, setCurrentIndex] = useState(0);

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
            <div className={styles.botonesMenu}>
            
                <div className={styles.botonMenu}>

                    <Link to="/menu/cachapas">
                        <h1 className={styles.tituloboton}>Cachapas</h1>
                    </Link> 
                    
                </div>

                <div className={styles.botonMenu}> 

                    <Link to="/menu/clubhouses">
                        <h1 className={styles.tituloboton}>Club Houses</h1>
                    </Link> 
                    
                </div>

                <div className={styles.botonMenu}>
                    <Link to="/menu/hamburguesas">
                        <h1 className={styles.tituloboton}>Hamburguesas</h1>
                    </Link>
                </div>

                <div className={styles.botonMenu}>
                    <Link to="/menu/parrillas">
                        <h1 className={styles.tituloboton}>Parrillas</h1>
                    </Link>     
                    
                </div>

                <div className={styles.botonMenu}>
                    <Link to="/menu/pepitos">
                        <h1 className={styles.tituloboton}>Pepitos</h1>
                    </Link> 
                    
                </div>

                <div className={styles.botonMenu}>

                    <Link to="/menu/sandwiches">
                        <h1 className={styles.tituloboton}>Sandwiches</h1>
                    </Link> 
                    
                </div>

                <div className={styles.botonMenu}>
                    <Link to="/menu/arepas">
                        <h1 className={styles.tituloboton}>Arepas</h1>
                    </Link> 
                    
                </div>

                <div className={styles.botonMenu}>

                    <Link to="/menu/ensaladas">
                        <h1 className={styles.tituloboton}>Ensaladas</h1>
                    </Link> 
                    
                </div>

                <div className={styles.botonMenu}>
                    <Link to="/menu/otros">
                        <h1 className={styles.tituloboton}>Otros</h1>
                    </Link> 
                    
                </div>

            </div>

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
                                        <Link className={styles["nav-link"]} to="/comprar"><button className={styles.button}>Comprar</button></Link>
 
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
                <div className={styles.catalogo}>
               
                    

                    <Link className={styles.cartamenu} to="/menu/cachapas">

                        <h1 className={styles.titulocarta}>Cachapas</h1>
                        <img src={cachapa} alt="cachapa" />
      
                    </Link>

                    <Link className={styles.cartamenu} to="/menu/clubhouses">

                        <h1 className={styles.titulocarta}>Club House</h1>
                        <img src={ch} alt="ch" />
                   
                    </Link>

                    <Link className={styles.cartamenu} to="/menu/hamburguesas">
                        <h1 className={styles.titulocarta}>Hamburguesa</h1>
                        <img src={burger} alt="burger" />
                    </Link>

                    <Link className={styles.cartamenu} to="/menu/parrillas">

                        <h1 className={styles.titulocarta}>Parrillas</h1>
                        <img src={parrilla} alt="parrilla" />
                     
                    </Link>

                    <Link className={styles.cartamenu} to="/menu/pepitos">

                        <h1 className={styles.titulocarta}>Pepitos</h1>
                        <img src={pepito} alt="pepito" />
               
                    </Link>

                    <Link className={styles.cartamenu} to="/menu/sandwiches">

                        <h1 className={styles.titulocarta}>Sandwiches</h1>
                        <img src={sandwich} alt="sandwich" />        

                    </Link>

                    <Link className={styles.cartamenu} to="/menu/arepas">

                        <h1 className={styles.titulocarta}>Arepas</h1>
                        <img src={arepa} alt="arepa" />
                        
                    </Link>

                    <Link className={styles.cartamenu} to="/menu/ensaladas">

                        <h1 className={styles.titulocarta}>Ensaladas</h1>
                        <img src={salad} alt="salad" />
                     
                    </Link>

                    <Link className={styles.cartamenu} to="/menu/otros">
                
                        <h1 className={styles.titulocarta}>Otros</h1>
                        <img src={otros} alt="otros" />
                        
                    </Link>
                </div>
            </div>

            <div className={styles.contactos} style={{ backgroundImage: `url(${fondo})` }}>
                <div className={styles.containerContactos}>
                    <h1><span className={styles.colored}>Llámanos</span></h1>
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

export default Menu