import { onAuthStateChanged, signOut } from 'firebase/auth'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { auth, fireStorage, firestoreDB } from '../firebase-config.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Pfp from "../img/profile-user.png"
import styles from "./Perfil.module.css";

//import {getAdditionalUserInfo} from "firebase/auth";
import { doc, setDoc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";

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

    const uploadImage = async () => {
        if(imUp == null) {
            scroll(0, 0);
            navigate("/perfil");
            location.reload();
            return;
        };
        const imgRef = ref(fireStorage, `profileImages/${localStorage.getItem("imageRef")}`);

        uploadBytes(imgRef, imUp).then(() => {
            console.log('Image uploaded!')
            scroll(0, 0);
            navigate("/perfil");
            location.reload();
        });
    };

    getImgRef();
    

    let nombreCompleto = '';
    let facultad = '';
    let telefono = '';

    const setNombreCompleto = (data) => {
        nombreCompleto = data
    }

    const setFacultad = (data) => {
        facultad = data
    }

    const setTelefono = (data) => {
        telefono = data
    }
  
    const facultadOptions = [
      'Ingeniería',
      'FACES',
      'Idiomas Modernos',
      'Derecho',
      
    ];


    async function modificarClient() {
        try {
            if(nombreCompleto.length === 0) {
                setNombreCompleto(localStorage.getItem("nombreCompleto"))
            }
            if(telefono.length === 0) {
                setTelefono(localStorage.getItem("telefono"))
            }
            if(facultad.length === 0) {
                setFacultad(localStorage.getItem("facultad"))
            }


            
            const docRef = doc(firestoreDB, "Usuario", localStorage.getItem("email"));
        
            await updateDoc(docRef, {
                nombreCompleto: nombreCompleto,
                facultad: facultad,
                telefono: telefono,
            });

            localStorage.setItem("nombreCompleto", nombreCompleto);
            localStorage.setItem("telefono", telefono);
            localStorage.setItem("facultad", facultad);

            uploadImage();

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
                        <input type='text' placeholder='Nombre completo' onChange={(event) => {
                            setNombreCompleto(event.target.value)
                        }} />

                        <h2>Teléfono</h2>
                        <input type='text' placeholder='Teléfono' onChange={(event) => {
                            setTelefono(event.target.value)
                        }} />

                        <h2>Facultad</h2>
                        <input
                            type="text"
                            list="facultadOptions"
                            placeholder='Facultad'
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
                        <img className={styles.perfil} src={userImage || Pfp} alt="Logo" />
                        <input type="file" accept="image/*" onChange={(event) => {setImUp(event.target.files[0])}} />
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