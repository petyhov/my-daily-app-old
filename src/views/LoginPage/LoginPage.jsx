import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const LoginPage = ({ usersData, userHandler }) => {
  return (
    <div className={styles.container}>
      {usersData.map((user) => (
        <button
          key={user.name}
          className={styles.userBtn}
          onClick={userHandler}
          value={user.name}
        >
          {user.name}
        </button>
      ))}
    </div>
  );
};

LoginPage.propTypes = {
  usersData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      permissions: PropTypes.array.isRequired,
      protected: PropTypes.bool,
    })
  ),
  userHandler: PropTypes.func.isRequired,
};

export default LoginPage;
