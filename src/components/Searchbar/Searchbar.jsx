import { Component } from 'react';
import styles from '../styles.module.css';
import { nanoid } from "nanoid";

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleOnChange = ev => {
    this.setState({ value: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { onsubmit } = this.props;
    onsubmit(this.state);
    this.clearInput();
  };

  clearInput = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormbutton}>
            <span className={styles.SearchFormbuttonlabel}>Search</span>
          </button>

          <input
            key={nanoid()}
            className={styles.SearchForminput}
            type="text"
            placeholder="Search images and photos"
            name="onchange"
            value={this.state.value}
            onChange={this.handleOnChange}
          />
        </form>
      </header>
    );
  }
}
