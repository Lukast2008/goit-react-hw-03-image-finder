import styles from '../styles.module.css';
export const Button = (  {text, handleClickMore }  ) => {
    return <button   className={styles.Button} onClick={handleClickMore}>{text}</button>
}