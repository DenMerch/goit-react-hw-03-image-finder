import { Component } from "react";
import css from './ImageGallery.module.css'
import { fetchData } from '../Utils/FetchData'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loader } from "../Loader/Loader";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";
const INITIAL_STATE = {
    gallery: [],
    error: '',
    isLoading: false,
    page: 1,
    isModal: false,
    imgURL: ''
}
export class ImageGallery extends Component {
    state = { ...INITIAL_STATE }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.search !== this.props.search) this.setState({ ...INITIAL_STATE })
        if (prevProps.search !== this.props.search || prevState.page !== this.state.page) {
            this.setState({ isLoading: true })
            fetchData(this.props.search, this.state.page).then((data => {
                let totalHits = data.data.totalHits;
                if (totalHits !== 0) {
                    const hits = data.data.hits
                    this.setState((prevState) => ({ gallery: [...prevState.gallery, ...hits] }))
                }
                else return Promise.reject(`We can't find foto ${this.props.search}`)
            }))
                .catch((error) => { Notify.failure(error) })
                .finally(() => {
                    this.setState({ isLoading: false })
                })
        }
    }
    handleBtnClick = () => {

        this.setState({ page: this.state.page + 1 })
    };
    handleCloseModal = () => {
        this.setState({ isModal: !this.state.isModal })
    }
    handleImgClick = (e) => {
        this.setState({ isModal: !this.state.isModal, imgURL: e.target.dataset.set })
    }

    render() {
        const { gallery, isLoading, isModal } = this.state
        return (
            <>
                <ul className={css.ImageGallery}>
                    {gallery.map((item) => {

                        return <ImageGalleryItem imgClick={this.handleImgClick} key={item.id} item={item} />
                    })}
                </ul>
                {isLoading && <Loader />}
                {gallery.length > 0 && <Button btnClick={this.handleBtnClick} />}
                {isModal && <Modal url={this.state.imgURL} closeModal={this.handleCloseModal} />}
            </>
        )
    }
}