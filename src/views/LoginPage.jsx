import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup
} from 'firebase/auth'
import { auth, firestoreDB, googleProvider, facebookProvider } from '../firebase-config.js'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import styles from './LoginPage.module.css';

import googlelogo from '../img/google.png';
import facebooklogo from '../img/facebook.png';
import { v4 } from 'uuid';



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
            if(!logEmail || !logPassword) {
                throw new Error("Rellene las casillas");
            }
            if(logPassword.length < 8) {
                throw new Error("Contraseña menor a 8 caractéres");
            }

            const user = await signInWithEmailAndPassword(
                auth,
                logEmail,
                logPassword);

            // console.log(user);

            const docRef = doc(firestoreDB, "Usuario", auth.currentUser.email);
            const docu = await getDoc(docRef);

            // console.log(docu.data());

            localStorage.setItem("admin", docu.data().admin);
            localStorage.setItem("email", docu.data().email);
            localStorage.setItem("nombreCompleto", docu.data().nombreCompleto);
            localStorage.setItem("telefono", docu.data().telefono);
            localStorage.setItem("facultad", docu.data().facultad);
            localStorage.setItem("imageRef", docu.data().imageRef);

            setError(null);
            setLoading(false);
            if (localStorage.getItem("admin") === "true") {
                navigate("/menuadmin");} 
            else {navigate("/")}

            scroll(0, 0);
            location.reload();
        } catch (error) {
            console.log(error.message);

            setError(error.message);
            setLoading(false);
        }
    };

    
    const loginPopupGoogle = async () => {
        setLoading(true);
        googleProvider.setCustomParameters({ prompt: 'select_account' });
        try {
            const user = await signInWithPopup(auth, googleProvider);

            // console.log(user);

            const docRef = doc(firestoreDB, "Usuario", auth.currentUser.email);
            let docu = await getDoc(docRef);
            if(!docu.data()) {
                const payload = { 
                    nombreCompleto: auth.currentUser.displayName,
                    email: auth.currentUser.email,
                    facultad: 'por definir',
                    telefono: auth.currentUser.phoneNumber,
                    admin: false,
                    pedidos: [],
                    imageRef: v4()
                };
                await setDoc(docRef, payload);
                
            }
            docu = await getDoc(docRef);

            // console.log(docu.data());

            localStorage.setItem("admin", docu.data().admin);
            localStorage.setItem("email", docu.data().email);
            localStorage.setItem("nombreCompleto", docu.data().nombreCompleto);
            localStorage.setItem("telefono", docu.data().telefono);
            localStorage.setItem("facultad", docu.data().facultad);
            localStorage.setItem("imageRef", docu.data().imageRef);

            setError(null);
            setLoading(false);
            if (localStorage.getItem("admin") === "true") {
                navigate("/menuadmin");} 
            else {navigate("/")}

            scroll(0, 0);
            location.reload();
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

            // console.log(user);

            setError(null);
            setLoading(false);
            if (localStorage.getItem("admin") === "true") {
                navigate("/menuadmin");} 
            else {navigate("/")}
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

                <div>
                    
                    <h5> ¿Olvidaste tu Contraseña?</h5>
                    


                </div>


                <div className={styles.center}>
                    <div className={styles.imageButtonsContainer}>
                        <button className={styles.imageButton} onClick={() => loginPopupGoogle()}>
                            <img src={googlelogo} alt="google" />
                        </button>
                        <button className={styles.imageButton} onClick={() => loginPopupFacebook()}>
                            <img src={facebooklogo} alt="facebook" />
                        </button>

                    </div>
                    <button className={loading? styles.buttonDisable : styles.button} onClick={login}>Iniciar Sesión</button>
                    <p className='errorSignin'>{error}</p>
                </div>
                
            </div>
        </div>
    );
}

export default IniciarSesion