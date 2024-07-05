import styles from './Comprar.module.css';
//import c1 from '../img/View.png';
//import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import Map from '../img/Map.png';
import pyp from '../img/PyP.png';


import { Link } from "react-router-dom";


function ResumenPedido() {
    return (
        <div>
            <div className= {styles.slogan}>
                <h1><span className={styles.colored}>Finalización de Compra</span> </h1>
            </div>

            <hr/>

            <div className={styles.pasos}>

            <div className={styles.uno}>
                    <h1>1.  Registrarse</h1>     
                </div>

                <div className={styles.dos}>
                    <h1>2. Pago</h1>  
                    <h2>Ingrese Método de Pago</h2> 

                    <Link to="/efectivo" className={styles.purple}>Efectivo</Link>                    
                    <Link to="/paypal" className={styles.paypalButton}>Paypal</Link>
                    <img src={pyp} alt="pyp" />
                
                
                    
                    <div className={styles.rp}>

                        <h1 className={styles.titulo_rp}>Resumen del Pedido</h1>
                        <h2>Combo 1..........Combo Bs</h2>
                        <h1 >Total..........Total Bs</h1>
                    
                    </div>
                </div> 

                            

            </div>


            <div className={styles.contactos} style={{ backgroundImage: `url(${Map})` }}>                            
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

export default ResumenPedido;