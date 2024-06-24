import styles from "./NavBar.module.css"
import { Link, NavLink } from "react-router-dom";
import {routes} from "../constants/routes"
import { useUser } from "../context/user";
import logo from '../img/Logo.png'



export default function NavBar() {

    const {user, setUser} = useUser();

    return(
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="Logo" />
                <h2>Deli Pernil</h2>
            </div>
        
        <nav className={styles.nav}>
        {user ? (
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
                key={routes[4].path}
                to={routes[4].path}
                className={({ isActive }) =>
                isActive
                    ? `${styles["nav-link"]} ${styles.active}`
                    : styles["nav-link"]
                }
            >
                {routes[4].name}
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
        className={({ isActive }) =>
            isActive
            ? `${styles["nav-link"]} ${styles.active}`
            : styles["nav-link"]
        }
        >
        {routes[4].name}
        </NavLink>
        </>
        )}

        </nav>
        </header>
        );
    }
   