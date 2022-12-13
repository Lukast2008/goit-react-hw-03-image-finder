// import { Component } from "react";

import { nanoid } from 'nanoid';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../styles.module.css';

export const ImageGallery = ({ gallery, largeImage, openModal }) => {
  return (
    <ul key={nanoid()} className={styles.ImageGallery}>
      <ImageGalleryItem   key={nanoid()} gallerylistItem={gallery} largeImage={largeImage} openModal={openModal} />
    </ul>
  );
};

