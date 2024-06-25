import { onAuthStateChanged, signOut } from 'firebase/auth'
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

    const logout = async () => {

        await signOut(auth);
    };



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
                {user ?
                <Link className={styles["nav-link"]} to="/" onClick={logout}>Cerrar sesión</Link>
                : <Link className={styles["nav-link"]} to="/acceder">Acceder</Link>}
            </div>
        </div>
    );
};
   