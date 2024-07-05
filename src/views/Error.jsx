import styles from './HomePage.module.css';
import fondo from '../img/fondo1.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { fireStorage } from '../firebase-config';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';



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

export default Error