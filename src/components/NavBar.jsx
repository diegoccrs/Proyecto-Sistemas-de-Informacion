import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config.js'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import logo from '../img/Logo.png'



export default function NavBar() {

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    return(
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="DeliPernil" />
                <h2>Deli Pernil</h2>
            </div>
            <div className={styles.nav}>
                <Link className={styles["nav-link"]} to="/">Inicio</Link>
                <Link className={styles["nav-link"]} to="/menu">Menú</Link>
                <Link className={styles["nav-link"]} to="/nosotros">Nosotros</Link>
                <Link className={styles["nav-link"]} to="/ayuda">Ayuda</Link>
                <Link className={styles["nav-link"]} to="/acceder">Acceder</Link>
                <Link className={styles["nav-link"]} to="/">{user?.email || 'None'}</Link>
            </div>
        </div>
    );
};
   