import React from 'react';
import styles from './Cliente.module.css';


function Cliente() {
  const products = [
    {
      id: 1,
      name: 'Hamburguesa Carne Clasica',
      orders: 150,
      image: burger1 ,
    },
    {
      id: 2,
      name: 'Hamburguesa Carne Salmon',
      orders: 120,
      image: burger2 ,
    },
    {
      id: 3,
      name: 'Hamburguesa Carne Clasica con Bacon',
      orders: 100,
      image: burger3 ,
    },
  ];

  return (
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
  );
};

export default Cliente
