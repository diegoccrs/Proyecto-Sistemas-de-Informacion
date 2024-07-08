

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    signInWithEmail,
    onAuthStateChanged,
    signInWithPopup
} from 'firebase/auth'
import { auth, firestoreDB } from '../firebase-config.js'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import styles from './LoginPage.module.css';



function LoginRecup() {

    const [logEmail, setLogEmail] = useState('');


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    const loginrecup = async () => {
        setLoading(true);
        try {

            const user = await signInWithEmail(
                auth,
                logEmail);

            // console.log(user);

            const docRef = doc(firestoreDB, "Usuario", auth.currentUser.email);
            const docu = await getDoc(docRef);

            // console.log(docu.data());

            localStorage.setItem("admin", docu.data().admin);
            localStorage.setItem("email", docu.data().email);

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
                
                    email: auth.currentUser.email,
                    admin: false,
                };
                await setDoc(docRef, payload);
                
            }
            docu = await getDoc(docRef);

            // console.log(docu.data());

            localStorage.setItem("admin", docu.data().admin);
            localStorage.setItem("email", docu.data().email);

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

    

    return(
        <div className={styles.Container}>
            <div className={styles.boxContainer}>
                <div className={styles.titleContainer}>
                    <h2>Recuperación de Contraseña</h2>
                </div>
                    <p>Ingrese los datos requeridos y presione " Continuar "" para establecer una Nueva Clave</p>
                    <h2>Correo</h2>           
                    <input type="email" placeholder='Correo electrónico' onChange={(event) => {
                        setLogEmail(event.target.value)
                    }} />    
                

                <div className={styles.center}>                    
                    <button>Continuar</button>
                    <p className='errorEmail'>{error}</p>
                </div>                
            </div>
        </div>
    );
    

}

export default LoginRecup
