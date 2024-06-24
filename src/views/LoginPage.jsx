import { useUser } from '../context/user';
import { Link, NavLink } from "react-router-dom";
import { auth } from '../firebase';
import styles from './HomePage.module.css';
import { routes } from "../constants/routes";

const HomePage = () => {
    const { user } = useUser();
    function botonIniciar(){}

    return (
      <div className={styles.container}>
        <div>
            <h1> Iniciar Sesión </h1>
        </div>
        <h2>E-mail</h2>
        <input type="text" />
        <h2>Contraseña</h2>
        <input type="text" />
        <button className={styles.button} onClick={() => botonIniciar()}>Iniciar</button>
        <nav className={styles.nav}>
          
          {user ? (
            <NavLink
              to={routes[4].path}
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              {routes[4].name}
            </NavLink>
          ) : null}
  
          {user ? (
            <button className={styles.logoutButton} onClick={() => auth.signOut()}>
              Log Out
            </button>
          ) : null}
        </nav>
      </div>
    );
  };
  
  export default HomePage;