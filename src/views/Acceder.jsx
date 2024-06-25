import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../firebase-config.js'



function Acceder() {

    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                regEmail,
                regPassword);

            console.log(user);
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };



    return (
        <div>
            <h3>Acceder</h3>
            <input type="email" placeholder='Correo electrónico' onChange={(event) => {
                setRegEmail(event.target.value)
            }} />
            <br />
            <input type="password" placeholder='Contraseña' onChange={(event) => {
                setRegPassword(event.target.value)
            }} />
            <br />
            <br />
            <button onClick={register}>Registrarse</button>

            <br />
            <br />

            <Link to="/login">Iniciar Sesion</Link>
        </div>
    );
};

export default Acceder