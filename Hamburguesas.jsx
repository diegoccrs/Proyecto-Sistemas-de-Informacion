import styles from './Hamburguesas.module.css';
import { useState } from 'react';
//import c1 from '../img/View.png';
//import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';

//import view from '../img/View.png';
//import burger from '../img/Burger_0.png';
import burger1 from '../img/Burger_1.jpg';
import burger2 from '../img/Burger_2.webp';
import burger3 from '../img/Burger_3.png';
import burger4 from '../img/Burger_4.jfif';



import { Link } from "react-router-dom";



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

                <div className={styles.botonMenuC}>                    
                    <h1 className={styles.tituloboton}> <span className={styles.colored}>Hamburguesas</span></h1>                                 
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

            <div className={styles.categoria}>
                
                <h1 className={styles.titulo_categoria}>Hamburguesas</h1>

                <div className={styles.platillos}>

                    <div className={styles.platillos_impar}>

                        <div className={styles.imagen_plantillo_impar}>                        
                            <img src={burger1} alt="burger1" />
                        </div>                        

                        <div className={styles.Description_platillo_impar}>                            
                            <h1 className={styles.titulo_platillo}>Hamburguesa de carne clásica</h1>

                            <p>{styles.description}Descripción del Platillo</p>
                            <Link  to="/menu">
                                <button className={styles.button}>Comprar</button>
                            </Link> 
                        </div>


                    </div>


                    <div className={styles.platillos_par}>
                                       

                        <div className={styles.Description_platillo_par}>                            
                            <h1 className={styles.titulo_platillo}>Hamburguesa de carne salmón</h1>

                            <p>{styles.description}Descripción del Platillo</p>
                            <Link  to="/menu">
                                <button className={styles.button}>Comprar</button>
                            </Link> 
                        </div>

                        <div className={styles.imagen_plantillo_par}>                        
                            <img src={burger2} alt="burger2" />
                        </div> 


                    </div>


                    <div className={styles.platillos_impar}>

                        <div className={styles.imagen_plantillo_impar}>                        
                            <img src={burger3} alt="burger3" />
                        </div>                        

                        <div className={styles.Description_platillo_impar}>                            
                            <h1 className={styles.titulo_platillo}>Hamburguesa de carne clásica con bacon</h1>

                            <p>{styles.description}Descripción del Platillo</p>
                            <Link  to="/menu">
                                <button className={styles.button}>Comprar</button>
                            </Link> 
                        </div>


                    </div>


                    <div className={styles.platillos_par}>                                           

                        <div className={styles.Description_platillo_par}>                            
                            <h1 className={styles.titulo_platillo}>Hamburguesa de dos carnes clásica</h1>

                            <p>{styles.description}Descripción del Platillo</p>
                            <Link  to="/menu">
                                <button className={styles.button}>Comprar</button>
                            </Link> 
                        </div>

                        <div className={styles.imagen_plantillo_par}>                        
                            <img src={burger4} alt="burger4" />
                        </div> 


                    </div>
                           

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

export default Hamburguesas