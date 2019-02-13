/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import styles from './styles.scss';

export const BoxList = ({ amount }) => {
  const boxes = new Array(amount).fill('');

  return (
    <div className={styles.boxList}>
      {boxes.map((box, index) => <Box number={index + 1} key={index} />)}
    </div>
  );
};

BoxList.propTypes = {
  amount: PropTypes.number.isRequired,
};
