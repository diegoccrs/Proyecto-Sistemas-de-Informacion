import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup
} from 'firebase/auth'
import { auth, googleProvider, facebookProvider } from '../firebase-config.js'
import styles from './LoginPage.module.css';

import googlelogo from '../img/google.png';
import facebooklogo from '../img/facebook.png';



function IniciarSesion() {

    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    const login = async () => {
        setLoading(true);
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                logEmail,
                logPassword);

            console.log(user);

            setError(null);
            setLoading(false);
            navigate("/");
        } catch (error) {
            console.log(error.message);

            setError(error.message);
            setLoading(false);
        }
    };

    
    const loginPopupGoogle = async () => {
        setLoading(true);
        try {
            await signInWithPopup(auth, googleProvider);

            console.log(user);

            setError(null);
            setLoading(false);
            navigate("/");
        } catch (error) {
            console.log(error.message);

            setError(error.message);
            setLoading(false);
        }
    };

    const loginPopupFacebook = async () => {
        setLoading(true);
        try {
            await signInWithPopup(auth, facebookProvider);

            console.log(user);

            setError(null);
            setLoading(false);
            navigate("/");
        } catch (error) {
            console.log(error.message);

            setError(error.message);
            setLoading(false);
        }
    };



    return (
        <div className={styles.pageContainer}>
            <div className={styles.boxContainer}>
                <div className={styles.titleContainer}>
                    <h2>Iniciar Sesión</h2>
                </div>
                <h2>Correo</h2>
                <input type="email" placeholder='Correo electrónico' onChange={(event) => {
                    setLogEmail(event.target.value)
                }} />
                
                <h2>Contraseña</h2>
                <input type="password" placeholder='Contraseña' onChange={(event) => {
                    setLogPassword(event.target.value)
                }} />

                <div className={styles.center}>
                    <div className={styles.imageButtonsContainer}>
                        <button className={styles.imageButton} onClick={() => loginPopupGoogle()}>
                            <img src={googlelogo} alt="google" />
                        </button>
                        <button className={styles.imageButton} onClick={() => loginPopupFacebook()}>
                            <img src={facebooklogo} alt="facebook" />
                        </button>

                    </div>
                    <button className={loading? styles.buttonDisable : styles.button} onClick={login}>Iniciar sesión</button>
                    <p className='errorSignin'>{error}</p>
                </div>
                
            </div>
        </div>
    );
}

export default IniciarSesion