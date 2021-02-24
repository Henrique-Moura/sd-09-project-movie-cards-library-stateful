import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    );
  }
}

const { string, func } = PropTypes;
Subtitle.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default Subtitle;
