import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../firebase-config.js'



function IniciarSesion() {

    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                logEmail,
                logPassword);

            console.log(user);
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };



    return (
        <div>
            <h3>Iniciar Sesión</h3>
            <input type="email" placeholder='Correo electrónico' onChange={(event) => {
                setLogEmail(event.target.value)
            }} />
            <br />
            <input type="password" placeholder='Contraseña' onChange={(event) => {
                setLogPassword(event.target.value)
            }} />
            <br />
            <br />
            <button onClick={login}>Iniciar sesión</button>
        </div>
    );
};

export default IniciarSesion