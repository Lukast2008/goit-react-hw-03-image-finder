import styles from '../styles.module.css';
export const Button = (  {text, handleClickMore }  ) => {
    return <button   className={styles.button} onClick={handleClickMore}>{text}</button>
}