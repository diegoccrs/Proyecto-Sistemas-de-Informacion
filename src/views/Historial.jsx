import styles from './Historial.module.css';

function Historial() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Historial</h2>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div>Número</div>
          <div>CI</div>
          <div>Nombre</div>
          <div>Apellido</div>
          <div>Email</div>
          <div>Facultad</div>
          <div>Método Pago</div>
          <div>Fecha</div>
          <div>Factura</div>
        </div>
        {/* Aquí puedes agregar las filas de la tabla */}
        <div className={styles.tableRow}>
          <div>1</div>
          <div>12345678</div>
          <div>John</div>
          <div>Doe</div>
          <div>john@example.com</div>
          <div>Ingeniería</div>
          <div>Tarjeta de Crédito</div>
          <div>2023-06-01</div>
          <div>123456</div>
        </div>
        {/* Agrega más filas según tus datos */}
      </div>
    </div>
  );
};

export default Historial;