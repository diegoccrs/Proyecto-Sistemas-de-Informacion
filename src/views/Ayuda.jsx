import React from 'react'
import styles from './Ayuda.module.css';
import c1 from '../img/View.png';
import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import Map from '../img/Map.png';
import { useState, useEffect } from 'react';
//No se como importar Firestore aqui

function Ayuda() {
    const [nombre, setNombre] = useState('');       //La función utiliza el hook useState para manejar el estado de los campos del formulario: nombre, apellido, correo, telefono y problema.
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [problema, setProblema] = useState('');
    const [esAnonimo, setEsAnonimo] = useState(false); // Nuevo estado para controlar si el comentario es anónimo

    const handleSubmit = async (e) => {            // La función handleSubmit se ejecuta cuando se envía el formulario.
        e.preventDefault();                        // Previene el comportamiento predeterminado del envío del formulario usando e.preventDefault().
        try {
          await firestore.collection('comentarios').add({
            nombre: esAnonimo ? 'Anónimo' : nombre, // Usar 'Anónimo' si esAnonimo es true
            apellido: esAnonimo ? '' : apellido, // Dejar apellido vacío si es anónimo
            correo: esAnonimo ? '' : correo, // Dejar correo vacío si es anónimo
            telefono: esAnonimo ? '' : telefono, // Dejar teléfono vacío si es anónimo
            problema,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
          // Limpia los campos del formulario después del envío
          setNombre('');
          setApellido('');
          setCorreo('');
          setTelefono('');
          setProblema('');
          setEsAnonimo(false); // Restablecer esAnonimo a false después del envío
          alert('Comentario enviado exitosamente');
        } catch (error) {
          console.error('Error al enviar el comentario:', error);
          alert('Ocurrió un error al enviar el comentario. Por favor, inténtalo de nuevo.');
        }
      };
// Agrega un nuevo documento a la colección "comentarios" en Firestore con los valores de los campos del formulario y un timestamp del servidor.
// Después del envío exitoso, limpia los campos del formulario y muestra una alerta de éxito.
// En caso de error, muestra una alerta de error y registra el error en la consola.



    return (
        <div>
            <div className= {styles.slogan}>
            <h1>Contacta a nuestro equipo de ayuda</h1>
      
            </div>
            <div className={styles.formularioayuda}>
                <h1>Llena el formulario</h1>
                <div className={styles.formulario}>
                    <div className={styles.formularioInfo}>
                        <div className={styles.formulario1}>
                            <h3>Nombre</h3>
                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            <h3>Apellido</h3>
                            <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </div>
                            
                        <div className={styles.formulario2}>
                            <h3>Correo</h3>
                            <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                            <h3>Teléfono</h3>
                            <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                    </div>
                    
                    <h3>¿Cómo podemos ayudarte?</h3>
                    <input className={styles.inputC} type="text" value={problema} onChange={(e) => setProblema(e.target.value)} />
                    <div className={styles.anonimo}>
                            <input type="checkbox" checked={esAnonimo} onChange={(e) => setEsAnonimo(e.target.checked)} />
                            <label>Enviar comentario de forma anónima</label>
                    </div>
                    
                </div>
                <button className={styles.button} onClick={handleSubmit}>Enviar</button>
            </div>

            <div className={styles.contactos} style={{ backgroundImage: `url(${Map})` }}>
                <div className={styles.containerContactos}>
                    <h1>Llámanos</h1>
                    <h2>CARACAS 1073, MIRANDA, UNIVERSIDAD METROPOLITANA DE CARACAS</h2>
                    <h2>DELIPERNIL@GMAIL.COM</h2>
                    <h2>04242285852</h2>
                    <div className={styles.redesSociales}>
                        <img className={styles.social} src={iglogo} alt="Logo" />
                        <img className={styles.social} src={xlogo} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ayuda;