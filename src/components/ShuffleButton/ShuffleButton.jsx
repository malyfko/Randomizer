import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const ShuffleButton = ({ onClick, disabled }) => (
  <button
    className={styles.shuffleButton}
    type="button"
    onClick={(event) => { event.preventDefault(); onClick(); }}
    disabled={disabled}
  >
    Shuffle
  </button>
);

ShuffleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
