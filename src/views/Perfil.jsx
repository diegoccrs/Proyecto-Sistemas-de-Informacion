
import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import { auth, googleProvider, facebookProvider } from '../firebase-config.js'
import styles from './Acceder.module.css';
//import styles from './Perfil.module.css';
import googlelogo from '../img/google.png';
import facebooklogo from '../img/facebook.png';


function Nosotros() {

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);
    
    const logout = async () => {
        
        await signOut(auth);

        localStorage.removeItem("admin");
        localStorage.removeItem("email");
        localStorage.removeItem("nombreCompleto");
        localStorage.removeItem("telefono");
        localStorage.removeItem("facultad");

        navigate("/");

        scroll(0, 0);
        location.reload();
    };
    
    const navigate = useNavigate();
    


    return (
        <div>
            {!user ?
            navigate("/acceder")
            : <div className={styles.pageContainer}>
                <div className={styles.boxContainer}>
                    <div className={styles.titleContainer}>
                        <h2>Perfil</h2>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.column}>

                            <h2>Nombre</h2>
                            <input type="text" placeholder='Nombre' onChange={(event) => {
                                
                            }} />

                            <h2>Apellido</h2>
                            <input type="text" placeholder='Apellido' onChange={(event) => {
                                
                            }} />

                            <button className={styles.button} onClick={logout}>
                                Cerrar Sesión
                            </button>

                        </div>
                        <div className={styles.column}>

                            <h2>Facultad</h2>
                            <input type="text" placeholder='Facultad' onChange={(event) => {
                                
                            }} />

                            <h2>Teléfono</h2>
                            <input type="number" placeholder='Teléfono' onChange={(event) => {
                                
                            }} />

                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}



export default Nosotros