import styles from './Comentarios.module.css';
import c1 from '../img/View.png';
import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import Map from '../img/Map.png';

import { useState, useEffect } from 'react';
import {  doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';

import {  firestoreDB  } from '../firebase-config.js'


function Ayuda() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [opinion, setOpinion] = useState('');
    const [esAnonimo, setEsAnonimo] = useState(false);


    async function enviarFeedback() {
        try {
            let correoValor = correo;
            
             if (esAnonimo) {
            correoValor = "anonimo";
            }
            const docRef = doc(firestoreDB, "FeedBack", correoValor); 
            await setDoc(docRef, {
                nombreCompleto: nombre + " " + apellido,
                email: correoValor,
                comentario: opinion,
                telefono: telefono,
                anonimo: esAnonimo,
            });
            console.log("Document written with ID: ", correo);
            setNombre('');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

 

    return (
        <div>
            <div className= {styles.slogan}>
                <h1 className= {styles.slogant}>Dejanos tu reseña</h1>
            </div>
            <div className={styles.formularioayuda }>
                <h2>RELLENA LAS CASILLAS CON TUS DATOS</h2>
                <div className={styles.formulario}>
                    <div className={styles.formularioInfo}>
                        <div className={styles.formulario1}>
                            <h3>Nombre</h3>
                            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)}/>
                            <h3>Apellido</h3>
                            <input type="text"value={apellido} onChange={e => setApellido(e.target.value)}/>
                        </div>
                            
                        <div className={styles.formulario2}>
                            <h3>Correo</h3>
                            <input type="text" value={correo} onChange={e => setCorreo(e.target.value)} />
                            <h3>Teléfono</h3>
                            <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)}  />
                            

                        </div>
                        
                       
                    </div>
                    <div className={styles.anonimo}>
                                <h3>Anónimo?</h3>
                                <input
                                type="checkbox"
                                checked={esAnonimo}
                                onChange={(e) => setEsAnonimo(e.target.checked)}
                                />
                            </div>
                    
                    <h3>DINOS LO QUE PIENSAS</h3>
                        <input className={styles.inputting} type="text"alue={opinion} onChange={e => setOpinion(e.target.value)} />
                    
                </div>
                <button className={styles.button} onClick={enviarFeedback}>Enviar</button>
            </div>

            <div className={styles.contactos} style={{ backgroundImage: `url(${Map})` }}>
                <div className={styles.containerContactos}>
                    <h1>Llámanos</h1>
                    <h2> <a href="https://maps.app.goo.gl/GTvtRsQVo77zFdKL8"> Caracas 1073, Miranda, Universidad Metropolitana de Caracas</a></h2>
                    <h2> <a href=""></a> delipernil@gmail.com</h2>
                    <h2> <a href="tel:04242285852">0424-2285852</a></h2>
                    <div className={styles.redesSociales}>
                        <a href="https://www.instagram.com/deliunimet/"><img className={styles.social} src={iglogo} alt="Logo" /></a>
                        <a href="https://twitter.com/delipernil"><img className={styles.social} src={xlogo} alt="Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ayuda