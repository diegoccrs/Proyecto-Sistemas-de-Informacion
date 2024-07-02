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
                    {user && localStorage.getItem("admin") === "true" ?
                    <>
                        {console.log(user)}
                        {console.log(typeof localStorage.getItem("admin"))}
                        <Link className={styles["nav-link"]} to="/menuadmin">Menú</Link>
                        <Link className={styles["nav-link"]} to="/perfil"><img className={styles.perfil} src={iglogo} alt="Logo" /></Link>
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

            <div className={styles.line2} />
        </div>
    );
};
   