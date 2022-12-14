import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../styles.module.css';
const keyItem = nanoid()
export const ImageGallery = ({ gallery, openModal }) => {

  return (
    <ul key={keyItem} className={styles.imageGallery}>
      <ImageGalleryItem  gallerylistItem={gallery}  openModal={openModal} />
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape()).isRequired,

  openModal: PropTypes.func.isRequired
}.isRequired