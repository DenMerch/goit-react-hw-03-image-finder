import { Component } from "react";
import css from './Searchbar.module.css'

export class Searchbar extends Component {
    state = {
        search: '',
    }
    handleInput = e => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    handBtnSubmit = e => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.reset()
    }
    reset = () => {
        this.setState({ search: '' })
    }

    render() {
        return (
            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={this.handBtnSubmit}>
                    <button type="submit" className={css.SearchFormButton} onClick={this.handBtnSubmit}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        value={this.state.search}
                        className={css.SearchFormInput}
                        type="text"
                        name="search"
                        autoComplete="off"
                        autoFocus
                        onChange={this.handleInput}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}