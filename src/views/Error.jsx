import styles from './HomePage.module.css';

function Error() {
    return (
        <div>
            <div className= {styles.slogan}>
                <br />
                <br />
                <br />
                <h1><span className={styles.colored}>¡Lo sentimos!</span></h1>
                <h2>Esta página no está disponible</h2>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};

export default Error