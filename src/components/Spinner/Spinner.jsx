import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Spinner = ({ size = 20 }) => {
  return <div style={{ fontSize: size }} className={styles.loader} />;
};

Spinner.propTypes = {
  size: PropTypes.number,
};

export default Spinner;
