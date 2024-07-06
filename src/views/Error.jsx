import styles from './HomePage.module.css';
import Map from '../img/Map.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import { useState } from 'react';
import { fireStorage } from '../firebase-config';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
//import { v4 } from 'uuid';



function Error() {

    /*     TODO EL CÓDIGO COMENTADO SON PRUEBAS      */

    /*
    const [image, setImage] = useState('');
    const [imUp, setImUp] = useState(null);


    const getImg = async () => {
        const reference = ref(fireStorage, `profileImages/${imUp.name + v4()}`);
        const url = await getDownloadURL(reference);
        setImage(url);
    };

    const uploadImage = () => {
        if(imUp === null) return;
        const imgRef = ref(fireStorage, `profileImages/${imUp.name + v4()}`);
        uploadBytes(imgRef, imUp).then(() => {
            console.log('Image uploaded!')
        })
    }

    getImg()
    */


    /*
    <input type="file" onChange={() => {setImUp(event.target.files[0])}} />
    <button onClick={uploadImage}>Submit</button>
    <button onClick={() => {}}>Display</button>
    */

    return (
        <div>
            <div className= {styles.slogan}>
                <h1>La página no se ha <span className={styles.colored}>encontrado</span> o no está disponible</h1>
            </div>

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

            <div className={styles.contactos} style={{ backgroundImage: `url(${Map})` }}>
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