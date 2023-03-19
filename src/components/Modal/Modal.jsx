import css from './Modal.module.css'
import { Component } from 'react'
import PropTypes from 'prop-types';
export class Modal extends Component {
  state = {}

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC)

  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC)

  }
  handleClick = e => {
    if (e.target.nodeName === 'DIV') this.props.closeModal()
  }
  handlePressESC = (e) => {

    if (e.code === 'Escape') this.props.closeModal()
  }

  render() {
    const { url } = this.props
    return (
      <div data-set='overlay' className={css.Overlay} onClick={this.handleClick}>
        <div className={css.Modal}>
          <img src={url} alt="" />
        </div>
      </div>
    )
  }
}
Modal.propTypes = {
  url: PropTypes.string
}



