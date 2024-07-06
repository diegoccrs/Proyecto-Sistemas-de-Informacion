import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config.js';
import { useState, useEffect } from 'react';
import {  doc,  updateDoc } from 'firebase/firestore';
import { firestoreDB } from '../firebase-config';
import PayPal from '../components/PayPal.jsx';
import styles from './Pedido.module.css';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';


import { Link } from "react-router-dom";


function ResumenPedido() {

    const [user, setUser] = useState({});
    const [totalidad, setTotalidad] = useState(0);
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);


    const handleTotal = (data) => {
        setTotalidad(data);
    };

    const handlePedidos = (data) => {
        setPedidos(data);
    };


    const deletePedidos = async () => {
        try {
            const docRef = doc(firestoreDB, "Usuario", localStorage.getItem("email"));

            await updateDoc(docRef, {
                pedidos: []
            });
            location.reload();
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div>
            <div className= {styles.slogan}>
                <h1><span className={styles.colored}>Finalización de Compra</span> </h1>
            </div>

            <hr/>

            <div className={styles.pasos}>

                <div className={!user ? styles.uno : styles.dos}>
                    <h1>1.  Registrarse</h1>
                    {!user ?
                    <>
                        <h2>Para poder comprar y disfrutar de los productos que ofrecemos</h2>
                        <h2>Regístrate o Inicia Sesión</h2>

                        <Link to="/acceder" className={styles.paypalButton}>Registrarse</Link>
                    </>
                    : 
                    <>
                    </>}
                </div>

                <div className={!user ? styles.dos : styles.uno}>
                    <h1>2. Pago</h1>  
                    {!user ? 
                    <>
                    </>
                    : 
                    <>
                        <div className={styles.rpButton}>
                            <PayPal totalPago={handleTotal} platillosCliente={handlePedidos} />
                        </div>
                            
                        <div className={styles.rp}>

                            <h1>Resumen del Pedido</h1>
                            {pedidos != [] || pedidos != [{}] ?
                                pedidos.map((obj) => {
                                    return <h2 key={obj.nombre}>{obj.nombre} - $ {obj.precio}</h2>
                                })
                            :
                            <h2>No tiene platillos a pedir</h2>}
                            <h1>Total Bs. = $ {isNaN(totalidad) ?
                            0
                            :
                            totalidad}</h1>

                            <div>
                                <button className={styles.paypalButton} onClick={() => {
                                    deletePedidos();
                                }}>Vaciar pedido</button>
                            </div>
                        </div>
                    </>}
                    

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

export default ResumenPedido;