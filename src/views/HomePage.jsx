import styles from './HomePage.module.css';

function HomePage() {
    return (
        <div>
            <div className= {styles.slogan}>
                <h1>Si te gusta <span className={styles.colored}>recomiéndanos.</span> </h1>
                <h1> ¡Si no, también para que otro pase rabia! </h1>
            </div>
        </div>
    );
};

export default HomePage