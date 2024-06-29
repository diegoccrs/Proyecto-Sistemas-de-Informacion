import styles from './Ayuda.module.css';
import c1 from '../img/View.png';
import local from '../img/iglogo.png';
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
                            <h3>Nombre</h3>
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
                    
                    <h3>¿Cuéntanos en prefieres que te contactemos?</h3>
                        <input type="text"/>
                    
                </div>
                <button className={styles.button}>Contáctame</button>
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

export default Ayuda;