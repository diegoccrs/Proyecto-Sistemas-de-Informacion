import styles from './MenuGeneral.module.css';
import { useState } from 'react';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';
import { NavLink } from 'react-router-dom';
import { routes } from "../constants/routes";
import parrilla from '../img/Parrilla_0.png';
import parrilla2 from '../img/Parrilla_1.png';

function Parrillas() {
     
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
                        <NavLink to="/Parrillas">
                            <h1 className={styles.titulocarta}>Parrilla de Pollo</h1>
                            <img src={parrilla} alt="parrilla" />
                        </NavLink>
                       
                    </div>
                    <div className={styles.cartamenu}>
                        <NavLink to={routes[1]["children"][3].path}>
                        <h1 className={styles.titulocarta}>Parrilla de Carne</h1> 
                        <img src={parrilla2} alt="parrilla2" />
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

export default Parrillas