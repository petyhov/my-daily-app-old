import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const WithLoader = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

WithLoader.propTypes = {
  children: PropTypes.node,
};

export default WithLoader;
