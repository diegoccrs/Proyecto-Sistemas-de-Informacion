import styles from './HomePage.module.css';
//import mision from '../img/Misión.png';
//import vision from '../img/Visiónn.png';
//import nosotros from '../img/Nosotros.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';

function Nosotros() {
    return (
        <div>
            <div className= {styles.slogan}>
                <h1>Historia <span className={styles.colored}>conmovedora</span> de nuestro local</h1>
            </div>
            <div>
                <h2>¿Quiénes Somos?</h2>
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

export default Nosotros