import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, handleChange} = this.props;
    return (
      <label htmlFor data-testid="title-input-label">
        Título
        <input
          name="title"
          onChange={ handleChange }
          data-testid="title-input"
          value={ value }
        />
      </label>
    );
  }
}

const { string, func } = PropTypes;
Title.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
}

export default Title;
