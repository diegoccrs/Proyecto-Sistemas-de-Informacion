import { useUser } from '../context/user';
import { Link, NavLink } from "react-router-dom";
import { auth } from '../firebase';
import styles from './HomePage.module.css';
import { routes } from "../constants/routes";

const HomePage = () => {
    const { user } = useUser();
  
    return (
      <div>
        <div className= {styles.slogan}>
            <h1>Si te gusta <span className={styles.colored}>recomiéndanos.</span> </h1>
            <h1> ¡Si no, también para que otro pase rabia! </h1>
        </div>
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