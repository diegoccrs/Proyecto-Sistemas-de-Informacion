import styles from './HomePage.module.css';

function Nosotros() {
    return (
        <div>
            <div className= {styles.slogan}>
                <h1>Historia <span className={styles.colored}>conmovedora</span> de nuestro local</h1>
            </div>
        </div>
    );
};

export default Nosotros