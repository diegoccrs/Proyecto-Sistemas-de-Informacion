import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase-config.js'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import logo from '../img/Logo.png'
import mlogo from '../img/LogoMonigotech.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import tlogo from '../img/tlogo.png';
import pa from '../img/PA.png';



export default function NavBar() {

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);



    return(
        <div className={`${styles.header} ${user && localStorage.getItem("admin") === "true" ? styles.adminLogoContainer : ""}`}>
            <div  className={`${styles.logoContainer} ${user && localStorage.getItem("admin") === "true" ? styles.adminLogoContainer : ""}`}>
                <img className={styles.logo} src={logo} alt="DeliPernil" />
                <img className={styles.tlogo} src={tlogo} alt="DeliPernil" />
                <img className={styles.mlogo} src={mlogo} alt="Logo" />
                <div className={styles.container}>
                    <a href="https://www.instagram.com/deliunimet/"><img className={styles.social} src={iglogo} alt="Logo" /></a>
                    <a href="https://twitter.com/delipernil"><img className={styles.social} src={xlogo} alt="Logo" /></a>

                </div>
            </div>

            <div className={`${styles.line} ${user && localStorage.getItem("admin") === "true" ? styles.adminNav : ""}`}>
                <div className={styles.nav}>
                    {user && localStorage.getItem("admin") === "true" ?
                    <>
                        {console.log(user)}
                        {console.log(typeof localStorage.getItem("admin"))}
                        <Link className={`${styles["nav-link"]} ${styles.adminLink}`} to="/menuadmin">Menú</Link>
                        <Link className={`${styles["nav-link"]} ${styles.adminLink}`} to="/historial">Historial</Link>
                        <Link className={`${styles["nav-link"]} ${styles.adminLink}`} to="/pedidosactuales">Pedidos Actuales</Link>
                        <Link className={`${styles["nav-link"]} ${styles.adminLink}`} to="/cliente">Cliente</Link>
                        <Link className={`${styles["nav-link"]} ${styles.adminLink}`} to="/perfil"><img className={styles.perfil} src={pa} alt="Logo" /></Link>
                    </>
                    : <>
                        <Link className={styles["nav-link"]} to="/">Inicio</Link>
                        <Link className={styles["nav-link"]} to="/menu">Menú</Link>
                        <Link className={styles["nav-link"]} to="/nosotros">Nosotros</Link>
                        <Link className={styles["nav-link"]} to="/ayuda">Ayuda</Link>
                    
                    {user ?
                    <div>
                        <Link className={styles["nav-link"]} to="/comentarios">Comentarios</Link>
                        <Link className={styles["nav-link"]} to="/perfil"><img className={styles.perfil} src={iglogo} alt="Logo" /></Link>
                    </div>
                    : <Link className={`${styles["nav-link-access"]} ${styles.purpleLink}`} to="/acceder">Acceder</Link>}
                    </>}

                </div>
            </div>

            <div className={`${styles.line2} ${user && localStorage.getItem("admin") === "true" ? styles.lineadmin : ""}`}/>
        </div>
    );
};
   