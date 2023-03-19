import { Component } from "react";
import css from './ImageGallery.module.css'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
export class ImageGallery extends Component {
    state = {}
    render() {
        const { galleryImg, imgClick } = this.props
        return (
            <ul className={css.ImageGallery}>
                {galleryImg.map((item) => {

                    return <ImageGalleryItem imgClick={imgClick} key={item.id} item={item} />
                })}
            </ul>
        )
    }
}