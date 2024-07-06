import styles from './Comentarios.module.css';
import c1 from '../img/View.png';
import local from '../img/iglogo.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import Map from '../img/Map.png';

function Ayuda() {
    

    return (
        <div>
            <div className= {styles.slogan}>
                <h1>Dejanos tu reseña</h1>
            </div>
            <div className={styles.formularioayuda }>
                <h2>Rellena las casillas con tus datos</h2>
                <div className={styles.formulario}>
                    <div className={styles.formularioInfo}>
                        <div className={styles.formulario1}>
                            <h3>Nombre</h3>
                            <input type="text" placeholder='Nombre'onChange={(event) => {
                            setNombre(event.target.value)
                            }}/>
                            <h3>Apellido</h3>
                            <input type="text" placeholder='Apellido' onChange={(event) => {
                            setApellido(event.target.value)
                            }}/>
                        </div>
                            
                        <div className={styles.formulario2}>
                            <h3>Correo</h3>
                            <input type="email" placeholder='Correo electrónico' onChange={(event) => {
                            setRegEmail(event.target.value)
                        }} />
                            <h3>Teléfono</h3>
                            <input type="number"  placeholder='Teléfono' onChange={(event) => {
                            setTelefono(event.target.value)
                        }} />
                        </div>
                    </div>
                    
                    <h3>Dinos lo que piensas</h3>
                        <input className={styles.inputting} type="text" placeholder='Dinos lo que piensas' onChange={(event) => {
                            setOpinion(event.target.value)
                            }}/>
                    
                </div>
                <button className={styles.button}>Enviar</button>
            </div>

            <div className={styles.contactos} style={{ backgroundImage: `url(${Map})` }}>
                <div className={styles.containerContactos}>
                    <h1>Llámanos</h1>
                    <h2> <a href="https://maps.app.goo.gl/GTvtRsQVo77zFdKL8"> Caracas 1073, Miranda, Universidad Metropolitana de Caracas</a></h2>
                    <h2> <a href=""></a> delipernil@gmail.com</h2>
                    <h2> <a href="tel:04242285852">0424-2285852</a></h2>
                    <div className={styles.redesSociales}>
                        <a href="https://www.instagram.com/deliunimet/"><img className={styles.social} src={iglogo} alt="Logo" /></a>
                        <a href="https://twitter.com/delipernil"><img className={styles.social} src={xlogo} alt="Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ayuda