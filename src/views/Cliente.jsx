import React from 'react';
import styles from './Cliente.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function Cliente() {
  const [comentarios, setComentarios] = useState([]);

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
          <p> {comentarios.data.comentario }</p>
        <h3>Telefono: {comentarios.data.telefono}</h3>
        </div>

        
      </div>
    ));
  };

  
  const products = [
    {
      id: 1,
      name: 'Hamburguesa Carne Clasica',
      orders: 150,
     
    },
    {
      id: 2,
      name: 'Hamburguesa Carne Salmon',
      orders: 120,
      
    },
    {
      id: 3,
      name: 'Hamburguesa Carne Clasica con Bacon',
      orders: 100,
      
    },
  ];

  return (
    <div className={styles.pagcontainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Producto Más Vendido</h2>
        <div>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.name} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{product.name}</h3>
              <p className={styles.cardOrders}>Número de pedidos: {product.orders}</p>
            </div>
          ))}
        </div>
      </div>
      
      <h2 className={styles.title}>Comentarios</h2>
     
      <div className={styles.containerC}>{renderComentarios()}</div>
     
    </div>
  );
};

export default Cliente
