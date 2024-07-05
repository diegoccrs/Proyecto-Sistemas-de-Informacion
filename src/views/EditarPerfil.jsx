import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase-config.js'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./Perfil.module.css"
import perfil from '../img/Perfil.png';

import {getAdditionalUserInfo} from "firebase/auth";
import { doc, setDoc, updateDoc, deleteDoc, getDoc } from "firebase/firestore"; 
import { firestoreDB } from '../firebase-config.js'


function Perfil() {

   
    const [nombre, setName] = useState('');
    const [apellido, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [facultad, setFaculty] = useState('');
    const [telefono, setPhone] = useState('');

    const [nombrePlaceholder, setNombrePlaceholder] = useState('');
    const [apellidoPlaceholder, setApellidoPlaceholder] = useState('');
    const [emailPlaceholder, setEmailPlaceholder] = useState('');
    const [facultadPlaceholder, setFacultadPlaceholder] = useState('');
    const [telefonoPlaceholder, setTelefonoPlaceholder] = useState('');

  
    const facultadOptions = [
      'Ingeniería',
      'FACES',
      'Idiomas Modernos',
      'Derecho',
      
    ];

    


    async function modificarClient(){
        try {
          const id = auth.currentUser.uid;
          const docRef = doc(firestoreDB, "Usuario", id);
      
          await updateDoc(docRef, {
            nombre: nombre, 
            apellido: apellido, 
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
                        <input value={nombre} onChange={handleNameChange}  placeholder={nombrePlaceholder}></input>

                        <h2>Apellido</h2>
                        <input value={apellido} onChange={handleLastNameChange} placeholder={apellidoPlaceholder}></input>

                        <h2>Número de teléfono</h2>
                        <input value={telefono} onChange={handlePhoneChange} placeholder={telefonoPlaceholder}></input>

                        <h2>Email</h2>
                        <input value={email} onChange={handleEmailChange}  placeholder={emailPlaceholder}></input> 

                        <h2>Facultad</h2>
                        <input
                            type="text"
                            placeholder={facultadPlaceholder}
                            list="facultadOptions"
                            onChange={(event) => {
                                setFacultad(event.target.value);
                            }}
                            />

                        <datalist id="facultadOptions">
                        {facultadOptions.map((option) => (
                            <option key={option} value={option} />
                        ))}
                        </datalist>

                    </div>
                    
                    <div className={styles.perfil2}>
                        <h2>Foto de Perfil</h2>
                        <img className={styles.perfil} src={perfil} alt="Logo" />
                        <h2>Preferencias Alimentarias</h2>
                        <input></input> 
                        <button onClick={modificarClient}>Actualizar</button>
            
                        
                    
                        <Link className={styles["nav-link"]} to="/perfil">Regresar</Link>
                        
                    
                       
        
                    </div>
                </div>
                
                
            
                
            </div>
        </div>
    );
}



export default Perfil