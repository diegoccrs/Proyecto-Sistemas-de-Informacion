import { useNavigate } from 'react-router-dom';
import styles from './PedidosActuales.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';


function PedidosActuales() {
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
    const pedidosActivos = pedidos.filter((pedido) => pedido.activo);
    console.log(pedidosActivos);
    if (pedidosActivos.length === 0) {
      return <p>No hay pedidos activos.</p>;
    }
  
    return pedidosActivos.map((pedido) => (
      <div key={pedido.id} className={styles.pedidoContainer}>
        
        <p>Email del Cliente: {pedido.emailCliente}</p>
        <p>Nombre del Cliente: {usuarios[pedido.emailCliente]?.nombreCompleto}</p>
      </div>
    ));
  };

  const navigate = useNavigate();

  return (
    
    <div className={styles.pag}>
      {localStorage.getItem("admin") != "true" ?
      navigate("/acceder")
      :
      <>

      <div className={styles.pedidosActualesContainer}>
      <h2 className={styles.pedidosActualesTitle}>Pedidos Actuales</h2>
      </div>

      
        {pedidos.length > 0 ? (
            <div className={styles.menu}>{renderPedidos()}</div>
           
          ) : (
            <p>No hay pedidos actuales.</p>  )}
    
        </>}

    </div>
  );
}

export default PedidosActuales