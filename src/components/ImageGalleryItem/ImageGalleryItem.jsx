import PropTypes from 'prop-types';
import styles from '../styles.module.css';
import { nanoid } from 'nanoid';

export const ImageGalleryItem = ({ gallerylistItem, openModal }) => {
  return gallerylistItem.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={nanoid()} id={id} className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryItemImage}
        id={id}
        src={webformatURL}
        alt={tags}
        onClick={() => openModal({ src: largeImageURL, alt: tags })}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  gallerylistItem: PropTypes.arrayOf(
    PropTypes.shape.isRequired).isRequired,
  openModal: PropTypes.func.isRequired,
}.isRequired;
