import styles from './Comentarios.module.css';
//import c1 from '../img/View.png';
//import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';

function Ayuda() {
    return (
        <div>
            <div className= {styles.slogan}>
      
            </div>
            <div className={styles.formularioayuda}>
                <h1>Contacta a nuestro equipo de ayuda</h1>
                <h2>¿Cómo podemos ayudarte?</h2>
                <div className={styles.formulario}>
                    <div className={styles.formularioInfo}>
                        <div className={styles.formulario1}>
                            <h3 className={styles.input}>Nombre</h3>
                            <input type="text" />
                            <h3>Apellido</h3>
                            <input type="text"/>
                        </div>
                            
                        <div className={styles.formulario2}>
                            <h3>Correo</h3>
                            <input type="text"/>
                            <h3>Teléfono</h3>
                            <input type="text"  />
                        </div>
                    </div>
                    <div className={styles.formularioProb}>
                        <h3>¿Cuéntanos tu experiencia?</h3>
                        <input className={styles.inputC} type="text"/>
                    </div>
                    
                </div>
                <button className={styles.button}>Contáctanos</button>
            </div>

            <div className={styles.contactos} style={{ backgroundImage: `url(${fondo})` }}>
                <div className={styles.containerContactos}>
                    <h1>Llámanos</h1>
                    <h2>Caracas 1073, Miranda, Universidad Metropolitana de Caracas</h2>
                    <h2>delipernil@gmail.com</h2>
                    <h2>0424-2285852</h2>
                    <div className={styles.redesSociales}>
                        <img className={styles.social} src={iglogo} alt="Logo" />
                        <img className={styles.social} src={xlogo} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ayuda;