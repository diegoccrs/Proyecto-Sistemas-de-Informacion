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


<<<<<<< HEAD
=======
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions

import { db } from '../firebase';

>>>>>>> 4e166552e8fa91b3969ca7918f9ef4e6913d76bd

export default function NavBar() {

    const [user, setUser] = useState({});
<<<<<<< HEAD

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
=======
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
>>>>>>> 4e166552e8fa91b3969ca7918f9ef4e6913d76bd
        })
    }, []);



    return(
<<<<<<< HEAD
        <div className={`${styles.header} ${user && localStorage.getItem("admin") === "true" ? styles.adminLogoContainer : ""}`}>
            <div  className={`${styles.logoContainer} ${user && localStorage.getItem("admin") === "true" ? styles.adminLogoContainer : ""}`}>
=======
        <div className={styles.header}>
            <div className={styles.logoContainer}>
>>>>>>> 4e166552e8fa91b3969ca7918f9ef4e6913d76bd
                <img className={styles.logo} src={logo} alt="DeliPernil" />
                <img className={styles.tlogo} src={tlogo} alt="DeliPernil" />
                <img className={styles.mlogo} src={mlogo} alt="Logo" />
                <div className={styles.container}>
                    <a href="https://www.instagram.com/deliunimet/"><img className={styles.social} src={iglogo} alt="Logo" /></a>
                    <a href="https://twitter.com/delipernil"><img className={styles.social} src={xlogo} alt="Logo" /></a>
<<<<<<< HEAD

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
                        <Link className={`${styles["nav-link"]} ${styles.adminLink}`} to="/perfil"><img className={styles.perfil} src={iglogo} alt="Logo" /></Link>
                    </>
                    : <>
                        <Link className={styles["nav-link"]} to="/">Inicio</Link>
                        <Link className={styles["nav-link"]} to="/menu">Menú</Link>
                        <Link className={styles["nav-link"]} to="/nosotros">Nosotros</Link>
                        <Link className={styles["nav-link"]} to="/ayuda">Ayuda</Link>
                    
                    {user ?
                    <div>
                        <Link className={styles["nav-link"]} to="/compra">Compra     </Link>
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
   
=======
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
>>>>>>> 4e166552e8fa91b3969ca7918f9ef4e6913d76bd
