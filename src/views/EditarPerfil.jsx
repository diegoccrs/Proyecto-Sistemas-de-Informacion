import { onAuthStateChanged, signOut } from 'firebase/auth'
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { auth, fireStorage, firestoreDB } from '../firebase-config.js'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import styles from "./Perfil.module.css";

import {getAdditionalUserInfo} from "firebase/auth";
import { doc, setDoc, updateDoc, deleteDoc, getDoc } from "firebase/firestore"; // Import Firestore functions
//import { db } from '../firebase';

function Perfil() {

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    const navigate = useNavigate();


    const [userImage, setUserImage] = useState('');
    const [imUp, setImUp] = useState(null);

    const getImgRef = async () => {
        try {
            const reference = ref(fireStorage, `profileImages/${localStorage.getItem("imageRef")}`);
            const url = await getDownloadURL(reference);
            setUserImage(url);
        } catch (error) {

        }
    };

    const uploadImage = () => {
        if(imUp === null) return;
        const imgRef = ref(fireStorage, `profileImages/${localStorage.getItem("imageRef")}`);

        uploadBytes(imgRef, imUp).then(() => {
            console.log('Image uploaded!')

        });
    };

    getImgRef();

   
    const [nombreCompleto, setNombreCompleto] = useState('');
    const [facultad, setFacultad] = useState('');
    const [telefono, setTelefono] = useState('');

  
    const facultadOptions = [
      'Ingeniería',
      'FACES',
      'Idiomas Modernos',
      'Derecho',
      
    ];


    async function modificarClient() {
        try {
            if(nombreCompleto === '') {
                setNombreCompleto(localStorage.getItem("nombreCompleto"))
            }
            if(telefono === '') {
                setTelefono(localStorage.getItem("telefono"))
            }
            if(facultad === '') {
                setFacultad(localStorage.getItem("facultad"))
            }

            const docRef = doc(firestoreDB, "Usuario", localStorage.getItem("email"));
        
            await updateDoc(docRef, {
                nombreCompleto: nombreCompleto,
                facultad: facultad,
                telefono: telefono,
            });

            uploadImage();

            scroll(0, 0);
            navigate("/perfil");
            location.reload();
            console.log(nombreCompleto)

        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }


    return (
        <div className={styles.pageContainer}>
            {!user ?
            navigate("/acceder")
            :
            <div className={styles.boxContainer}>
                <div className={styles.titleContainer}>
                    <h2>Perfil del Usuario</h2>
                </div>

                <div className={styles.perfil}>
                    <div className={styles.perfil1}>
                        <h2>Nombre Completo</h2>
                        <input onChange={(event) => {
                            setNombreCompleto(event.target.value)
                        }} />

                        <h2>Teléfono</h2>
                        <input onChange={(event) => {
                            setTelefono(event.target.value)
                        }} />

                        <h2>Facultad</h2>
                        <input
                            type="text"
                            list="facultadOptions"
                            onChange={(event) => {
                                setFacultad(event.target.value);
                            }} />

                        <datalist id="facultadOptions">
                        {facultadOptions.map((option) => (
                            <option key={option} value={option} />
                        ))}
                        </datalist>

                    </div>
                    
                    <div className={styles.perfil2}>
                        <h2>Foto de Perfil</h2>
                        <img className={styles.perfil} src={userImage} alt="Logo" />
                        <input type="file" accept="image/*" onChange={() => {setImUp(event.target.files[0])}} />
                        <button onClick={() => {modificarClient()}}>Actualizar</button>
            
                        
                    
                        <Link className={styles["nav-link"]} onClick={() => {
                            scroll(0, 0);
                        }} to="/perfil">Regresar</Link>
                        
                    
                       
        
                    </div>
                </div>
                
                
            
                
            </div>}
        </div>
    );
}



export default Perfil