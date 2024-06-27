import styles from './HomePage.module.css';

function Ayuda() {
    return (
        <div>
            <div className= {styles.slogan}>
                <h1>¿Necesitas ayuda? <span className={styles.colored}>¡Contáctanos!</span> </h1>
                <h1>Estaremos encantados de atenderte</h1>
            </div>
        </div>
    );
};

export default Ayuda