import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

export const Box = ({ opened, winner, number }) => {

  return (
    <div className={classnames(styles.box, { [styles.opened]: opened })}>
      {opened && (
        <Fragment>
          <div className={classnames(styles.edge, styles.top)} />
          <div className={classnames(styles.edge, styles.right)} />
          <div className={classnames(styles.edge, styles.back)} />
        </Fragment>
      )}
      <div className={classnames(styles.face, styles.side)} />
      <div className={classnames(styles.face, styles.front)}>{number}</div>
      <div className={classnames(styles.face, styles.top)} />
    </div>
  );
};

Box.propTypes = {
  opened: PropTypes.bool,
  winner: PropTypes.bool,
  number: PropTypes.number,
};

Box.defaultProps = {
  opened: false,
  winner: false,
  number: 1,
};
