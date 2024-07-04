import styles from './PedidosActuales.module.css';

function PedidosActuales() {
  const pedidos = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', fecha: '2023-07-01' },
    { id: 2, nombre: 'María', apellido: 'González', fecha: '2023-07-02' },
    { id: 3, nombre: 'Carlos', apellido: 'Rodríguez', fecha: '2023-07-03' },
  ];

  return (
    <div className={styles.pedidosActualesContainer}>
      <h2 className={styles.pedidosActualesTitle}>Pedidos Actuales</h2>
      {pedidos.map((pedido) => (
        <div key={pedido.id} className={styles.pedidoCard}>
          <div className={styles.pedidoNumber}>{pedido.id}</div>
          <div className={styles.pedidoInfo}>
            <span>Nombre: {pedido.nombre}</span>
            <span>Apellido: {pedido.apellido}</span>
            <span>Fecha: {pedido.fecha}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PedidosActuales
