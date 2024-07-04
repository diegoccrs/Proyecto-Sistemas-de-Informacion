import styles from './HomePage.module.css';
import fondo from '../img/fondo1.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';



function Error() {
    return (
        <div>
            <div className= {styles.slogan}>
                <h1>La página no se ha <span className={styles.colored}>encontrado</span> o no está disponible</h1>
            </div>

            <div className={styles.errorMessage}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>Intente ingresar dentro de unos momentos o acceda a otra sección del sistema</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
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
};

export default Error