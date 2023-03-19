import { Component } from "react";
import css from './ImageGallery.module.css'
import { fetchData } from '../Utils/FetchData'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loader } from "../Loader/Loader";
import { Button } from "components/Button/Button";


export class ImageGallery extends Component {
    state = {
        gallery: [],
        error: '',
        isLoading: false,
        page: 1,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.search !== this.props.search || prevState.page !== this.state.page) {
            this.setState({ isLoading: true })
            fetchData(this.props.search, this.state.page).then((data => {
                console.log(this.state);
                let totalHits = data.data.totalHits;
                if (totalHits !== 0) {
                    const hits = data.data.hits
                    // this.setState({ gallery: hits })

                    this.setState((prevState) => ({ gallery: [...prevState.gallery, hits] }))
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
    render() {
        const { gallery, isLoading } = this.state
        return (
            <>
                <ul className={css.ImageGallery}>
                    {gallery.map((item) => {

                        return <ImageGalleryItem key={item.id} item={item} />
                    })}
                </ul>
                {isLoading && <Loader />}
                <Button btnClick={this.handleBtnClick} />
            </>
        )
    }
}