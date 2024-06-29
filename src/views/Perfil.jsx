

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup
} from 'firebase/auth'
import { auth, googleProvider, facebookProvider } from '../firebase-config.js'
import styles from './Perfil.module.css';

import googlelogo from '../img/google.png';
import facebooklogo from '../img/facebook.png';


function Nosotros() {
    const navigate = useNavigate();

   

    return (
        <div className={styles.pageContainer}>
            <div className={styles.boxContainer}>
                <div className={styles.titleContainer}>
                    <h2>Iniciar Sesión</h2>
                </div>
                <h2>Correo</h2>
                <input></input> 
                
                <h2>Contraseña</h2>
                <input></input>

                <div className={styles.center}>
                    
                    
                </div>
                
            </div>
        </div>
    );
}



export default Nosotros