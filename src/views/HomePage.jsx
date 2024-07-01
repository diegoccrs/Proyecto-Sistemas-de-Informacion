import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './HomePage.module.css';
import fondo from '../img/fondo1.png';
import c1 from '../img/View.png';
import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';


function HomePage() {

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



    return (
        <div>
            <div className= {styles.slogan}>
                <h1>Si te gusta <span className={styles.colored}>recomiéndanos.</span> </h1>
                <h1> ¡Si no, también para que otro pase rabia! </h1>
            </div>

            <div className={styles.bienvenido} style={{ backgroundImage: `url(${fondo})` }}>
                <img className={styles.fondo} src={fondo} alt="fondo" ></img>
                <div className={styles.container}>
                    <h1 className={styles.titulo}>Bienvenido</h1>
                    <h2>Conoce todo el menú y ofertas que ofrece Deli Pernil. Rica comida hecha en base al buen comer <div className={styles.bold}>unimetano</div>.</h2>
                    
                        <h2 className={styles.parrafo}> Hamburguesas con carne crispy</h2>
                        <h2 className={styles.parrafo}> Cachapas</h2>
                        <h2 className={styles.parrafo}> Sándwich</h2>
                        <h2 className={styles.parrafo}> Club House</h2>
                        <h2 className={styles.parrafo}> Y muho más</h2>

                    <Link className={styles.button} to="/menu">Ver Productos</Link>    
                    
                </div>
            </div>

            <div className={styles.combos}>
                
                <div className={styles.zonacombos} >
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
                                <Link className={styles.button} to="/acceder">Comprar</Link> 
      
                            </div>
                        </div>
                    </div>
                    ))}
                            
                            
                    </div>
                </div>


                <button id="nextBtn" className={styles.buttonc} onClick={nextCombo}>&gt;</button>
                <div className={styles.descripcioncombos}>
                    <h1 className={styles.titulo}>COMBOS</h1>
                    <h2>Deléitate con nuestros irresistibles combos a los <div className={styles.bold}>mejores precios</div>, donde cada bocado es un viaje de sabores.</h2>
                    <Link className={styles.button} to="/menu">Explorar Combos</Link> 

                </div>
                
            </div>

            <div className={styles.origenes}>
                <div className={styles.containerOrigenes}>
                    <div className={styles.descripcionorigenes}>
                        <h1 className={styles.titulo}>Nuestros Orígenes</h1>
                        <h2>Cómo llegamos aquí .</h2>
                        <h3>Deli Pernil</h3>
                        <Link className={styles.button} to="/nosotros">Conócenos</Link> 
      
                    </div>
                    <div className={styles.imagenorigenes}>
                        <img  src={local} alt="local" />
                    </div>
                </div>
            
            </div>

            <div className={styles.menu}>
                <div className={styles.titulomenu}>
                    <h1>Nuestro Menú</h1>
                </div>
                <div className={styles.cartasmenu}>
                    <Link className={styles.cartamenu} to="/menu/hamburguesas">
                        <img  src={local} alt="local" />
                        <h1 className={styles.titulocarta}>Hamburguesa</h1>
                    </Link>
                    <Link className={styles.cartamenu} to="/menu/hamburguesas">
                        <img  src={local} alt="local" />
                        <h1 className={styles.titulocarta}>Cachapas</h1>
                    </Link>
                    <Link className={styles.cartamenu} to="/menu">
                        <img  src={local} alt="local" />
                        <h1 className={styles.titulocarta}>Club House</h1>
                    </Link>
                    <Link className={styles.cartamenu} to="/menu">
                        <img  src={local} alt="local" />
                        <h1 className={styles.titulocarta}>Parrillas</h1>
                    </Link>
                    <Link className={styles.cartamenu} to="/menu">
                        <img  src={local} alt="local" />
                        <h1 className={styles.titulocarta}>Más</h1>
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
};

export default HomePage