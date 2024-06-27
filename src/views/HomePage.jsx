import styles from './HomePage.module.css';
import fondo from '../img/fondo1.png';
import { useState } from 'react';
import c1 from '../img/View.png';

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
                <image className={styles.fondo} src={fondo} alt="fondo" ></image>
                <div className={styles.container}>
                    <h1 className={styles.titulo}>Bienvenido</h1>
                    <h2>Conoce todo el menú y ofertas que ofrece Deli Pernil. Rica comida hecha en base al buen comer <div className={styles.bold}>unimetano</div>.</h2>
                    
                        <h2 className={styles.parrafo}> Hamburguesas con carne crispy</h2>
                        <h2 className={styles.parrafo}> Cachapas</h2>
                        <h2 className={styles.parrafo}> Sándwich</h2>
                        <h2 className={styles.parrafo}> Club House</h2>
                        <h2 className={styles.parrafo}> Y muho más</h2>

                   
                    <button className={styles.button}>Ver Productos</button>
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
                </div>
                
            </div>

            <div className={styles.origenes}>
            
            </div>

            <div className={styles.menu}>
            
            </div>

            <div className={styles.contactos}>
                
            </div>
        </div>
    );
}

export default HomePage;