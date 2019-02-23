import React from 'react';
import PropTypes from 'prop-types';

import parrot from 'assets/parrot.gif';
import styles from './styles.scss';

export const ShuffleButton = ({ onClick, disabled }) => (
  <button
    className={styles.shuffleButton}
    type="button"
    onClick={(event) => { event.preventDefault(); onClick(); }}
    disabled={disabled}
  >
    {disabled
      ? <img src={parrot} alt="" />
      : 'Shuffle'
    }
  </button>
);

ShuffleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
