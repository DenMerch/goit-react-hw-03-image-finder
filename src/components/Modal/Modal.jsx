import css from './Modal.module.css'
import { Component } from 'react'

export class Modal extends Component {
  state = {}

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC)
    window.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC)
    window.removeEventListener('click', this.handleClick)
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
      <div data-set='overlay' className={css.Overlay}>
        <div className={css.Modal}>
          <img src={url} alt="" />
        </div>
      </div>


    )
  }
}




