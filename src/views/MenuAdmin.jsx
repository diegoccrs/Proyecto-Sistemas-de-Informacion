import styles from './HomePage.module.css';
import { firestoreDB } from '../firebase-config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';



function MenuAdmin() {
    const [categoriaName, setCategoriaName] = useState('');
    const [platilloName, setPlatilloName] = useState('');
    const [platilloDescription, setPlatilloDescription] = useState('');
    const [platilloPrice, setPlatilloPrice] = useState(0);
    const [disponibleC, setDisponibleC] = useState(false);
    const [disponibleP, setDisponibleP] = useState(false);

    async function addCategoria() {
        if (!categoriaName.trim()) {
            console.error("The category name cannot be empty");
            return;
        }

        try {
            const docRef = doc(firestoreDB, "Categoria", categoriaName); 
            await setDoc(docRef, {
                Categoria: categoriaName, 
                disponible: true,
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

    
      const updateDisponibleC = async (categoriaId) => {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
          
  
          await updateDoc(categoriaDocRef, {
            disponible: !disponibleC
          });
          console.log("Document successfully updated!");
          setDisponibleC(!disponibleC); 
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      };


      async function editC() {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaName);
          
  
          await updateDoc(categoriaDocRef, {
            Categoria: categoriaName,
          });
          console.log("Document successfully updated!");
          
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      };
      

      const updateDisponibleP = async (categoriaId) => {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaId);
          const platillosCollectionRef = collection(categoriaDocRef, "Platillos");
  
          await updateDoc(doc(platillosCollectionRef, platilloName), {
            disponible: !disponibleP
          });
          console.log("Document successfully updated!");
          setDisponibleP(!disponibleP); 
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      };


      async function editP() {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaName);
          const platillosCollectionRef = collection(categoriaDocRef, "Platillos");
  
          await updateDoc(doc(platillosCollectionRef, platilloName), {
            disponible: platilloDescription,
            nombre: platilloName,
            precio: platilloPrice,
            
          });
          console.log("Document successfully updated!");
          
        } catch (error) {
          console.error("Error updating document: ", error);
        }
      };
      
      async function deleteCategoria() {
        try {
          const categoriaDocRef = doc(firestoreDB, "Categoria", categoriaName);
          await deleteDoc(categoriaDocRef);
          console.log("Categoria successfully deleted!");
        } catch (error) {
          console.error("Error deleting categoria: ", error);
        }
      };


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

          <button onClick={deleteCategoria}>Borrar Categoria</button>
    
          <input
            type="text"
            value={platilloName}
            onChange={(e) => setPlatilloName(e.target.value)}
            placeholder="Enter Platillo Name"
          />
          <button onClick={addPlatilloHandler}>Add Platillo</button>

          <button onClick={addPlatilloHandler}>Borrar Platillo</button>

          <h1>Disponibilidad de Una Categoría</h1>
          <button onClick={() => updateDisponibleC(categoriaName)}>
          {disponibleC ? "Encendido" : "Apagado"}
          </button>

          <h1>Disponibilidad de Un Platillo</h1>
          <button onClick={() => updateDisponibleP(categoriaName)}>
          {disponibleP ? "Encendido" : "Apagado"}
          </button>


          <input
            type="text"
            value={platilloDescription}
            onChange={(e) => setPlatilloDescription(e.target.value)}
            placeholder="Enter Platillo Description"
          />

          <input
            type="number"
            value={platilloPrice}
            onChange={(e) => setPlatilloPrice(e.target.value)}
            placeholder="Enter Platillo Price"
          />

          <button onClick={editC}>Editar Categoria</button>

          <button onClick={editP}>Editar Platillo</button>


          
        </div>
      );
    }
    

export default MenuAdmin