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
import { doc, deleteDoc } from 'firebase/firestore';
import { auth, fireStorage, firestoreDB } from '../firebase-config.js'
import { ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import styles from './Perfil.module.css';


function Nosotros() {

    const isAdmin = localStorage.getItem('admin') === 'true' ? true : false;

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    }, []);

    
    const logout = async () => {
        
        await signOut(auth);

        localStorage.removeItem("admin");
        localStorage.removeItem("email");
        localStorage.removeItem("nombreCompleto");
        localStorage.removeItem("telefono");
        localStorage.removeItem("facultad");
        localStorage.removeItem("imageRef");

        navigate("/");

        scroll(0, 0);
        location.reload();
    };
    
    const navigate = useNavigate();
    


    const deleteImage = async () => {
        try {
            const imageRef = ref(fireStorage, `profileImages/${localStorage.getItem("imageRef")}`);

            deleteObject(imageRef);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleDeleteAndSignOut() {
        try {
          await deleteClient();
          await deleteImage();
    
          const authInstance = getAuth();
          await deleteUser(authInstance.currentUser).then(() => {
            console.log('User deleted');
            scroll(0, 0);
            location.reload();
          }).catch((error) => {
            console.error("Error deleting user: ", error);
          });
          await signOut(authInstance);
        } catch (error) {
          console.error("Error in handleDeleteAndSignOut: ", error);
        }
    };

    async function deleteClient() {
        try {
          const id = localStorage.getItem("email");
          const docRef = doc(firestoreDB, "Usuario", id);
    
          await deleteDoc(docRef);
        } catch (error) {
          console.error("Error updating document: ", error);
        }
    };


    return (
        <div>
            {!user ?
            navigate("/acceder")
            : <div className={styles.pageContainer}>
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
                                    
                                    }} />
            
                                <h2>Apellido</h2>
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    onChange={(event) => {
                                    
                                    }} />

                                <Link className={styles['nav-link']} to="/menuadmin">
                                    Regresar
                                </Link>
                            </>
                            )}
                            
                            {!isAdmin && (
                            <>
                                <h2>Nombre Completo</h2>
                                <input
                                    disabled
                                    type="text"
                                    placeholder="Nombre"
                                    value={localStorage.getItem("nombreCompleto")}
                                    onChange={(event) => {
                                    
                                    }} />
            
                                <h2>Facultad</h2>
                                <input
                                    disabled
                                    type="text"
                                    placeholder="Facultad"
                                    value={localStorage.getItem("facultad")}
                                    onChange={(event) => {
                                    
                                    }} />
            
                                <h2>Teléfono</h2>
                                <input
                                    disabled
                                    type="number"
                                    placeholder="Teléfono"
                                    value={localStorage.getItem("telefono")}
                                    onChange={(event) => {
                                    
                                    }} />

                                <Link className={styles.buttonProf} onClick={() => {scroll(0, 0)}} to="/">
                                    <h3>Regresar</h3>
                                </Link>
                                <Link className={styles.buttonProf} onClick={() => {scroll(0, 0)}} to="/perfil/editarperfil">
                                    <h3>Editar</h3>
                                </Link>
                                <Link className={styles.buttonProf} to="/" onClick={handleDeleteAndSignOut}>
                                    <h3>Eliminar</h3>
                                </Link>

                            </>
                            )}

                            <button className={styles.button} onClick={logout}>
                                Cerrar Sesión
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}



export default Nosotros