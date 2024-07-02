import styles from './Compra.module.css';
//import c1 from '../img/View.png';
//import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';

import { Link } from "react-router-dom";


function Compra() {
    return (
        <div>
            <div className= {styles.slogan}>
                <h1>Finalización de Compra <span className={styles.colored}></span> </h1>
            </div>

            <div className={styles.pasos}>

                <div className={styles.uno}>
                    <h1>1.  Registrarse</h1>
                    <h2>Para comprar este plan y utilizar sus beneficios en el futuro, inicia sesión en tu cuenta o regístrate.</h2>

                    <Link className={`${styles["nav-link"]} ${styles.purpleLink}`} to="/acceder">Registrarse</Link>

                    <Link to="/login" className={styles.loginButton}>Iniciar Sesion</Link>



                </div>

                <div className={styles.dos}>
                    <h1>2. Pago</h1>                    
                </div>              

            </div>


            <div className={styles.contactos} style={{ backgroundImage: `url(${fondo})` }}>                            
                <div className={styles.containerContactos}>
                    <h1>Llámanos</h1>
                    <h2> <a href="https://maps.app.goo.gl/GTvtRsQVo77zFdKL8"> Caracas 1073, Miranda, Universidad Metropolitana de Caracas</a></h2>
                    <h2> delipernil@gmail.com</h2>
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

export default Compra;