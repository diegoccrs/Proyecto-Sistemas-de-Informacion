import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase-config.js'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import logo from '../img/Logo.png'
import mlogo from '../img/LogoMonigotech.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';



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
                <h2>Deli Pernil</h2>
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
                        <Link className={styles["nav-link"]} to="/" onClick={logout}>Cerrar sesión</Link>
                    </div>
                    : <Link className={styles["nav-link"]} to="/acceder">Acceder</Link>}
                    {user ?
                    <span className={styles["nav-link"]}>Sesión iniciada con: {user.email}</span>
                    : <></>}
                </div>
            </div>
        </div>
    );
};
   