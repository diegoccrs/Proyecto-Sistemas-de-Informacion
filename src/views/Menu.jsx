import styles from './Menu.module.css';
import { useState } from 'react';
import c1 from '../img/View.png';
import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';
import arepa1 from '../img/Arepa.png';
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
import cachapa1 from '../img/Cachapa_0.png';

import { Link } from "react-router-dom";

function Menu() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const combos = [
        {
        title: 'Promo 1',
        description: 'La Deli Pernil: Hamburguesa con Queso, Tocineta, Cebolla. Incluye papas y refresco medianos',
        image: burger1 ,
        },
        {
    
        title: 'Promo 2',
        description: 'La Malandra: Arepa con Queso y Carne Mechada',
        image: arepa1 ,
        },
        {
        
        title: 'Promo 3',
        description: 'La Llanera: Cachapa con Queso Telita',
        image: cachapa1 ,
        },
        {
        
        title: 'Promo 4',
        description: 'Parrilla Especial: Incluye Carne, Pollo, Lechuga, Queso Parmesano y Chips',
        image: parrilla ,
        },
        {
        
        title: 'Promo 5',
        description: 'La Vegana: Trae Carne de Garbanzos y Rucula',
        image: view ,
        },
        {
        
        title: 'Promo 6',
        description: 'Ensalada Cesar: incluye Trozos de pan tostado, Pollo, Lechuga, Queso Parmesano y Aceite de Oliva',
        image: salad ,
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
                    <Link to="/menu/clubhouse">
                        <h1 className={styles.tituloboton}>Club House</h1>
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
                                <Link className={styles.button} to="/menu">Comprar</Link> 
                                <button className={styles.button}>Comprar</button>
                            </div>
                        </div>
                    </div>
                    ))}        
                    </div>
                    <button id="nextBtn" className={styles.buttonc} onClick={prevCombo}>&lt;</button>
                <button id="nextBtn" className={styles.buttonc} onClick={nextCombo}>&gt;</button>
                </div>
                <h1>MENU</h1>
                <div className={styles.catalogo}>
               
                    <Link className={styles.cartamenu} to="/menu/hamburguesas">
                        <h1 className={styles.titulocarta}>Hamburguesas</h1>
                        <img src={burger} alt="burger" />
                    </Link>

                    <Link className={styles.cartamenu} to="/menu/cachapas">

                        <h1 className={styles.titulocarta}>Cachapas</h1>
                        <img src={cachapa} alt="cachapa" />
      
                    </Link>

                    <Link className={styles.cartamenu} to="/menu/clubhouse">

                        <h1 className={styles.titulocarta}>Club House</h1>
                        <img src={ch} alt="ch" />
                   
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
                        <img src={brookie} alt="brookie" />
                        
                    </Link>
                </div>
            </div>

            <div className={styles.contactos} style={{ backgroundImage: `url(${fondo})` }}>
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