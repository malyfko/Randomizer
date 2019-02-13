/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import styles from './styles.scss';

export const BoxList = ({ amount, openedBox, winner }) => {
  const boxes = new Array(amount).fill('');

  return (
    <div className={styles.boxList}>
      {boxes.map((box, index) => (
        <Box number={index + 1} key={index} opened={openedBox === index + 1} winner={winner === index + 1} />
      ))}
    </div>
  );
};

BoxList.propTypes = {
  amount: PropTypes.number.isRequired,
  openedBox: PropTypes.number,
  winner: PropTypes.number,
};

BoxList.defaultProps = {
  openedBox: null,
  winner: null,
};
