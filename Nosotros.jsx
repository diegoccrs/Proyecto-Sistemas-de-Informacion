import styles from './HomePage.module.css';
import styles_ from './Nosotros.module.css';

import mision from '../img/Misión.png';
import vision from '../img/Visión.png';
import nosotros from '../img/Nosotros.png';
import iglogo from '../img/iglogo.png';
import xlogo from '../img/xlogo.png';
import fondo from '../img/fondo1.png';
import ger from '../img/Gerente.png';
import rep from '../img/Represent.png';
import equipo from '../img/Equipo1.png';
import st from '../img/ST.png';
import st1 from '../img/ST1.png';
import st3 from '../img/ST3.png';
import st4 from '../img/ST4.png';
import st5 from '../img/ST5.png';
import st6 from '../img/ST6.png';
import st7 from '../img/ST7.png';
import st8 from '../img/ST8.png';

function Nosotros() {
    return (
        <div>
            <div className={styles.slogan}>
                <h1>Historia <span className={styles_.colored}>conmovedora</span> de nuestro local</h1>
            </div>

            <section className={styles_.Inicio}>

                <div>
                    <img src={nosotros} alt="nosotros" />
                </div>

                <div>
                    <h2>¿Quiénes Somos?</h2>
                    <h3>Local de comida rápida en la UNIMET especializado en hamburguesas, sándwiches y carnes</h3>
                    <h3>
                    Desde nuestro primer día de operaciones, Deli Pernil ha ofrecido al público una gran variedad de platillos a precios incomparables. Nuestra tienda virtual es sinónimo de calidad, por lo que te garantizamos contar con un menú que sea perfectamente adaptable al cliente y a cualquier presupuesto. Echa un vistazo y empieza a comprar hoy mismo.
                    </h3>
                </div>



            </section>

            <section className={styles_.Inicio2}>
                
                <div>
                    <h2>Conoce al Equipo</h2>
                    <h3>
                    Lo que hace que Deli Pernil brindemos un excelente servicio, es nuestro equipo de profesionales. En esta sección podrás conocer un poco más sobre las personas que se encargan de que tu experiencia sea la mejor.
                    </h3>
                </div>

                <div>
                    <img src={equipo} alt="equipo" />
                </div>


            </section>

            <div className={styles_.Inicio3}>
                
                <div className={styles_.Inicios3}>
                    <img src={ger} alt="ger" />

                    <h2>C. Contreras</h2>
                    <h3 className={styles_.g}>Gerente</h3>
                    <h3>
                    Este miembro del equipo aporta su experiencia profesional y alegría
                    </h3>
                    <h3>
                    al trabajo. Es difícil imaginar dónde estaríamos sin nuestro(a) Gerente
                    </h3>
                </div>

                <div className={styles_.Inicios3}>
                    
                    <img src={rep} alt="rep" />


                    <h2>A. Cifuentes</h2>
                    <h3 className={styles_.g}>Representante de servicio al cliente</h3>
                    <h3>
                    Tenemos mucha suerte al contar con un excelente Representante de servicio
                    </h3>
                    <h3>
                    al cliente. No cabe duda que tomamos la mejor decisión cuando</h3>
                    <h3>
                    incorporamos a A. Cifuentes a nuestro equipo de trabajo.
                    </h3>
                </div>


            </div>


            <section className={styles_.Inicio4}>

                <div>
                    <img src={st1} alt="st1" />
                </div>
                <div>
                    <h2>Soporte Técnico</h2>
                </div>
                <div>
                    <img src={st} alt="st" />
                </div>

            </section>

            <section className={styles_.Inicio5}>
                
                <div className={styles_.Inicios5}>
                    <img src={st5} alt="st5" />

                    <h2>Diego Cáceres</h2>
                    <h3 className={styles_.g}>Gerente</h3>
                </div>

                <div className={styles_.Inicios5}>
                    <img src={st4} alt="st4" />
                    <h2>Giselle Esclasans</h2>
                    <h3 className={styles_.g}>Líder de Proyecto</h3>
                </div>

                <div className={styles_.Inicios5}>
                    <img src={st7} alt="st7" />
                    <h2>Diego Goncalves</h2>
                    <h3 className={styles_.g}>Levantamiento de Información</h3>
                </div>

                <div className={styles_.Inicios5}>                    
                    <img src={st3} alt="st3" />
                    <h2>Sebastian Hernandez</h2>
                    <h3 className={styles_.g}>Seguridad</h3>
                </div>        
                
                <div className={styles_.Inicios5}>
                    <img src={st8} alt="st8" />

                    <h2>Victor Martinez </h2>
                    <h3 className={styles_.g}>Mantenimiento</h3>
                </div>

                <div className={styles_.Inicios5}>                    
                    <img src={st6} alt="st6" />
                    <h2>Virginia Torrealba</h2>
                    
                    <h3 className={styles_.g}>Diseño</h3>
                </div>

            </section>

                    
            <section className={styles_.MV}>


                <div className={styles_.MVs}>
                    <img src={mision} alt="mision" />
                </div>

                <div className={styles_.MVs}>
                    <h2>Misión</h2>                
                    <h3>
                        Crecer como empresa y día a día, ser capaces de innovar en los platos que servimos sin disminuir la calidad que nos caracteriza desde hace años.
                    </h3>                        
                </div>


                <div className={styles_.MVs}>
                    <img src={vision} alt="vision" />
                </div>

                <div className={styles_.MVs}>
                    <h2>Visión</h2>
                        <h3>Ofrecer a los miembros de la universidad metropolitana una alternativa de comida rápida, de calidad y de un precio accesible para que todos puedan disfrutar de nuestras delicias.</h3>
                </div>

            


            </section>

            
            <div className={styles.contactos} style={{ backgroundImage: `url(${fondo})` }}>
                <div className={styles.containerContactos}>
                    <h1><span className={styles_.call}>Llámanos</span></h1>                            
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