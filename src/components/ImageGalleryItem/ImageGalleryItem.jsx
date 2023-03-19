
import css from './ImageGalleryItem.module.css'


export const ImageGalleryItem = (item) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img src={item.item.webformatURL} alt={item.tags} />
        </li>
    )
}



