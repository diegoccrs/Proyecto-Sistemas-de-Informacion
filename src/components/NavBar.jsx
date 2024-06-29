
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



export default function NavBar() {

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    const logout = async () => {

        await signOut(auth);
    };



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
                    <Link className={styles["nav-link"]} to="/">Inicio</Link>
                    <Link className={styles["nav-link"]} to="/menu">Menú</Link>
                    <Link className={styles["nav-link"]} to="/nosotros">Nosotros</Link>
                    <Link className={styles["nav-link"]} to="/ayuda">Ayuda</Link>
                    {user ?
                    <div>
                        <div className={styles.nav}>
                        <Link className={styles["nav-link"]} to="/perfil">Comentarios</Link>
                        <Link className={styles["nav-link"]} to="/perfil"><img className={styles.perfil} src={iglogo} alt="Logo" /></Link>
                        </div>
                        
                    </div>
                    : <Link className={`${styles["nav-link"]} ${styles.purpleLink}`} to="/acceder">Acceder</Link>}
                    
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