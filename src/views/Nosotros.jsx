import styles from './HomePage.module.css';
import styles_ from './Nosotros.module.css';

//import mision from '../img/Misión.png';
//import vision from '../img/Visiónn.png';
//import nosotros from '../img/Nosotros.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';
import ger from '../img/Gerente.png';
import rep from '../img/Represent.png';


function Nosotros() {
    return (
        <div>
            <div className= {styles.slogan}>
                <h1>Historia <span className={styles_.colored}>conmovedora</span> de nuestro local</h1>
            </div>

            <section className= {styles_.Inicio}>

                <div>
                    <h2>¿Quiénes Somos?</h2>
                    <h3>Local de comida rápida en la UNIMET especializado en hamburguesas, sándwiches y carnes</h3>
                    <h3>
                    Desde nuestro primer día de operaciones, Deli Pernil ha ofrecido al público una gran variedad de platillos a precios incomparables. Nuestra tienda virtual es sinónimo de calidad, por lo que te garantizamos contar con un menú que sea perfectamente adaptable al cliente y a cualquier presupuesto. Echa un vistazo y empieza a comprar hoy mismo.
                    </h3>
                </div>



            </section>

            <section className= {styles_.Inicio2}>
                
                <div>
                    <h2>Conoce al Equipo</h2>
                    <h3>
                    Lo que hace que Deli Pernil brindemos un excelente servicio, es nuestro equipo de profesionales. En esta sección podrás conocer un poco más sobre las personas que se encargan de que tu experiencia sea la mejor.
                    </h3>
                </div>


            </section>

            <section className= {styles_.Inicio3}>
                
                <div>
                    <img  src={ger} alt="ger" />

                    <h2>C. Contreras</h2>
                    <h3 className= {styles_.g}>Gerente</h3>
                    <h3>
                    Este miembro del equipo aporta su experiencia profesional y alegría al trabajo. Es difícil imaginar dónde estaríamos sin nuestro(a) Gerente
                    </h3>
                </div>

                <div>
                    
                    <img  src={rep} alt="rep" />


                    <h2>A. Cifuentes</h2>
                    <h3 className= {styles_.g}>Representante de servicio al cliente</h3>
                    <h3>
                    Tenemos mucha suerte al contar con un excelente Representante de servicio al cliente. No cabe duda que tomamos la mejor decisión cuando incorporamos a A. Cifuentes a nuestro equipo de trabajo.
                    </h3>
                </div>


            </section>


            <section className= {styles_.Inicio4}>
                <div>
                    <h2>Soporte Técnico</h2>
                </div>
            </section>

            <section className= {styles_.Inicio5}>
                
                <div>
                    <img  src={ger} alt="ger" />

                    <h2>C. Contreras</h2>
                    <h3 className= {styles_.g}>Gerente</h3>
                </div>

                <div> 
                    <img  src={rep} alt="rep" />
                    <h2>A. Cifuentes</h2>
                    <h3 className= {styles_.g}>Representante de servicio al cliente</h3>
                </div>

                <div> 
                    <img  src={rep} alt="rep" />
                    <h2>A. Cifuentes</h2>
                    <h3 className= {styles_.g}>Representante de servicio al cliente</h3>
                </div>
            </section>


            <section className= {styles_.Inicio6}>

                <div>
                    
                    <img  src={rep} alt="rep" />
                    <h2>A. Cifuentes</h2>
                    <h3 className= {styles_.g}>Representante de servicio al cliente</h3>
                </div>        
                
                <div>
                    <img  src={ger} alt="ger" />

                    <h2>C. Contreras</h2>
                    <h3 className= {styles_.g}>Gerente</h3>
                </div>

                <div>
                    
                    <img  src={rep} alt="rep" />
                    <h2>A. Cifuentes</h2>
                    <h3 className= {styles_.g}>Representante de servicio al cliente</h3>
                </div>
            </section>


            
            
            <section className= {styles_.MV}>
                <div className= {styles_.M}>
                    <h2>Misión</h2>
                        
                        <h3>
                        Crecer como empresa y día a día, ser capaces de innovar en los platos que servimos sin disminuir la calidad que nos caracteriza desde hace años.
                        </h3>
                        
                </div>
                <div className= {styles_.V}>
                    <h2>Visión</h2>
                        <h3>Ofrecer a los miembros de la universidad metropolitana una alternativa de comida rápida, de calidad y de un precio accesible para que todos puedan disfrutar de nuestras delicias.</h3>
                </div>

            </section>
            
            <div className={styles.contactos} style={{ backgroundImage: `url(${fondo})` }}>
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

export default Nosotros