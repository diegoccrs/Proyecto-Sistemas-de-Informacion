import styles from './Menu.module.css';

function Menu() {
    return (
        <div>
            <div className= {styles.slogan}>
                <h1>Disfruta de nuestro <span className={styles.colored}>excelente</span> menú variado</h1>
            </div>
        </div>
    );
};

export default Menu