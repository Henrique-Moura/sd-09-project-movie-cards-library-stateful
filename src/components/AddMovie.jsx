import React, { Component } from 'react';
import { func } from 'prop-types';
import '../CSS/add-movie.css';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.inputCreate = this.inputCreate.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { type, checked, value, name } = target;
    const valueChange = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueChange,
    });
  }

  inputCreate(type, stateKey, stateValue, labelName) {
    return (
      <div className="input-container">
        <label htmlFor={ stateKey } data-testid={ `${stateKey}-input-label` }>
          {labelName}
          <input
            name={ stateKey }
            type={ type }
            value={ stateValue }
            onChange={ this.handleChange }
            data-testid={ `${stateKey}-input` }
          />
        </label>
      </div>
    );
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div className="form-container">
        <form data-testid="add-movie-form" className="forms">
          { this.inputCreate('text', 'title', title, 'Título') }
          { this.inputCreate('text', 'subtitle', subtitle, 'Subtítulo') }
          { this.inputCreate('text', 'imagePath', imagePath, 'Imagem') }
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              onChange={ this.handleChange }
              data-testid="storyline-input"
            />
          </label>
          { this.inputCreate('number', 'rating', rating, 'Avaliação') }
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              value={ genre }
              onChange={ this.handleChange }
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <div>
            <button
              type="button"
              onClick={ onClick }
              data-testid="send-button"
            >
              Adicionar filme
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};

export default AddMovie;
