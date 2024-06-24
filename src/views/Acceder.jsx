import { useUser } from '../context/user';
import { Link, NavLink } from "react-router-dom";
import { auth } from '../firebase';
import styles from './HomePage.module.css';
import { routes } from "../constants/routes";

const HomePage = () => {
    const { user } = useUser();
    function botonRegistrar(){}
    
    return (
      <div className={styles.container}>
        <div>
            <h1>Registrarse</h1>
        </div>

        <h2>Nombre</h2>
        <input type="text" />
        <h2>Apellido</h2>
        <input type="text"/>
        <h2>Número de teléfono</h2>
        <input type="text"/>
        <h2>E-mail</h2>
        <input type="text"/>
        <h2>Facultad</h2>
        <input type="password" />
        <h2>Contraseña</h2>
        <input type="text" />
        <div></div>

        <h3>¿Ya estás registrado?</h3>
        <NavLink key={routes[5].path} to={routes[5].path}
            type="button" className="btn btn-primary" style={{backgroundColor: '#DD7A31', width: '7rem'}}>Iniciar Sesión
        </NavLink>

        <button className={styles.button} onClick={() => botonRegistrar()}>Registrar</button>
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