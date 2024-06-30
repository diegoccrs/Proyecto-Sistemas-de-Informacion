import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase-config.js'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./Perfil.module.css"
import iglogo from '../img/iglogo.png';

import {getAdditionalUserInfo} from "firebase/auth";
import { doc, setDoc, updateDoc, deleteDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from '../firebase';

function Perfil() {

   
    const [nombre, setName] = useState('');
    const [apellido, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [facultad, setFaculty] = useState('');
    const [telefono, setPhone] = useState('');

  
   



    async function modificarClient(){
        try {
          const id = auth.currentUser.uid;
          const docRef = doc(db, "Usuario", id);
      
          await updateDoc(docRef, {
            nombre: nombre, // New value for the 'name' field
            apellido: apellido, // New value for the 'age' field
            email: email,
            facultad: facultad,
            telefono: telefono,
            });

        } catch (error) {
          console.error("Error updating document: ", error);
        }
      }

  



      const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

      const handleFacultyChange = (event) => {
        setFaculty(event.target.value);
      };

      const handlePhoneChange = (event) => {
        setPhone(event.target.value);
      };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.boxContainer}>
                <div className={styles.titleContainer}>
                    <h2>Perfil del Usuario</h2>
                </div>

                <div className={styles.perfil}>
                    <div className={styles.perfil1}>
                        <h2>Nombre</h2>
                        <input value={nombre} onChange={handleNameChange}></input>

                        <h2>Apellido</h2>
                        <input value={apellido} onChange={handleLastNameChange}></input>

                        <h2>Número de teléfono</h2>
                        <input value={telefono} onChange={handlePhoneChange}></input>

                        <h2>Email</h2>
                        <input value={email} onChange={handleEmailChange}></input> 

                        <h2>Facultad</h2>
                        <input value={facultad} onChange={handleFacultyChange}></input>
                    </div>
                    
                    <div className={styles.perfil2}>
                        <h2>Foto de Perfil</h2>
                        <img className={styles.perfil} src={iglogo} alt="Logo" />
                        <h2>Preferencias Alimentarias</h2>
                        <input></input> 
                        <button onClick={modificarClient}>Actualizar</button>
            
                        
                    
                        <Link className={styles["nav-link"]} to="/perfil">Regresar</Link>
                        
                    
                        <Link className={styles["nav-link"]} to="/">Eliminar</Link>
        
                    </div>
                </div>
                
                
            
                
            </div>
        </div>
    );
}



export default Perfil