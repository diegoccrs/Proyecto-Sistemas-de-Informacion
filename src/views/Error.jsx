import styles from './HomePage.module.css';
import fondo from '../img/fondo1.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';

import { useState, useEffect } from 'react';
import { fireStorage } from '../firebase-config';
import { ref, getDownloadURL, uploadBytes, getMetadata  } from 'firebase/storage';
import { v4 } from 'uuid';

import { firestoreDB } from '../firebase-config';
import { doc, setDoc } from 'firebase/firestore';




function Error() {
    const [categoriaName, setCategoriaName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
//almacena archivo de imagen seleccionado al usuario
    const [imUp, setImUp] = useState(null);
    

    //almacenar url de imagen
    const [image, setImage] = useState('');
    console.log(image);

    


    //función para obtener la url de descarga de la imagen
    const getImg = async () => {
        const reference = ref(fireStorage, `profileImages/${v4()}`);
        
        const url = await getDownloadURL(reference);
        console.log(url);
        setImage(url);
    };

    //función para subir la imagen
    const uploadImage = () => {
        if (imUp === null) return;
        const imgRef = ref(fireStorage, `profileImages/${v4()}`);
        
        
        uploadBytes(imgRef, imUp)
          .then(() => {
            
            console.log('Image uploaded!');
            return getDownloadURL(imgRef);
          })
          .then(() => {
            
            const categoriaRef = doc(firestoreDB, 'Categoria', categoriaName);
            return setDoc(categoriaRef, { imgRef: v4() }, { merge: true });
          })
          .catch((error) => {
            console.error('Error uploading image:', error);
          });
      };
    
      
      useEffect(() => {
        getImg();
      }, []);
    
    
    //función para obtener la url de descarga de la imagen
   




    ///////////////
      
    ////////////////
    return (
        <div>
            <div className= {styles.slogan}>
                <h1>La página no se ha <span className={styles.colored}>encontrado</span> o no está disponible</h1>
            </div>

            <input type="file" onChange={(event) => setImUp(event.target.files[0])} ></input>
            <button onClick={uploadImage}>Submit</button>
            <button onClick={() => {}}>Mostrar Imagen</button>
            <input
            type="text"
            value={categoriaName}
            onChange={(e) => setCategoriaName(e.target.value)}
            placeholder="Enter Category Name"
          />

      
            
            
            <div className={styles.errorMessage}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>Intente ingresar dentro de unos momentos o acceda a otra sección del sistema</h1>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

            <div className={styles.contactos} style={{ backgroundImage: `url(${fondo})` }}>
                <div className={styles.containerContactos}>
                    <h1>Llámanos</h1>
                    <h2>Caracas</h2>
                    <h2>delipernil</h2>
                    <h2>0424</h2>
                    <div className={styles.redesSociales}>
                        <img className={styles.social} src={iglogo} alt="Logo" />
                        <img className={styles.social} src={xlogo} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error