import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action='#' className='form'>
      <input onChange={handleChange} type='text' value={novaTarefa} />
      <button type='submit'>
        <FaPlus />
      </button>
    </form>
  );
}

// From.defaultPros = { Variáveis sem o valor isRequirid
//   novaTarefa: 'Valor Padrão'
// }

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
