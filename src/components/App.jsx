import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchData } from './Utils/FetchData'
import { Searchbar } from "./Searchbar/Searchbar";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loader } from "./Loader/Loader";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";
const INITIAL_STATE = {
  gallery: [],
  error: '',
  isLoading: false,
  page: 1,
  isModal: false,
  imgURL: '',
  search: '',
}
let showBTN = ''
export class App extends Component {
  state = {
    ...INITIAL_STATE
  }

  componentDidUpdate(_, prevState) {
    if (prevState.search !== this.state.search) this.setState({ page: 1, gallery: [] })
    if (prevState.search !== this.state.search || prevState.page !== this.state.page) {
      this.setState({ isLoading: true })
      fetchData(this.state.search, this.state.page).then((data => {
        let totalHits = data.data.totalHits;
        if (totalHits !== 0) {
          const hits = data.data.hits
          showBTN = this.state.page < Math.ceil(totalHits / 12)
          this.setState((prevState) => ({ gallery: [...prevState.gallery, ...hits] }))
        }
        else return Promise.reject(`We can't find foto ${this.state.search}`)
      }))
        .catch((error) => { Notify.failure(error) })
        .finally(() => {
          this.setState({ isLoading: false })
        })
    }
  }
  handleSubmit = ({ search }) => {
    this.setState({ search })
  };
  handleImgClick = (e) => {
    this.setState({ isModal: !this.state.isModal, imgURL: e.target.dataset.set })
  }
  handleBtnClick = () => {

    this.setState({ page: this.state.page + 1 })
  };
  handleCloseModal = () => {
    this.setState({ isModal: !this.state.isModal })
  }

  render() {
    const { gallery, isLoading, isModal } = this.state
    return (
      <div
        style={{
          display: 'flex',
          gridGap: 16,
          paddingBottom: 24,
          flexDirection: 'column',
        }}
      >
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery galleryImg={gallery} imgClick={this.handleImgClick} />
        {isLoading && <Loader />}
        {showBTN && <Button btnClick={this.handleBtnClick} />}
        {isModal && <Modal url={this.state.imgURL} closeModal={this.handleCloseModal} />}
      </div >
    );
  }

};
