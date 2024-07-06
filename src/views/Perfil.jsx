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
import { auth, fireStorage } from '../firebase-config.js'
import styles from './Perfil.module.css';
//import styles from './Perfil.module.css';
//import googlelogo from '../img/google.png';
//import facebooklogo from '../img/facebook.png';


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
    };

    async function deleteClient() {
        try {
          const id = auth.currentUser.uid;
          const docRef = doc(db, "Usuario", id);
    
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

                                <Link className={styles['nav-link']} onClick={() => {scroll(0, 0)}} to="/">
                                    <p>Regresar</p>
                                </Link>
                                <Link className={styles['nav-link']} onClick={() => {scroll(0, 0)}} to="/perfil/editarperfil">
                                    <p>Editar</p>
                                </Link>
                                <Link className={styles['nav-link']} to="/" onClick={handleDeleteAndSignOut}>
                                    <p>Eliminar</p>
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