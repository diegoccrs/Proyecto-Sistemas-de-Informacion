import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup
} from 'firebase/auth'
import { auth, googleProvider, facebookProvider } from '../firebase-config.js'
import styles from './Acceder.module.css';

import googlelogo from '../img/google.png';
import facebooklogo from '../img/facebook.png';


import {getAdditionalUserInfo} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from '../firebase';



function Acceder() {

    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    const register = async () => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                regEmail,
                regPassword);

            console.log(userCredential); 
            
            const id = auth.currentUser.uid;
            const docRef = doc(db, "Usuario", id);
            const data = {
                admin: false,
                apellido: "",
                email: regEmail,
                facultad: "",
                nombre: "",
                telefono: "",
            

              
            };

            await setDoc(docRef, data, { merge: true }), 
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
            const result = await signInWithPopup(auth, googleProvider);
            const aditionalInfo = getAdditionalUserInfo(result);
            const id = auth.currentUser.uid;

            if(aditionalInfo.isNewUser){
                const docRef = doc(db, "Usuario", id);
                const data = {
                    admin: false,
                    apellido: "",
                    email:result.user.email,
                    facultad: "",
                    nombre: result.user.displayName,
                    telefono: result.user.phoneNumber,

                };
                await setDoc(docRef, data, { merge: true });
                
            }

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
            const result = await signInWithPopup(auth,facebookProvider);
            const aditionalInfo = getAdditionalUserInfo(result);
            const id = auth.currentUser.uid;

            if(aditionalInfo.isNewUser){
                const docRef = doc(db, "Usuario", id);
                const data = {
                    admin: false,
                    apellido: "",
                    email:result.user.email,
                    facultad: "",
                    nombre: result.user.displayName,
                    telefono: result.user.phoneNumber,

                };
                await setDoc(docRef, data, { merge: true });
                
            }

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
                    <h2>Registrarse</h2>
                </div>
                <div className={styles.container}>
                    <div className={styles.column}>

                        <h2>Correo</h2>
                        <input type="email" placeholder='Correo electrónico' onChange={(event) => {
                            setRegEmail(event.target.value)
                        }} />

                        <h2>Contraseña</h2>
                        <input type="password" placeholder='Contraseña' onChange={(event) => {
                            setRegPassword(event.target.value)
                        }} />
                        
                        <button className={loading? styles.buttonDisable : styles.button} onClick={register}>Registrarse</button>
                        <p className='errorSignup'>{error}</p>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.center}>
                            <h3>¿Ya estás registrado?</h3>

                            <Link to="/login" className={styles.loginButton}>Iniciar Sesion</Link>
                            <div className={styles.imageButtonsContainer}>
                                <button className={styles.imageButton} onClick={() => loginPopupGoogle()}>
                                    <img src={googlelogo} alt="google" />
                                </button>
                                <button className={styles.imageButton} onClick={() => loginPopupFacebook()}>
                                    <img src={facebooklogo} alt="facebook" />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acceder