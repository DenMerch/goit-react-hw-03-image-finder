import css from './Button.module.css'
export const Button = ({ btnClick }) => {
    return (
        <button className={css.Button} onClick={btnClick}>Load more</button>)

}