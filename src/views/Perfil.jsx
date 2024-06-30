import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase-config.js'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./Perfil.module.css"
import iglogo from '../img/iglogo.png';


import { doc, deleteDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from '../firebase';
import { getAuth, deleteUser } from "firebase/auth";

function Perfil() {

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    const logout = async () => {

        await signOut(auth);
    };


    async function handleDeleteAndSignOut() {
        try {
            await deleteClient(); 
    
            const auth = getAuth();
            await deleteUser(auth.currentUser).then(() => {
           
                console.log('User deleted');
            }).catch((error) => {
          
                console.error("Error deleting user: ", error);

            });
            await signOut(auth); 
        } catch (error) {
            console.error("Error in handleDeleteAndSignOut: ", error);
        }
    }

    async function deleteClient(){
        try {
          const id = auth.currentUser.uid;
          const docRef = doc(db, "Usuario", id);
            
          await deleteDoc(docRef);

        } catch (error) {
          console.error("Error updating document: ", error);
        }
      }



    return (
        <div className={styles.pageContainer}>
            <div className={styles.boxContainer}>
                <div className={styles.titleContainer}>
                    <h2>Perfil del Usuario</h2>
                </div>

                <div className={styles.perfil}>
                    <div className={styles.perfil1}>
                        <h2>Nombre</h2>
                        <input></input>

                        <h2>Apellido</h2>
                        <input></input>  

                        <h2>Número de teléfono</h2>
                        <input></input> 

                        <h2>Email</h2>
                        <input></input> 

                        <h2>Facultad</h2>
                        <input></input> 
                    </div>
                    
                    <div className={styles.perfil2}>
                        <h2>Foto de Perfil</h2>
                        <img className={styles.perfil} src={iglogo} alt="Logo" />
                        <h2>Preferencias Alimentarias</h2>
                        <input></input> 
                        
                    
                        <Link className={styles["nav-link"]} to="/">Regresar</Link>
                        <Link className={styles["nav-link"]} to="/" onClick={logout}>Cerrar sesión</Link>
                        <Link className={styles["nav-link"]} to="/perfil/editarperfil">Editar</Link>
                        <Link className={styles["nav-link"]} to="/" onClick={handleDeleteAndSignOut}>Eliminar</Link>
        
                    </div>
                </div>
                
                
            
                
            </div>
        </div>
    );
}



export default Perfil