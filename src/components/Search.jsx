import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      { type: e.target.dataset.type },
      () => this.props.searchMovies(this.state.search, this.state.type)
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Название фильма"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn blue lighten-2"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Поиск
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>Все</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Фильмы</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Сериалы</span>
          </label>
        </div>
      </div>
    );
  }
}