import css from './ImageGallery.module.css'
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
export const ImageGallery = ({ galleryImg, imgClick }) => {
    return (
        <ul className={css.ImageGallery}>
            {galleryImg.map((item) => {
                return <ImageGalleryItem imgClick={imgClick} key={item.id} item={item} />
            })}
        </ul>
    )
}

ImageGallery.propTypes = {
    galleryImg: PropTypes.array,
    imgClick: PropTypes.func
}