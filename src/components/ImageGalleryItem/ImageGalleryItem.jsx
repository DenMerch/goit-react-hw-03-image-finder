
import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ item, imgClick }) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img onClick={imgClick} className={css.ImageGalleryItemImage} data-set={item.largeImageURL} src={item.webformatURL} alt={item.tags} />
        </li>
    )
}
ImageGalleryItem.propTypes = {
    item: PropTypes.object,
    imgClick: PropTypes.func
}


