
import styles from '../styles.module.css';


export const ImageGalleryItem = ({ gallerylistItem , openModal}) => {
  return gallerylistItem.map(({ id, webformatURL, tags , largeImageURL}) => (
    <li id={id} className={styles.ImageGalleryItem}>
   
        <img  className={styles.ImageGalleryItemimage} id={id} src={webformatURL} alt={tags} onClick={()=>openModal({ src: largeImageURL, alt: tags})}/>

    </li>
  ));
};
