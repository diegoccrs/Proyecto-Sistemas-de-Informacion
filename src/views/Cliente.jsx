import React from 'react';
import styles from './Cliente.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cliente() {
  const [comentarios, setComentarios] = useState([]);
  const [nombresOrdenados, setNombresOrdenados] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchComentarios = async () => {
      const querySnapshot = await getDocs(collection(firestoreDB, 'Feedback'));
      const comentariosData = querySnapshot.docs.map((doc) => doc.data());
      setComentarios(comentariosData);
    };

    fetchComentarios();
  }, []);


  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestoreDB, 'FeedBack'), (snapshot) => {
      const comentariosData = [];
      snapshot.forEach((doc) => {
        comentariosData.push({ id: doc.id, data: doc.data() });
      });
      setComentarios(comentariosData);
    });

    return () => unsubscribe();
  }, []);

  const renderComentarios = () => {
    return comentarios.map((comentarios) => (
      
      <div key={comentarios.id} className={styles.comentarioContainer} >
        <h1>Email: {comentarios.id}</h1>
        <div className={styles.comentarioinfo}>
          <h2>Nombre: {comentarios.data.nombreCompleto}</h2>
          <h3>Cometario: " {comentarios.data.comentario } " </h3>
        <h3>Teléfono: {comentarios.data.telefono}</h3>
        </div>

        
      </div>
    ));
  };

  
  useEffect(() => {
    const obtenerPedidos = async () => {
      const pedidosCollection = collection(firestoreDB, "Pedidos");
      const querySnapshot = await getDocs(pedidosCollection);
      const contadorNombres = {};
      
      
      querySnapshot.forEach((doc) => {
        const pedidosArray = doc.data().pedidos;
        pedidosArray.forEach((pedido) => {
         
          const nombrePedido = pedido.nombre;

          contadorNombres[nombrePedido] = contadorNombres[nombrePedido]
            ? contadorNombres[nombrePedido] + 1
            : 1;
          });
      
      });
      const nombresArray = Object.entries(contadorNombres);
      const nombresOrdenados = nombresArray.sort((a, b) => b[1] - a[1]);
      console.log(nombresOrdenados);
      setNombresOrdenados(nombresOrdenados);
    };
    
    obtenerPedidos();
  }, []);


  return (
    <div className={styles.pagcontainer}>
      {localStorage.getItem("admin") != "true" ?
      navigate("/acceder")
      :
      <>
      <div className={styles.container}>
        <h2 className={styles.title}>Producto Más Vendido</h2>
        <div>
          {nombresOrdenados.map((nombre) => (
                <div key={nombre[0]} className={styles.card}>
                  <p className={styles.cardTitle}>{nombre[0]}</p>
                  <p className={styles.cardOrders}>Número de pedidos: {nombre[1]}</p>
                </div>
              ))}
        </div>
      </div>
      
      <h2 className={styles.title}>Comentarios</h2>
     
      <div className={styles.containerC}>{renderComentarios()}</div>
      </>}
    </div>
  );
}


export default Cliente
