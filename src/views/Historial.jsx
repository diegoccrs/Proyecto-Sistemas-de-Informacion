import { useNavigate } from 'react-router-dom';
import styles from './Historial.module.css';

import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function Historial() {

  const navigate = useNavigate();


  const [pedidos, setPedidos] = useState([]);
  const [usuarios, setUsuarios] = useState({});

  useEffect(() => {
    const obtenerPedidos = async () => {
      const querySnapshot = await getDocs(collection(firestoreDB, 'Pedidos'));
      const pedidosData = querySnapshot.docs.map((doc) => doc.data());
      setPedidos(pedidosData);
    };

    const obtenerUsuarios = async () => {
      const querySnapshot = await getDocs(collection(firestoreDB, 'Usuario'));
      const usuariosData = {};
      querySnapshot.forEach((doc) => {
        usuariosData[doc.id] = doc.data();
      });
      setUsuarios(usuariosData);
    };

    obtenerPedidos();
    obtenerUsuarios();
  }, []);


  const renderPedidos = () => {
    const pedidosActivos = pedidos.filter((pedido) => !pedido.activo);
    console.log(pedidosActivos);
    if (pedidosActivos.length === 0) {
      return <p>No hay pedidos finalizados.</p>;
    }
  
    return pedidosActivos.map((pedido) => (

      <div key={pedido.id} className={styles.tableRow} >
        <p>{usuarios[pedido.emailCliente]?.nombreCompleto}</p>
        <p>{usuarios[pedido.emailCliente]?.email}</p>
        <p>{usuarios[pedido.emailCliente]?.facultad}</p>
        <p>{usuarios[pedido.emailCliente]?.telefono}</p>

      </div>
      
    ));
  };



  return (
    <div className={styles.container}>
      {localStorage.getItem("admin") != "true" ?
      navigate("/acceder")
      :
      <>
      <h2 className={styles.title}>Historial</h2>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
         
          <div>Nombre Completo</div>
          <div>Email</div>
          <div>Facultad</div>
          <div>Teléfono</div>
    
        </div>
      
        {pedidos.length > 0 ? (
            <div>{renderPedidos()}</div>
           
          ) : (
            <p>No hay pedidos finalizados.</p>  )}
      
      </div>


      
 
      </>}

      
    </div>
  );
}

export default Historial;