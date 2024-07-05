import styles from './Ayuda.module.css';
import c1 from '../img/View.png';
import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';
import Map from '../img/Map.png';

function Ayuda() {
    return (
      <div>
        <div className={styles.slogan}>
          <h1>Contacta a nuestro equipo de ayuda</h1>
        </div>
        <div className={styles.formularioayuda}>
          <h2>¿Cómo podemos ayudarte?</h2>
          <form action="https://formsubmit.co/4d0cdf48d1eea5fccba12bf350e720ce" method="POST">
            <div className={styles.formularioInfo}>
              <div className={styles.formulario1}>
                <h3>Nombre</h3>
                <input type="text" name="name"/>
                <h3>Apellido</h3>
                <input type="text" name="lastname"/>
              </div>
  
              <div className={styles.formulario2}>
                <h3>Correo</h3>
                <input type="text" name="email"/>
                <h3>Teléfono</h3>
                <input type="text" name="subject" />
              </div>
            </div>
  
            <h3>Cuéntanos tus dudas o inquietudes</h3>
            <input className={styles.inputting} type="text" name="subject"/>

            <input type="submit" value="Contáctame" className={styles.button}/>

       
            <input type="hidden" name="_captcha" value="false"/>
          </form>
         
        </div>
  
        <div
          className={styles.contactos}
          style={{ backgroundImage: `url(${Map})` }}
        >
          <div className={styles.containerContactos}>
            <h1>Llámanos</h1>
            <h2>
              <a href="https://maps.app.goo.gl/GTvtRsQVo77zFdKL8">
                Caracas 1073, Miranda, Universidad Metropolitana de Caracas
              </a>
            </h2>
            <h2>
              <a href=""></a> delipernil@gmail.com
            </h2>
            <h2>
              <a href="tel:04242285852">0424-2285852</a>
            </h2>
            <div className={styles.redesSociales}>
              <a href="https://www.instagram.com/deliunimet/">
                <img className={styles.social} src={iglogo} alt="Logo" />
              </a>
              <a href="https://twitter.com/delipernil">
                <img className={styles.social} src={xlogo} alt="Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Ayuda;