
import css from './ImageGalleryItem.module.css'


export const ImageGalleryItem = ({ item, imgClick }) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img onClick={imgClick} className={css.ImageGalleryItemImage} data-set={item.largeImageURL} src={item.webformatURL} alt={item.tags} />
        </li>
    )
}



