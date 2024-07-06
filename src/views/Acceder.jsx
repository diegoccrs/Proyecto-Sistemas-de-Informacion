import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup
} from 'firebase/auth'
import { auth, firestoreDB, googleProvider, facebookProvider } from '../firebase-config.js'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { v4 } from 'uuid';
import styles from './Acceder.module.css';

import googlelogo from '../img/google.png';
import facebooklogo from '../img/facebook.png';



function Acceder() {

    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState(0);
    const [facultad, setFacultad] = useState('');


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
            if(!regEmail || !regPassword || !nombre || !apellido || !facultad || telefono === 0 || !telefono) {
                throw new Error("Rellene las casillas");
            }
            if(!regEmail.includes("@correo.unimet.edu.ve", -21) && !regEmail.includes("@unimet.edu.ve", -14)) {
                throw new Error("Dominio de correo incorrecto");
            }
            if(regPassword.length < 8) {
                throw new Error("Contraseña menor a 8 caractéres");
            }
            if(telefono.length < 11 || telefono.length > 13) {
                throw new Error("Teléfono inválido");
            }

            const user = await createUserWithEmailAndPassword(
                auth,
                regEmail,
                regPassword);

            // console.log(user);

            const docRef = doc(firestoreDB, "Usuario", regEmail);
            const payload = {
                nombreCompleto: nombre + " " + apellido,
                email: regEmail,
                facultad: facultad,
                telefono: telefono,
                admin: false,
                pedidos: [],
                imageRef: v4()
            };
            await setDoc(docRef, payload);
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
            {user ?
            navigate("/")
            :
            <div className={styles.boxContainer}>
                <div className={styles.titleContainer}>
                    <h2>Registrarse</h2>
                </div>
                <div className={styles.container}>
                    <div className={styles.column}>

                        <h2>Nombre</h2>
                        <input type="text" placeholder='Nombre' onChange={(event) => {
                            setNombre(event.target.value)
                        }} />

                        <h2>Apellido</h2>
                        <input type="text" placeholder='Apellido' onChange={(event) => {
                            setApellido(event.target.value)
                        }} />

                        <h2>Facultad</h2>
                        <input type="text" placeholder='Facultad' onChange={(event) => {
                            setFacultad(event.target.value)
                        }} />

                        <h2>Teléfono</h2>
                        <input type="text" placeholder='Teléfono (XXXX-XXX-XXXX)' onChange={(event) => {
                            setTelefono(event.target.value)
                        }} />
                        
                        <button className={loading? styles.buttonDisable : styles.button} onClick={register}>Registrarse</button>
                        <p className='errorSignup'>{error}</p>
                    </div>
                    <div className={styles.column}>

                        <h2>Correo</h2>
                        <input type="email" placeholder='Correo electrónico' onChange={(event) => {
                            setRegEmail(event.target.value)
                        }} />

                        <h2>Contraseña</h2>
                        <input type="password" placeholder='Contraseña' onChange={(event) => {
                            setRegPassword(event.target.value)
                        }} />

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
            </div>}
        </div>
    );
};

export default Acceder