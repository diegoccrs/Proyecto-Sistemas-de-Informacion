import React from 'react'

import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
    getAuth,
    deleteUser
} from 'firebase/auth'
import { auth, googleProvider, facebookProvider } from '../firebase-config.js'
import styles from './Perfil.module.css';
//import styles from './Perfil.module.css';
import googlelogo from '../img/google.png';
import facebooklogo from '../img/facebook.png';
import perfil from '../img/Perfil.png';

import { firestoreDB } from '../firebase-config.js'

import { doc, deleteDoc } from "firebase/firestore";


function Perfil() {
    const isAdmin = localStorage.getItem('admin') === 'true' ? true : false;
    const [user, setUser] = useState({});
  
    useEffect(() => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    }, []);
  
    const logout = async () => {
      await signOut(auth);
  
      // Remover todos los items del localStorage
      Object.keys(localStorage).forEach((key) => {
        localStorage.removeItem(key);
      });
  
      navigate('/');
  
      scroll(0, 0);
      location.reload();
    };
  
    const navigate = useNavigate();
  
    async function handleDeleteAndSignOut() {
      try {
        await deleteClient();
  
        const authInstance = getAuth();
        await deleteUser(authInstance.currentUser).then(() => {
          console.log('User deleted');
        }).catch((error) => {
          console.error("Error deleting user: ", error);
        });
        await signOut(authInstance);
      } catch (error) {
        console.error("Error in handleDeleteAndSignOut: ", error);
      }
    }
  
    async function deleteClient() {
      try {
        const id = auth.currentUser.uid;
        const docRef = doc(firestoreDB, "Usuario", id);
  
        await deleteDoc(docRef);
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  
    return (
      <div>
        {!user ? (
          navigate('/acceder')
        ) : (
          <div className={styles.pageContainer}>
            <div className={styles.boxContainer}>
              <div className={styles.titleContainer}>
                <h2>Perfil</h2>
              </div>
              <div className={styles.container}>
                <div className={styles.column}>
                  {isAdmin && (
                    <>
                      <h2>Nombre</h2>
                      <input
                        type="text"
                        placeholder="Nombre"
                        onChange={(event) => {
                          
                        }}
                      />
  
                      <h2>Apellido</h2>
                      <input
                        type="text"
                        placeholder="Apellido"
                        onChange={(event) => {
                          
                        }}
                      />

                        <Link className={styles['nav-link']} to="/menuadmin">
                            Regresar
                        </Link>
                    </>
                  )}
  
                  {!isAdmin && (
                    <div className={styles.container}>
                    <div className={styles.column}>
                      <h2>Nombre</h2>
                      <input
                        type="text"
                        placeholder="Nombre"
                        onChange={(event) => {
                          
                        }}
                      />
  
                      <h2>Apellido</h2>
                      <input
                        type="text"
                        placeholder="Apellido"
                        onChange={(event) => {
                          
                        }}
                      />
  
                      <h2>Facultad</h2>
                      <input
                        type="text"
                        placeholder="Facultad"
                        onChange={(event) => {
                          
                        }}
                      />
  
                      <h2>Teléfono</h2>
                      <input
                        type="number"
                        placeholder="Teléfono"
                        onChange={(event) => {
                          
                        }}
                      />
                      </div>

                      <div className={styles.column}>
                        
                        <img className={styles.perfil} src={perfil} alt="Logo" />
                        <h2>Foto de Perfil</h2>

                        <Link className={styles['nav-link']} to="/">
                            Regresar
                        </Link>
                        <Link className={`${styles["nav-link"]} ${styles.button}`} to="/perfil/editarperfil">
                            Editar
                        </Link>
                        <Link
                            className={styles['nav-link']}
                            to="/"
                            onClick={handleDeleteAndSignOut}
                        >
                            Eliminar
                        </Link>
                        </div>

                    </div>
                  )}
  
                  <button className={styles.button} onClick={logout}>
                    Cerrar Sesión
                  </button>
                </div>
                <div className={styles.column}>
                  
                 
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Perfil;