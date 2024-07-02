import styles from './HomePage.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc } from 'firebase/firestore';
import { useState } from 'react';



function MenuAdmin() {
    const [categoriaName, setCategoriaName] = useState('');
    const [platilloName, setPlatilloName] = useState('');

    async function addCategoria() {
        if (!categoriaName.trim()) {
            console.error("The category name cannot be empty");
            return;
        }

        try {
            const docRef = doc(firestoreDB, "Categoria", categoriaName); 
            await setDoc(docRef, {
                Categoria: categoriaName, 
            });
            console.log("Document written with ID: ", categoriaName);
            setCategoriaName('');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    
    async function addPlatillo(categoriaId) {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
          const platillosCollectionRef = collection(categoriaDocRef, "Platillos");
      
          await setDoc(doc(platillosCollectionRef, platilloName), {
            nombre: platilloName,
            tipo: categoriaName,
            descripcion: "Descripcion del platillo",
            precio: 0,
            disponible: true,
          });
      
          console.log("Platillo added to 'Platillos' subcollection with ID: ", platilloName);
          setPlatilloName('');
        } catch (e) {
          console.error("Error adding platillo: ", e);
        }
      }

    async function addPlatilloHandler() {
        try {
          await addPlatillo(categoriaName); 
          console.log("Platillo added successfully");
        } catch (e) {
          console.error("Error adding platillo: ", e);
        }
      }



      return (
        <div>
          <div className={styles.slogan}>
            <h1>ADMIN <span className={styles.colored}>conmovedora</span> de nuestro local</h1>
          </div>
          <input
            type="text"
            value={categoriaName}
            onChange={(e) => setCategoriaName(e.target.value)}
            placeholder="Enter Category Name"
          />
          <button onClick={addCategoria}>Add Categoria</button>
    
          <input
            type="text"
            value={platilloName}
            onChange={(e) => setPlatilloName(e.target.value)}
            placeholder="Enter Platillo Name"
          />
          <button onClick={addPlatilloHandler}>Add Platillo</button>
        </div>
      );
    }
    

export default MenuAdmin