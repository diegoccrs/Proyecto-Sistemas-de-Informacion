import styles from './Hamburguesas.module.css';
import { useState } from 'react';
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

function Hamburguesas() {
    

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
                
                <h1>MENU</h1>
                <div className={styles.catalogo}>
                    
                    <div className={styles.cartamenu}>
                       
                        <NavLink to="/Hamburguesas">
                            <h1 className={styles.titulocarta}>Hamburguesa</h1>
                            <img src={burger} alt="burger" />
                        </NavLink>
                       
                    </div>
                    <div className={styles.cartamenu}>
                        <NavLink to={routes[1]["children"][0].path}>
                        <h1 className={styles.titulocarta}>Hamburguesa</h1>
                        <img src={burger1} alt="burger1" />
                        </NavLink>
                    </div>
                    <div className={styles.cartamenu}>
                        <NavLink to={routes[1]["children"][0].path}>
                        <h1 className={styles.titulocarta}>Cachapas</h1>
                        <img src={cachapa} alt="cachapa" />
                        </NavLink>
                    </div>
                    <div className={styles.cartamenu}>
                    <NavLink to={routes[1]["children"][0].path}>
                        <h1 className={styles.titulocarta}>Club House</h1>
                        <img src={ch} alt="ch" />
                        </NavLink>
                    </div>
                    <div className={styles.cartamenu}>
                    <NavLink to={routes[1]["children"][0].path}>
                        <h1 className={styles.titulocarta}>Parrillas</h1>
                        <img src={parrilla} alt="parrilla" />
                        </NavLink>
                    </div>
                    <div className={styles.cartamenu}>
                    <NavLink to={routes[1]["children"][0].path}>
                        <h1 className={styles.titulocarta}>Pepitos</h1>
                        <img src={pepito} alt="pepito" />
                        </NavLink>
                    </div>
                    <div className={styles.cartamenu}>
                    <NavLink to={routes[1]["children"][0].path}>
                        <h1 className={styles.titulocarta}>Sandwiches</h1>
                        <img src={sandwich} alt="sandwich" />
                        </NavLink>
                    </div>
                    <div className={styles.cartamenu}>
                    <NavLink to={routes[1]["children"][0].path}>
                        <h1 className={styles.titulocarta}>Arepas</h1>
                        <img src={arepa} alt="arepa" />
                        </NavLink>
                    </div>
                    <div className={styles.cartamenu}>
                    <NavLink to={routes[1]["children"][0].path}>
                        <h1 className={styles.titulocarta}>Ensaladas</h1>
                        <img src={salad} alt="salad" />
                        </NavLink>
                    </div>
                    <div className={styles.cartamenu}>
                        <NavLink to={routes[1]["children"][0].path}>
                        <h1 className={styles.titulocarta}>Otros</h1>
                        <img src={brookie} alt="brookie" />
                        </NavLink>
                    </div>
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
}

export default Hamburguesas