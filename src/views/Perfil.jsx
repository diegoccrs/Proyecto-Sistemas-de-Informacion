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
import styles from './Perfil.module.css';
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
    };
    
    const navigate = useNavigate();
    


    return (
        <div>
            {!user ?
            navigate("/acceder")
            : <div>
                <Link className={styles["nav-link"]} to="/" onClick={logout}>Cerrar sesión</Link>
            </div>}
        </div>
    );
}



export default Nosotros