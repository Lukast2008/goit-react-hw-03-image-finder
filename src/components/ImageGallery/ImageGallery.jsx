import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../styles.module.css';

export const ImageGallery = ({ gallery, openModal }) => {
  return (
    <ul key={nanoid()} className={styles.imageGallery}>
      <ImageGalleryItem   key={nanoid()} gallerylistItem={gallery}  openModal={openModal} />
    </ul>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf.isRequired,

  openModal: PropTypes.func.isRequired
}.isRequired