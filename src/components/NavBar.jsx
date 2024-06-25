import styles from "./NavBar.module.css"
import { Link, NavLink } from "react-router-dom";
import {routes} from "../constants/routes"
import { useUser } from "../context/user";
import logo from '../img/Logo.png';
import mlogo from '../img/LogoMonigotech.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import { logOut} from '../controllers/auth';



export default function NavBar() {

    const {user, setUser} = useUser();
    console.log("User:", user); 
        return(
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={logo} alt="Logo" />
                    <h2>Deli Pernil</h2>
                    <img className={styles.mlogo} src={mlogo} alt="Logo" />
                    <div className={styles.container}>
                        <img className={styles.social} src={iglogo} alt="Logo" />
                        <img className={styles.social} src={xlogo} alt="Logo" />
                    </div>
                </div>
            
                <div className={styles.line}></div>
            
            <nav className={styles.nav}>
            {user ? (
                <>
                <div>hola</div>
                <NavLink
                    key={routes[0].path}
                    to={routes[0].path}
                    className={({ isActive }) =>
                    isActive
                        ? `${styles["nav-link"]} ${styles.active}`
                        : styles["nav-link"]
                    }
                >
                    {routes[0].name}
                </NavLink>

                <NavLink
                    key={routes[1].path}
                    to={routes[1].path}
                    className={({ isActive }) =>
                    isActive
                        ? `${styles["nav-link"]} ${styles.active}`
                        : styles["nav-link"]
                    }
                >
                    {routes[1].name}
                </NavLink>

                <NavLink
                    key={routes[2].path}
                    to={routes[2].path}
                    className={({ isActive }) =>
                    isActive
                        ? `${styles["nav-link"]} ${styles.active}`
                        : styles["nav-link"]
                    }
                >
                    {routes[2].name}
                </NavLink>


                <NavLink
                    key={routes[3].path}
                    to={routes[3].path}
                    className={({ isActive }) =>
                    isActive
                        ? `${styles["nav-link"]} ${styles.active}`
                        : styles["nav-link"]
                    }
                >
                    {routes[3].name}
                </NavLink>

                <NavLink
                    key={routes[6].path}
                    to={routes[6].path}
                    className={({ isActive }) =>
                    isActive
                        ? `${styles["nav-link"]} ${styles.active}`
                        : styles["nav-link"]
                    }
                >
                    {routes[6].name}
                </NavLink>
                </>
            ) : ( 
                <>
            <NavLink
            key={routes[0].path}
            to={routes[0].path}
            className={({ isActive }) =>
                isActive
                ? `${styles["nav-link"]} ${styles.active}`
                : styles["nav-link"]
            }
            >
            {routes[0].name}
            </NavLink>

            <NavLink
            key={routes[1].path}
            to={routes[1].path}
            className={({ isActive }) =>
                isActive
                ? `${styles["nav-link"]} ${styles.active}`
                : styles["nav-link"]
            }
            >
            {routes[1].name}
            </NavLink>

            <NavLink
            key={routes[2].path}
            to={routes[2].path}
            className={({ isActive }) =>
                isActive
                ? `${styles["nav-link"]} ${styles.active}`
                : styles["nav-link"]
            }
            >
            {routes[2].name}
            </NavLink>

            <NavLink
            key={routes[3].path}
            to={routes[3].path}
            className={({ isActive }) =>
                isActive
                ? `${styles["nav-link"]} ${styles.active}`
                : styles["nav-link"]
            }
            >
            {routes[3].name}
            </NavLink>

            <NavLink
                key={routes[4].path}
                to={routes[4].path}
                className={`${styles["nav-link"]} ${styles.active} ${styles.purpleLink}`}
                >
                {routes[4].name}
                </NavLink>
            </>
            )}

            {user && ( 
                
        
            <NavLink onClick={() => logOut()}
                className={({ isActive }) =>
                isActive
                    ? styles["nav-link"]
                    : styles["nav-link"]
                }
            >
                Log Out
            </NavLink>

            )}

            </nav>
            </header>
            );
        }
   