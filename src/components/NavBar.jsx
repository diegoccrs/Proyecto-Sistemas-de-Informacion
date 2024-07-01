import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase-config.js'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import logo from '../img/Logo.png'
import mlogo from '../img/LogoMonigotech.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import tlogo from '../img/tlogo.png'


import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions

import { db } from '../firebase';


export default function NavBar() {

    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false); 


    useEffect(() => {
        onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
               
                const userRef = doc(db, "Usuario", currentUser.uid);
                const userDoc = await getDoc(userRef);
                if (userDoc.exists() && userDoc.data().admin) {
                    setIsAdmin(true); 
                } else {
                    setIsAdmin(false); 
                }
            } else {
                setIsAdmin(false);
            }
        })
    }, []);



    return(
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="DeliPernil" />
                <img className={styles.tlogo} src={tlogo} alt="DeliPernil" />
                <img className={styles.mlogo} src={mlogo} alt="Logo" />
                <div className={styles.container}>
                    <img className={styles.social} src={iglogo} alt="Logo" />
                    <img className={styles.social} src={xlogo} alt="Logo" />
                </div>
            </div>

            <div className={styles.line}>
    <div className={styles.nav}>
        {user ? (
            isAdmin ? (
                // Admin-specific links
                <div className={styles.nav}>
                    <Link className={styles["nav-link"]} to="/admin/dashboard">Menú</Link>
                    <Link className={styles["nav-link"]} to="/admin/users">Historial</Link>
                    <Link className={styles["nav-link"]} to="/admin/reports">Pedidos Actuales</Link>
                    <Link className={styles["nav-link"]} to="/admin/settings">Clientes</Link>
                    <Link className={styles["nav-link"]} to="/perfil"><img className={styles.perfil} src={iglogo} alt="Logo" /></Link>
                </div>
            ) : (
                // Regular user links
                <div className={styles.nav}>
                    <Link className={styles["nav-link"]} to="/">Inicio</Link>
                    <Link className={styles["nav-link"]} to="/menu">Menú</Link>
                    <Link className={styles["nav-link"]} to="/nosotros">Nosotros</Link>
                    <Link className={styles["nav-link"]} to="/ayuda">Ayuda</Link>
                    <Link className={styles["nav-link"]} to="/comentarios">Comentarios</Link>
                    <Link className={styles["nav-link"]} to="/perfil"><img className={styles.perfil} src={iglogo} alt="Logo" /></Link>
                </div>
            )
        ) : (
            // Links shown if no user is logged in
            <div className={styles.nav}>
                <Link className={styles["nav-link"]} to="/">Inicio</Link>
                <Link className={styles["nav-link"]} to="/menu">Menú</Link>
                <Link className={styles["nav-link"]} to="/nosotros">Nosotros</Link>
                <Link className={styles["nav-link"]} to="/ayuda">Ayuda</Link>
                <Link className={`${styles["nav-link"]} ${styles.purpleLink}`} to="/acceder">Acceder</Link>
            </div>
        )}
    </div>
</div>

            <div className={styles.line2}></div>
        </div>
    );
}
   

/*  
{user ?
                        
                        <span className={styles["nav-link"]}>Sesión iniciada con: {user.email}</span>
                    : <></>}

    <Link className={styles["nav-link"]} to="/" onClick={logout}>Cerrar sesión</Link>
*/ 