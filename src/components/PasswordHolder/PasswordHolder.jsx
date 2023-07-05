import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const PasswordHolder = ({ password }) => {
  return (
    <div className={styles.container}>
      <h3>Пароль:</h3>
      <div className={styles.display}>{password}</div>
    </div>
  );
};

PasswordHolder.propTypes = {
  password: PropTypes.string.isRequired,
};

export default PasswordHolder;
