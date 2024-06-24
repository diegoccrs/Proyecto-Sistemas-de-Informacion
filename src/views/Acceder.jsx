import styles from './Acceder.module.css';
import { useState, useEffect } from 'react';
import { useUser } from '../context/user';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 
import {routes} from '../constants/routes';
import { NavLink, Outlet } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';



export default function Acceder() {
    const navigate = useNavigate();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            navigate("/");
        }
        });
    }, []);
    return (
        <div className={styles.d}>
            <header className={styles.header}>
                <p>Registro</p>
                <hr className={styles.linea_horizontal}/>
                <nav className={styles.nav}>
                    <NavLink
                        id='estudiante'
                        key={routes[3]["children"][0].path}
                        to={routes[3]["children"][0].path}
                        className={({ isActive }) =>
                        isActive
                            ? `${styles["nav-link"]} ${styles.active}`
                            : styles["nav-link"]
                        }
                    >
                        {routes[3]["children"][0].name}
                    </NavLink>
                    <NavLink
                        key={routes[3]["children"][1].path}
                        to={routes[3]["children"][1].path}
                        className={({ isActive }) =>
                        isActive
                            ? `${styles["nav-link"]} ${styles.active}`
                            : styles["nav-link"]
                        }
                    >
                        {routes[3]["children"][1].name}
                    </NavLink>
                </nav>
            </header>
            <Outlet/>
      </div>
    );
  }