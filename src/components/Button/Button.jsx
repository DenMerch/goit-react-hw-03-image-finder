import css from './Button.module.css'
import PropTypes from 'prop-types';
export const Button = ({ btnClick }) => {
    return (
        <button className={css.Button} onClick={btnClick}>Load more</button>)

}
Button.propTypes = {
    btnClick: PropTypes.func
}