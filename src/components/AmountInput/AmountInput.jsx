import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const AmountInput = ({ value, onChange }) => (
  <input
    className={styles.input}
    type="text"
    placeholder="Enter amount of participants"
    value={value}
    onChange={(event) => {
      event.preventDefault();
      onChange(event.target.value);
    }}
  />
);

AmountInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
