import { useUser } from '../context/user';
import { Link, NavLink } from "react-router-dom";
import { auth } from '../firebase';
import styles from './LoginPage.module.css';
import { routes } from "../constants/routes";
import googlelogo from '../img/google.png';
import facebooklogo from '../img/facebook.png';

import { useState,useEffect } from 'react';
import { login,ingresarGoogleClient,ingresarFacebookClient } from '../controllers/auth';

import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

const HomePage = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function botonIniciar(){
        setEmailError("");
        setPasswordError("");

        if( user == null){
            if ("" === email) {
                setEmailError("Ingresa tu email");
                return;
            }
        
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                setEmailError("Ingresa un email valido");
                return;
            }
        
            if ("" === password) {
                setPasswordError("Ingresa una contraseña");
                return;
            }
        
            if (password.length < 7) {
                setPasswordError("La contraseña debe tener al menos 7 caracteres");
                return;
            }
            login(email,password);
        }else{
            alert("Actualmente hay una sesion iniciada.");
        }
    }

    async function botonIniciarGoogle(){
        if( user == null){
            ingresarGoogleClient();
        }else{
            alert("Actualmente hay una sesion iniciada.");
        }
    }

    async function botonIniciarFacebook(){
        
        if( user == null){
            //verifica las credenciales y de ser validas, cambiara el estado de user,en caso de ser un nuevo usuario lo registrara como estudiante
            ingresarFacebookClient();

        }else{
            alert("Actualmente hay una sesion iniciada.");
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            navigate("/");
        }
        });
    }, []);


    return (
    <div className={styles.pageContainer}>
        <div className={styles.boxContainer}>
            <div className={styles.titleContainer}>
                <h1> Iniciar Sesión </h1>
            </div>
        <h2>E-mail</h2>
        <input type="text" onChange={(ev) => setEmail(ev.target.value)}/>
        <label className={styles.errorLabel}>{emailError}</label>
        <h2>Contraseña</h2>
        <input type="text" onChange={(ev) => setPassword(ev.target.value)}/>
        <label className={styles.errorLabel}>{passwordError}</label>    
            <div className={styles.center}>
            <div className={styles.imageButtonsContainer}>
                        <button className={styles.imageButton} onClick={() => botonIniciarGoogle()}>
                        <img src={googlelogo} alt="google" />
                        </button>
                        <button className={styles.imageButton} onClick={() => botonIniciarFacebook()}>
                        <img src={facebooklogo} alt="facebook" />
                        </button>

                    </div>

        <button className={styles.button} onClick={() => botonIniciar()}>Iniciar</button>
        </div>
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

  