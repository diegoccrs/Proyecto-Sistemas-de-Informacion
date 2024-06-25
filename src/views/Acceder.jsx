import { useUser } from '../context/user';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { auth } from '../firebase';
import styles from './Acceder.module.css';
import googlelogo from '../img/google.png';
import facebooklogo from '../img/facebook.png';
import { routes } from "../constants/routes";

import { ingresarGoogleClient, registerClient, ingresarFacebookClient } from '../controllers/auth';
import { facebookProvider } from '../firebase';
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const HomePage = () => {
  const { user } = useUser();

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [faculty, setfaculty] = useState("");
  const [number, setNumber] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [lastnameError, setLastNameError] = useState("");
  const [numberError, setNumberError] = useState("");


  function botonRegistrar() {
      setEmailError("");
      setPasswordError("");
      setNameError("");
      setLastNameError("");

      if(name === ""){
        setNameError("Por favor coloca tu nombre");
        return;
    }

    if(last_name === ""){
      setLastNameError("Por favor coloca tu apellido");
      return;
    }

    if ("" === email) {
        setEmailError("Por favor coloca tu email");
        return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError("Por favor coloca un email valido");
        return;
    }

    if (!/^\d+$/.test(number)) {
        setNumberError("El teléfono no debe contener letras");
        return;
    }

    if(faculty === ""){
      setNameError("Por favor coloca tu facultad");
      return;
    }

    if ("" === password) {
        setPasswordError("Por favor ingresa una contraseña");
        return;
    }

    if (password.length < 7) {
        setPasswordError("La contraseña debe tener al menos 8 caracteres");
        return;
    }
    registerClient(name, last_name, number, email,faculty,password,name,number);

  }

  return (
    <div className={styles.pageContainer}>
        <div className={styles.boxContainer}>
          <div className={styles.titleContainer}> 
                <h1>Registrarse</h1>
            </div>
        <div className={styles.container}>
           
            <div className={styles.column}>
            <div>
                <h2>Nombre</h2>
                <input type="text" onChange={(ev) => setName(ev.target.value)}/>
                <label className={styles.errorLabel}>{nameError}</label>
                <h2>Apellido</h2>
                <input type="text" onChange={(ev) => setLastName(ev.target.value)}/>
                <label className={styles.errorLabel}>{lastnameError}</label>
                <h2>Número de teléfono</h2>
                <input type="text" onChange={(ev) => setNumber(ev.target.value)} />
                <label className={styles.errorLabel}>{numberError}</label>
                <h2>E-mail</h2>
                <input type="text" onChange={(ev) => setEmail(ev.target.value)}/>
                <label className={styles.errorLabel}>{emailError}</label>
                <h2>Facultad</h2>
                <input type="password" onChange={(ev) => setfaculty(ev.target.value)}/>
                <label className={styles.errorLabel}>{passwordError}</label>
                
            </div>
            </div>
            <div className={styles.column}>
                <div className={styles.center}>
                    <h3>¿Ya estás registrado?</h3>
                    <NavLink
                    key={routes[5].path}
                    to={routes[5].path}
                    type="button"
                    className={styles.loginButton}
                    >
                    Iniciar Sesión
                    </NavLink>

                    <div className={styles.imageButtonsContainer}>
                        <button className={styles.imageButton} onClick={() => ingresarGoogleClient()}>
                        <img src={googlelogo} alt="google" />
                        </button>
                        <button className={styles.imageButton} onClick={() => ingresarFacebookClient()}>
                        <img src={facebooklogo} alt="facebook" />
                        </button>

                    </div>
                </div>




                    <h2>Contraseña</h2>
                    <input type="text" onChange={(ev) => setPassword(ev.target.value)}/>
                
                <div className={styles.center}>
                    <button className={styles.button} onClick={() => botonRegistrar()}>
                    Registrar
                    </button>
                </div>
                
            </div>
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